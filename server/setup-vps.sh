#!/bin/bash
# ============================================================
# NexSpace — VPS Server Setup Script
# Run ONCE on a fresh Ubuntu 22.04 VPS as root:
#   bash setup-vps.sh
# ============================================================

set -e
echo "🚀 NexSpace VPS Setup — Ubuntu 22.04"
echo "======================================"

# 1. System update
echo "▶ Updating system packages..."
apt-get update -y && apt-get upgrade -y

# 2. Install Node.js 20
echo "▶ Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# 3. Install PM2 globally
echo "▶ Installing PM2..."
npm install -g pm2
pm2 startup systemd -u root --hp /root

# 4. Install Nginx
echo "▶ Installing Nginx..."
apt-get install -y nginx

# 5. Install Certbot (SSL)
echo "▶ Installing Certbot..."
apt-get install -y certbot python3-certbot-nginx

# 6. Install PostgreSQL
echo "▶ Installing PostgreSQL..."
apt-get install -y postgresql postgresql-contrib

# 7. Create DB and user
echo "▶ Setting up PostgreSQL database..."
sudo -u postgres psql <<SQL
CREATE USER nexspace_user WITH PASSWORD 'CHANGE_THIS_PASSWORD';
CREATE DATABASE nexspace_db OWNER nexspace_user;
GRANT ALL PRIVILEGES ON DATABASE nexspace_db TO nexspace_user;
SQL

# 8. Create app directory
echo "▶ Creating app directory..."
mkdir -p /var/www/nexspace
mkdir -p /var/log/pm2

# 9. Clone repo
echo "▶ Cloning repository..."
cd /var/www
git clone https://github.com/Mohsin1214/nexspace-web.git nexspace
cd nexspace

# 10. Install dependencies
echo "▶ Installing npm dependencies..."
npm ci --omit=dev

# 11. Set up .env.production
echo "▶ Creating .env.production (edit this file!)..."
cp .env.example .env.production
echo ""
echo "⚠️  IMPORTANT: Edit /var/www/nexspace/.env.production with real values!"
echo "   nano /var/www/nexspace/.env.production"

# 12. Run DB migrations
echo "▶ Running database migrations..."
npx prisma migrate deploy
npx prisma generate

# 13. Build the app
echo "▶ Building Next.js app..."
npm run build

# 14. Start with PM2
echo "▶ Starting app with PM2..."
pm2 start server/ecosystem.config.js --env production
pm2 save

# 15. Set up Nginx
echo "▶ Configuring Nginx..."
cp server/nginx.conf /etc/nginx/sites-available/nexspace
ln -sf /etc/nginx/sites-available/nexspace /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo ""
echo "======================================"
echo "✅ Server setup complete!"
echo ""
echo "NEXT STEPS:"
echo "1. Edit your domain in nginx.conf:  nano /etc/nginx/sites-available/nexspace"
echo "2. Get SSL cert:                    certbot --nginx -d yourdomain.com -d www.yourdomain.com"
echo "3. Point your domain DNS to this server's IP"
echo "4. Edit environment variables:      nano /var/www/nexspace/.env.production"
echo "======================================"
