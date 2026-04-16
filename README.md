# NexSpace — IT Solutions & Premium Workspace

> Integrated IT solutions and premium furniture systems for businesses in Germany 🇩🇪 and Pakistan 🇵🇰

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 14 (App Router)             |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS (custom design system) |
| Database    | PostgreSQL via Prisma ORM           |
| Deployment  | VPS / Vercel / AWS                  |
| CI/CD       | GitHub Actions                      |

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Mohsin1214/nexspace-web.git
cd nexspace-web
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

### 4. Set up the database
```bash
# Start PostgreSQL (locally or use a cloud DB)
npm run db:push      # Push schema to DB (development)
npm run db:generate  # Generate Prisma client
npm run db:studio    # Open Prisma Studio (visual DB editor)
```

### 5. Run the development server
```bash
npm run dev
# Open http://localhost:3000
```

---

## Project Structure

```
nexspace-web/
├── .github/workflows/    # CI/CD pipelines
│   ├── ci.yml            # Lint + type-check + build on every push
│   └── deploy.yml        # Auto-deploy to production on push to main
├── app/
│   ├── (pages)/          # All route pages
│   │   ├── about/
│   │   ├── it-services/
│   │   ├── furniture/
│   │   ├── projects/
│   │   ├── gallery/
│   │   └── contact/
│   ├── api/              # API route handlers
│   │   ├── contact/
│   │   └── portfolio/
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Home page
├── components/
│   ├── layout/           # Navbar + Footer
│   └── sections/         # Page sections (Hero, Services, etc.)
├── lib/
│   ├── db.ts             # Prisma client singleton
│   └── utils.ts          # Utilities + site config
├── prisma/
│   └── schema.prisma     # Database schema
├── types/
│   └── index.ts          # TypeScript types
├── .env.example          # Environment variables template
└── tailwind.config.ts    # Custom design system tokens
`