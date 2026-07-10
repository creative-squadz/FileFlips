require("dotenv").config();

// CRITICAL: Prisma fires an internal engine-start promise at `new PrismaClient()`
// time that we never get a handle on. If DB credentials are wrong/rotated, that
// promise rejects with no .catch() anywhere in our code, which Node treats as an
// unhandled rejection and KILLS THE WHOLE PROCESS — every route on this server
// crashes together (that's why /signup and /user_entry were both failing with
// generic HTML instead of JSON). These two handlers stop that process death: we
// still see the real error in logs, but the server stays alive so Express's own
// try/catch blocks can return proper JSON error responses instead of Vercel's
// default crash page.
process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION (server stayed alive):", reason);
});
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION (server stayed alive):", err);
});

const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/cors");
const cookieParser = require("cookie-parser");
const credentials = require("./middlewares/credentials");
const PORT = process.env.PORT || 8080;

//middleware
app.use(credentials);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
//get correct IP
app.set("trust proxy", true);

//app
app.use("/api", require("./routes/convertRoutes"));
app.use("/", require("./routes/Auth"));
app.use("/", require("./routes/UserEntry"));
app.use("/", require("./routes/Plan"));
app.use("/", require("./routes/Payment"));

app.get("/", (req, res) => {
  res.send("Welcome to conversion Backend Server");
});

// Quick way to check if DB creds are actually working after a rotation,
// without going through signup/signin. Visit /health in the browser.
app.get("/health", async (req, res) => {
  try {
    const prisma = require("./shortcut/prisma_initilization");
    await prisma.$queryRaw`SELECT 1`;
    return res.status(200).json({ status: "ok", db: "connected" });
  } catch (error) {
    console.error("Health check DB error:", error);
    return res.status(500).json({ status: "error", db: "disconnected", message: error.message });
  }
});

// Catch-all: any error passed via next(err), or thrown synchronously in a
// non-async route, lands here — guarantees JSON instead of an HTML crash page.
app.use((err, req, res, next) => {
  console.error("Unhandled route error:", err);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Your conversion backend is running on PORT no : ${PORT}`);
});
