import type { GlobalConfig } from "payload";

export const Navbar: GlobalConfig = {
  slug: "navbar",
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "link",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
