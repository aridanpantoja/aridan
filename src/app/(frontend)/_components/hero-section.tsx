import { RichText } from "@payloadcms/richtext-lexical/react";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import { Marquee } from "@/app/(frontend)/_components/marquee";
import { WidthWrapper } from "@/components/shared/width-wrapper";
import { Button } from "@/components/ui/button";
import type { Home } from "@/payload-types";

type HeroProps = Home["hero"];

export function HeroSection({
  heading,
  description,
  image,
  resume,
  carousel,
}: HeroProps) {
  const media = typeof image === "object" ? image : null;

  return (
    <section
      data-testid="hero-section"
      className="relative overflow-hidden py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-foreground)_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.03]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-background)_100%)]"
      />

      <WidthWrapper className="relative max-w-prose">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          {media?.url && (
            <div
              data-testid="hero-image"
              className="rounded-full overflow-hidden border-foreground border-2"
            >
              <Image
                src={media.url}
                alt={media.alt ?? ""}
                width={240}
                height={720}
              />
            </div>
          )}

          <div data-testid="hero-heading" className="text-5xl font-bold">
            <RichText data={heading} />
          </div>

          {description && (
            <div data-testid="hero-description" className="text-lg">
              <RichText data={description} />
            </div>
          )}

          {resume && (
            <Button
              data-testid="hero-resume"
              render={<a href={resume} download />}
            >
              <DownloadIcon /> Download Resume
            </Button>
          )}
        </div>
      </WidthWrapper>

      {carousel && carousel.length > 0 && (
        <WidthWrapper className="relative">
          <div data-testid="hero-carousel">
            <Marquee className="[--duration:20s] p-0 mt-12" pauseOnHover>
              {carousel.map((item) => {
                const logo = typeof item.logo === "object" ? item.logo : null;
                return (
                  <div key={item.id ?? item.name}>
                    {logo?.url && (
                      <img
                        src={logo.url}
                        alt={item.name}
                        className="w-36 h-8 mr-6 lg:mr-20"
                      />
                    )}
                  </div>
                );
              })}
            </Marquee>
          </div>
        </WidthWrapper>
      )}
    </section>
  );
}
