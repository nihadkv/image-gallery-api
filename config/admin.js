module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '23728d106655c07060acce9bcb5de9a0'),
  },
});
