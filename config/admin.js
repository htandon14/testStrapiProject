module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7f55915f275d4c1dff6979f13df97c80'),
  },
});
