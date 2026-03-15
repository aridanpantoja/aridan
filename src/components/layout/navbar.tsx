import configPromise from "@payload-config";
import { getPayload } from "payload";
import { NavbarClient } from "./navbar-client";

export async function Navbar() {
  const payload = await getPayload({ config: configPromise });

  const { navItems } = await payload.findGlobal({
    slug: "navbar",
    depth: 1,
  });

  const navData = (navItems ?? []).map((item) => ({
    name: item.label,
    href: item.link,
  }));

  return <NavbarClient navData={navData} />;
}
