# FileFlips - Setup & Configuration Guide

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | MySQL connection string (e.g., `mysql://user:pass@localhost:3306/fileflips`) | Yes |
| `PORT` | Backend server port (default: 8080) | No |
| `ACCESS_TOKEN_KEY` | JWT secret for access tokens | Yes |
| `REFERENCE_TOKEN_KEY` | JWT secret for reference tokens | Yes |
| `SITE_NAME` | Site name displayed in messages (e.g., "FileFlips") | Yes |
| `encryption_key` | 32-byte hex key for AES-256-CBC encryption | Yes |
| `encryption_iv` | 16-byte hex IV for AES-256-CBC encryption | Yes |
| `RAZORPAY_KEY_ID` | Razorpay payment gateway key ID | Yes |
| `RAZORPAY_KEY_SECRET` | Razorpay payment gateway secret | Yes |
| `CLOUDCONVERT_API_KEY1` | CloudConvert API key (used by middlewares/convertController.js - legacy) | No |
| `CLOUDCONVERT_API_TESTING_KEY` | CloudConvert API key for actual conversion | Yes |
| `BACKEND_HOST` | Backend host URL for internal calls (e.g., `http://localhost:8080`) | Yes |
| `SMTP_HOST` | SMTP server host (e.g., `smtp.gmail.com`) | Yes |
| `SMTP_PORT` | SMTP server port (e.g., `587`) | Yes |
| `SMTP_USER` | SMTP username/email for sending emails | Yes |
| `SMTP_PASS` | SMTP password or app-specific password | Yes |
| `EMAIL_FROM` | Sender email address (defaults to `SMTP_USER`) | No |
| `FRONTEND_URL` | Frontend URL for reset link (e.g., `http://localhost:3000`) | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth 2.0 Client ID for Google Sign-In | Yes |

### Frontend (`frontend/.env`)

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_BACKEND_HOST` | Backend API base URL (e.g., `http://localhost:8080`) | Yes |
| `REACT_APP_GOOGLE_CLIENT_ID` | Google OAuth Client ID for Sign-In + Drive Picker | Yes |
| `REACT_APP_GOOGLE_API_KEY` | Google API Key for Drive Picker | No (optional feature) |
| `REACT_APP_ONEDRIVE_CLIENT_ID` | OneDrive client ID for file picker | No (optional feature) |

## External Services Required

### 1. MySQL Database
- Create a MySQL database
- Run Prisma migrations: `cd backend && npx prisma db push`
- Seed initial plans (Trial, Monthly, Yearly, Unlimited) in the `Plans` table

### 2. CloudConvert API
- Sign up at https://cloudconvert.com/api/v2
- Get an API key and set it as `CLOUDCONVERT_API_TESTING_KEY`

### 3. Razorpay Payment Gateway
- Create account at https://razorpay.com
- Get API key & secret from Razorpay Dashboard → Settings → API Keys

### 4. SMTP Email Service (Required for Forgot Password)
- Use Gmail, SendGrid, Mailgun, or any SMTP provider
- For Gmail: enable 2FA, then create an App Password at https://myaccount.google.com/apppasswords
- Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FRONTEND_URL` in backend `.env`

### 5. Google OAuth (Required for Google Sign-In)
- Create a project at https://console.cloud.google.com
- Go to **APIs & Services** → **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
- Application type: **Web application**
- Authorized JavaScript origins: add `http://localhost:3000` and `https://www.fileflips.com`
- Authorized redirect URIs: add `http://localhost:3000` and `https://www.fileflips.com`
- Copy the **Client ID** and set it as both:
  - `GOOGLE_CLIENT_ID` in backend `.env`
  - `REACT_APP_GOOGLE_CLIENT_ID` in frontend `.env`
- **Important:** Also enable the Google Sign-In API in your project under **APIs & Services** → **Library**

### 6. Dropbox (Optional)
- The Dropbox picker uses a hardcoded app key in `frontend/public/index.html`
- Replace `data-app-key="xcerhsq0e7uj6ad"` with your own Dropbox app key

### 7. OneDrive (Optional)
- Register an app at https://portal.azure.com → App registrations
- Set `REACT_APP_ONEDRIVE_CLIENT_ID`

## Database Setup

```bash
cd backend
npx prisma db push
```

This creates the following tables:
- `Users` - registered user accounts
- `GuestUser` - guest/free trial tracking
- `PaidUser` - paid subscription records
- `Plans` - available subscription plans
- `RefundUser` - refund records

### Seed Data

Insert at least a "Trial" plan in the `Plans` table for the guest user flow to work:

```sql
INSERT INTO Plans (name, price, description, maxConversions, maxFileSizeMB, batchLimit, support, formats, advantages)
VALUES ('Trial', 0, 'Free trial plan', 3, 2, 1, 'Email', '["PDF -> DOCX"]', '["Free to use"]');
```

## Running the Project

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signin` | User login |
| POST | `/signup` | User registration |
| POST | `/signout` | User logout |
| POST | `/forgot_password` | Send password reset email |
| POST | `/reset_password/:token` | Reset password with token |
| POST | `/google-signin` | Google OAuth sign-in / sign-up |
| POST | `/api/convert` | File conversion (multipart) |
| POST | `/user_entry` | Track file conversion usage |
| GET | `/get_plan` | Get all subscription plans |
| POST | `/get_unique_plan` | Get specific plan by ID |
| POST | `/buy_plan` | Purchase/activate a plan |
| POST | `/createOrder` | Create Razorpay order |
| GET | `/getKey` | Get Razorpay public key |
| POST | `/verify_payment` | Verify Razorpay payment |

## Deployment Notes

- Backend is configured for Vercel deployment via `backend/vercel.json`
- Ensure all environment variables are set in the deployment platform
- The CORS whitelist in `backend/config/whitelist.js` includes production URLs
- Frontend expects `REACT_APP_BACKEND_HOST` to point to the live backend URL
