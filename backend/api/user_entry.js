const cors = require("cors");
const corsOptions = require("../config/corsOptions");
const { userEntry } = require("../controllers/UserEntry");

module.exports = async (req, res) => {
  return cors(corsOptions)(req, res, async () => {

    // Preflight request allow
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    if (req.method === "POST") {
      return userEntry(req, res);
    }

    res.status(405).json({ message: "Method Not Allowed" });
  });
};
