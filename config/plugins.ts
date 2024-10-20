export default ({ env }) => ({
  "users-permissions": {
    enabled: true,
    config: {
      jwtSecret: env("JWT_SECRET"), // or any other config needed
    },
  },
});
