module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aa04d6c42b776bc034c9ce841d50b0d8'),
  },
});
