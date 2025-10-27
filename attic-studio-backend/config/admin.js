module.exports = ({ env }) => ({
  url: env('URL', '/'),
  serveAdminPanel: true,
  forgotPassword: {
    emailTemplate: {},
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'changeThisToARandomString'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'changeThisToARandomString'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'changeThisToARandomString'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
