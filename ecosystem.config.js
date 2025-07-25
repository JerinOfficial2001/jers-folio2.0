module.exports = {
  apps: [
    {
      name: "jers-folio",
      script: "cmd",
      args: "/c npm run start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
