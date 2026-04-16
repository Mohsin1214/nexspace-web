// PM2 Ecosystem File — NexSpace Production
// Usage: pm2 start ecosystem.config.js --env production

module.exports = {
  apps: [
    {
      name:         "nexspace",
      script:       "node_modules/.bin/next",
      args:         "start",
      cwd:          "/var/www/nexspace",
      instances:    "max",
      exec_mode:    "cluster",
      autorestart:  true,
      watch:        false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "development",
        PORT:     3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT:     3000,
      },
      error_file:  "/var/log/pm2/nexspace-error.log",
      out_file:    "/var/log/pm2/nexspace-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
