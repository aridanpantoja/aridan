import { getPayload, type Payload } from "payload";
import config from "@/payload.config";
import { describe, it, beforeAll, expect } from "vitest";

let payload: Payload;

describe("Home Global", () => {
  beforeAll(async () => {
    const payloadConfig = await config;
    payload = await getPayload({ config: payloadConfig });
  });

  it("can be fetched via Local API", async () => {
    const home = await payload.findGlobal({
      slug: "home",
    });

    expect(home).toBeDefined();
  });

  it("has hero tab with expected fields", async () => {
    const home = await payload.findGlobal({
      slug: "home",
    });

    expect(home).toHaveProperty("hero");

    const heroKeys = Object.keys(home.hero);
    expect(heroKeys).toContain("carousel");
  });

  it("has carousel field as array inside hero tab", async () => {
    const home = await payload.findGlobal({
      slug: "home",
    });

    expect(home.hero).toHaveProperty("carousel");
    expect(Array.isArray(home.hero.carousel)).toBe(true);
  });
});
