#!/bin/bash
# ============================================================
# NexSpace — One-time Git Setup Script
# Run this ONCE from inside your "NexSpace web" folder:
#   bash setup-git.sh
# ============================================================

set -e

echo ""
echo "🚀 NexSpace Git Setup"
echo "--------------------------------------------"

# 1. Remove broken .git and re-initialize
echo "▶ Initializing git repository..."
rm -rf .git
git init -b main
git config user.name "Mohsin1214"
git config user.email "mohsinriaz803@gmail.com"

# 2. Stage all files
echo "▶ Staging all files..."
git add -A

# 3. Initial commit
echo "▶ Creating initial commit..."
git commit -m "feat: initial NexSpace website scaffold

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Premium light design system: Ochre Gold (#845400), Manrope + Inter
- Pages: Home, IT Services, Furniture, Projects, About, Gallery, Contact
- Prisma ORM + PostgreSQL schema
- GitHub Actions CI/CD pipeline
- Contact form API with Zod validation"

# 4. Add GitHub remote
echo "▶ Adding GitHub remote..."
git remote add origin https://github.com/Mohsin1214/nexspace-web.git

echo ""
echo "✅ Local git setup complete!"
echo ""
echo "--------------------------------------------"
echo "NEXT STEPS:"
echo ""
echo "1. Create the repo on GitHub:"
echo "   https://github.com/new"
echo "   Name: nexspace-web"
echo "   Private: YES"
echo "   Do NOT add README/gitignore (project has them)"
echo ""
echo "2. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. Copy .env.example → .env.local and fill in values:"
echo "   cp .env.example .env.local"
echo ""
echo "4. Install dependencies:"
echo "   npm install"
echo ""
echo "5. Set up database:"
echo "   npm run db:push"
echo ""
echo "6. Start dev server:"
echo "   npm run dev"
echo "--------------------------------------------"
