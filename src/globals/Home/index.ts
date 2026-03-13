import type { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "home",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "hero",
          label: "Hero",
          fields: [
            {
              type: "richText",
              name: "heading",
              label: "Heading",
              required: true,
            },
            {
              type: "richText",
              name: "description",
              label: "Description",
            },
            {
              type: "text",
              name: "resume",
              label: "Resume",
              required: true,
            },
            {
              type: "upload",
              name: "image",
              label: "Image",
              relationTo: "media",
              required: true,
            },
            {
              name: "carousel",
              type: "array",
              label: "Carousel",
              fields: [
                {
                  name: "logo",
                  type: "upload",
                  label: "Logo",
                  relationTo: "media",
                  required: true,
                },
                {
                  name: "name",
                  type: "text",
                  label: "Name",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "portfolio",
          label: "Portfolio",
          fields: [
            {
              type: "richText",
              name: "heading",
              label: "Heading",
              required: true,
            },
            {
              type: "richText",
              name: "description",
              label: "Description",
            },
            {
              type: "upload",
              name: "image",
              label: "Image",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
