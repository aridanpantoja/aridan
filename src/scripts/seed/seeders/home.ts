import path from "path";
import { getPayload } from "payload";
import config from "@/payload.config";

const brands = [
  { name: "Seazone", file: "seazone-logo.png" },
  { name: "Dvexbit", file: "dvexbit-logo.png" },
  { name: "UFPA", file: "ufpa-logo.png" },
  { name: "Techne", file: "techne-logo.png" },
];

export async function seedHome() {
  const payload = await getPayload({ config });

  // Upload profile image
  const profileImage = await payload.create({
    collection: "media",
    data: { alt: "Aridan Pantoja" },
    filePath: path.resolve(process.cwd(), "public/profile.jpg"),
  });

  // Upload brand logos
  const carouselItems = await Promise.all(
    brands.map(async (brand) => {
      const logo = await payload.create({
        collection: "media",
        data: { alt: brand.name },
        filePath: path.resolve(process.cwd(), `public/${brand.file}`),
      });
      return { logo: logo.id, name: brand.name };
    }),
  );

  // Update Home global
  await payload.updateGlobal({
    slug: "home",
    data: {
      hero: {
        heading: {
          root: {
            type: "root",
            children: [
              {
                type: "heading",
                tag: "h1",
                children: [
                  { type: "text", text: "I'm Aridan Pantoja,", version: 1 },
                  { type: "linebreak", version: 1 },
                  { type: "text", text: " a software engineer.", version: 1 },
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
        description: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "I'm a freelance product designer based in London. I'm very passionate about the work that I do.",
                    version: 1,
                  },
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                version: 1,
                textFormat: 0,
                textStyle: "",
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
        resume: "/resume.pdf",
        image: profileImage.id,
        carousel: carouselItems,
      },
      portfolio: {
        heading: {
          root: {
            type: "root",
            children: [
              {
                type: "heading",
                tag: "h2",
                children: [{ type: "text", text: "Portfolio", version: 1 }],
                direction: "ltr",
                format: "",
                indent: 0,
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
        image: profileImage.id,
      },
    },
  });

  console.log("Home global seeded");
}
