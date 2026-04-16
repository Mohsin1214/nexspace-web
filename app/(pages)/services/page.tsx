// Redirect /services to /it-services (keep old URL working)
import { redirect } from "next/navigation";

export default function ServicesRedirect() {
  redirect("/it-services");
}
