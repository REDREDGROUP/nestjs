import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["libs/index.ts"],
  format: ["cjs"],
  outExtension() {
    return {
      js: `.js`,
    };
  },
  target: "es2017",
  sourcemap: process.env.NODE_ENV !== "production",
  dts: true,
  clean: true,
});
