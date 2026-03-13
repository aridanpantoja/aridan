import configPromise from "@payload-config";
import Link from "next/link";
import { getPayload } from "payload";
import { CMSLink } from "../shared/cms-link";
import { WidthWrapper } from "../shared/width-wrapper";

export async function Navbar() {
  const payload = await getPayload({ config: configPromise });

  const { navItems } = await payload.findGlobal({
    slug: "navbar",
    depth: 1,
  });

  return (
    <header className="sticky top-0 z-20 border-b-2 border-foreground bg-background">
      <WidthWrapper>
        <div className="flex justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            Aridan
          </Link>

          <nav className="flex gap-3 items-center">
            {navItems?.map((item) => (
              <CMSLink
                key={item.id}
                href={item.link}
                className="text-sm font-medium"
              >
                {item.label}
              </CMSLink>
            ))}
          </nav>
        </div>
      </WidthWrapper>
    </header>
  );
}
