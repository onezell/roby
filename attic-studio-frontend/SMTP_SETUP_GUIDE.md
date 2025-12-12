# Google Workspace SMTP Setup Guide

## Prerequisites

1. **2-Step Verification must be enabled** on your Google Workspace account
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate an App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Name it: "Attic Studio Website"
   - Click "Generate"
   - Copy the 16-character password immediately (format: xxxx xxxx xxxx xxxx)

## Environment Configuration

Update your `.env.local` file:

```env
# SMTP Configuration - Google Workspace
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=hello@atticstudio.games
SMTP_PASS=YOUR_16_CHARACTER_APP_PASSWORD  # No spaces!
SMTP_FROM=hello@atticstudio.games
CONTACT_EMAIL=hello@atticstudio.games
```

## Important Notes

- App passwords are **16 characters** long (not 19)
- Do NOT include spaces when copying the password
- The app password will only be shown once - save it securely
- If you lose the password, generate a new one
- App passwords only work if 2-Step Verification is enabled

## Troubleshooting

If you get "Username and Password not accepted":

1. Verify 2-Step Verification is enabled
2. Generate a new App Password
3. Ensure you're using the full 16 characters
4. Check that the email address is correct: hello@atticstudio.games
5. Make sure you're not using your regular Google password

## Security Best Practices

- Never commit passwords to Git
- Use different App Passwords for different applications
- Regularly rotate your App Passwords
- Monitor email activity in Google Admin console