// Redirect /portfolio to /projects (keep old URL working)
import { redirect } from "next/navigation";

export default function PortfolioRedirect() {
  redirect("/projects");
}
