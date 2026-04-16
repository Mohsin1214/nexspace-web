import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding NexSpace database...");

  // ── Services ────────────────────────────────────────────────────────────────
  const services = [
    {
      title:       "IT Support & Managed Services",
      slug:        "it-support",
      description: "24/7 technical oversight for your business operations.",
      icon:        "support_agent",
      features:    ["24/7 monitoring", "Helpdesk support", "Preventive maintenance", "SLA-backed response"],
      featured:    true,
      order:       1,
    },
    {
      title:       "Software Development",
      slug:        "software-development",
      description: "Custom-built enterprise tools and web/mobile applications.",
      icon:        "code",
      features:    ["Next.js / React", "Mobile apps (React Native)", "REST & GraphQL APIs", "PostgreSQL databases"],
      featured:    true,
      order:       2,
    },
    {
      title:       "Network Infrastructure",
      slug:        "network-infrastructure",
      description: "Robust cabling, servers, and wireless solutions.",
      icon:        "lan",
      features:    ["Structured cabling", "Server room design", "WiFi 6 deployment", "VPN & firewall"],
      featured:    false,
      order:       3,
    },
    {
      title:       "Hardware & Computer Supply",
      slug:        "hardware-supply",
      description: "Procurement of premium devices and peripherals.",
      icon:        "laptop_mac",
      features:    ["Workstations & laptops", "Servers & storage", "Networking equipment", "Peripherals"],
      featured:    false,
      order:       4,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where:  { slug: service.slug },
      update: service,
      create: service,
    });
  }

  // ── Team Members ────────────────────────────────────────────────────────────
  await prisma.teamMember.upsert({
    where:  { id: "founder-1" },
    update: {},
    create: {
      id:        "founder-1",
      name:      "Mohsin Riaz",
      role:      "Founder & CEO",
      bio:       "Founder of NexSpace with 10+ years in IT infrastructure and workspace design.",
      github:    "https://github.com/Mohsin1214",
      order:     1,
      published: true,
    },
  });

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
