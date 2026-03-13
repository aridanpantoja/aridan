import configPromise from "@payload-config";
import { getPayload } from "payload";
import { WidthWrapper } from "@/components/shared/width-wrapper";
import { HeroSection } from "./_components/hero-section";

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise });

  const { hero } = await payload.findGlobal({
    slug: "home",
    depth: 1,
  });

  return (
    <>
      <HeroSection {...hero} />

      <section className="bg-background border-y-2 border-foreground">
        <WidthWrapper>
          <h1>Hello, World</h1>
        </WidthWrapper>
      </section>
    </>
  );
}
