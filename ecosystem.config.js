module.exports = {
  apps : [
    {
      name               : "Capgemini API Sails",
      script             : "app.js",
      args               : "-x -- -port 1337",
      interpreter        : "node",
      watch              : ["api", "config"],
      max_memory_restart : "1G",
      restart_delay      : 3000,
      post_update        : ["npm install", "echo Launching the app!"],
      env : {
        PORT: 1337
      },
      env_production : {
        PORT: 1337,
        NODE_ENV: "production"
      }
    },

  ],

}
