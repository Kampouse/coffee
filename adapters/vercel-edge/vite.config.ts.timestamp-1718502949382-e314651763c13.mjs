// adapters/vercel-edge/vite.config.ts
import { vercelEdgeAdapter } from "file:///Users/kampouse/dev/coffee/node_modules/.pnpm/@builder.io+qwik-city@1.5.5_@types+node@20.14.1_rollup@4.18.0/node_modules/@builder.io/qwik-city/adapters/vercel-edge/vite/index.mjs";
import { extendConfig } from "file:///Users/kampouse/dev/coffee/node_modules/.pnpm/@builder.io+qwik-city@1.5.5_@types+node@20.14.1_rollup@4.18.0/node_modules/@builder.io/qwik-city/vite/index.mjs";

// vite.config.ts
import { defineConfig } from "file:///Users/kampouse/dev/coffee/node_modules/.pnpm/vite@5.2.12_@types+node@20.14.1/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///Users/kampouse/dev/coffee/node_modules/.pnpm/@builder.io+qwik@1.5.5_@types+node@20.14.1_undici@6.18.2/node_modules/@builder.io/qwik/optimizer.mjs";
import { qwikCity } from "file:///Users/kampouse/dev/coffee/node_modules/.pnpm/@builder.io+qwik-city@1.5.5_@types+node@20.14.1_rollup@4.18.0/node_modules/@builder.io/qwik-city/vite/index.mjs";
import tsconfigPaths from "file:///Users/kampouse/dev/coffee/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.12_@types+node@20.14.1_/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var package_default = {
  name: "my-qwik-empty-starter",
  description: "App with Routing built-in ready to create your app",
  engines: {
    node: "^18.17.0 || ^20.3.0 || >=21.0.0"
  },
  "engines-annotation": "Mostly required by sharp which needs a Node-API v9 compatible runtime",
  private: true,
  trustedDependencies: [
    "sharp"
  ],
  "trustedDependencies-annotation": "Needed for bun to allow running install scripts",
  type: "module",
  scripts: {
    build: "qwik build",
    "build.client": "vite build",
    "build.preview": "vite build --ssr src/entry.preview.tsx",
    "build.server": "vite build -c adapters/vercel-edge/vite.config.ts",
    "build.types": "tsc --incremental --noEmit",
    deploy: "vercel deploy",
    dev: "vite --mode ssr --host",
    "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
    fmt: "prettier --write .",
    "fmt.check": "prettier --check .",
    lint: 'eslint "src/**/*.ts*"',
    preview: "qwik build preview && vite preview --open",
    start: "vite --open --mode ssr",
    qwik: "qwik"
  },
  devDependencies: {
    "@builder.io/qwik": "^1.5.5",
    "@builder.io/qwik-city": "^1.5.5",
    "@types/eslint": "^8.56.10",
    "@types/node": "^20.12.7",
    "@typescript-eslint/eslint-plugin": "^7.7.1",
    "@typescript-eslint/parser": "^7.7.1",
    autoprefixer: "^10.4.14",
    eslint: "^8.57.0",
    "eslint-plugin-qwik": "^1.5.5",
    "lucide-qwik": "^1.0.0",
    postcss: "^8.4.31",
    prettier: "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.5.4",
    tailwindcss: "3.3.3",
    typescript: "5.4.5",
    undici: "*",
    vercel: "^29.1.1",
    vite: "^5.2.10",
    "vite-tsconfig-paths": "^4.2.1"
  },
  dependencies: {}
};

// vite.config.ts
var { dependencies = {}, devDependencies = {} } = package_default;
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: []
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev depencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
function errorOnDuplicatesPkgDeps(devDependencies2, dependencies2) {
  let msg = "";
  const duplicateDeps = Object.keys(devDependencies2).filter(
    (dep) => dependencies2[dep]
  );
  const qwikPkg = Object.keys(dependencies2).filter(
    (value) => /qwik/i.test(value)
  );
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}

// adapters/vercel-edge/vite.config.ts
var vite_config_default2 = extendConfig(vite_config_default, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.vercel-edge.tsx", "@qwik-city-plan"]
      },
      outDir: ".vercel/output/functions/_qwik-city.func"
    },
    plugins: [vercelEdgeAdapter()]
  };
});
export {
  vite_config_default2 as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYWRhcHRlcnMvdmVyY2VsLWVkZ2Uvdml0ZS5jb25maWcudHMiLCAidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2thbXBvdXNlL2Rldi9jb2ZmZWUvYWRhcHRlcnMvdmVyY2VsLWVkZ2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9rYW1wb3VzZS9kZXYvY29mZmVlL2FkYXB0ZXJzL3ZlcmNlbC1lZGdlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rYW1wb3VzZS9kZXYvY29mZmVlL2FkYXB0ZXJzL3ZlcmNlbC1lZGdlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdmVyY2VsRWRnZUFkYXB0ZXIgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5L2FkYXB0ZXJzL3ZlcmNlbC1lZGdlL3ZpdGVcIjtcbmltcG9ydCB7IGV4dGVuZENvbmZpZyB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZVwiO1xuaW1wb3J0IGJhc2VDb25maWcgZnJvbSBcIi4uLy4uL3ZpdGUuY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZENvbmZpZyhiYXNlQ29uZmlnLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYnVpbGQ6IHtcbiAgICAgIHNzcjogdHJ1ZSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgaW5wdXQ6IFtcInNyYy9lbnRyeS52ZXJjZWwtZWRnZS50c3hcIiwgXCJAcXdpay1jaXR5LXBsYW5cIl0sXG4gICAgICB9LFxuICAgICAgb3V0RGlyOiBcIi52ZXJjZWwvb3V0cHV0L2Z1bmN0aW9ucy9fcXdpay1jaXR5LmZ1bmNcIixcbiAgICB9LFxuICAgIHBsdWdpbnM6IFt2ZXJjZWxFZGdlQWRhcHRlcigpXSxcbiAgfTtcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2FtcG91c2UvZGV2L2NvZmZlZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2thbXBvdXNlL2Rldi9jb2ZmZWUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2thbXBvdXNlL2Rldi9jb2ZmZWUvdml0ZS5jb25maWcudHNcIjsvKipcbiAqIFRoaXMgaXMgdGhlIGJhc2UgY29uZmlnIGZvciB2aXRlLlxuICogV2hlbiBidWlsZGluZywgdGhlIGFkYXB0ZXIgY29uZmlnIGlzIHVzZWQgd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGFuZCBleHRlbmRzIGl0LlxuICovXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgVXNlckNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBxd2lrVml0ZSB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrL29wdGltaXplclwiO1xuaW1wb3J0IHsgcXdpa0NpdHkgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5L3ZpdGVcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG50eXBlIFBrZ0RlcCA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5jb25zdCB7IGRlcGVuZGVuY2llcyA9IHt9LCBkZXZEZXBlbmRlbmNpZXMgPSB7fSB9ID0gcGtnIGFzIGFueSBhcyB7XG4gIGRlcGVuZGVuY2llczogUGtnRGVwO1xuICBkZXZEZXBlbmRlbmNpZXM6IFBrZ0RlcDtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn07XG5lcnJvck9uRHVwbGljYXRlc1BrZ0RlcHMoZGV2RGVwZW5kZW5jaWVzLCBkZXBlbmRlbmNpZXMpO1xuXG4vKipcbiAqIE5vdGUgdGhhdCBWaXRlIG5vcm1hbGx5IHN0YXJ0cyBmcm9tIGBpbmRleC5odG1sYCBidXQgdGhlIHF3aWtDaXR5IHBsdWdpbiBtYWtlcyBzdGFydCBhdCBgc3JjL2VudHJ5LnNzci50c3hgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pOiBVc2VyQ29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbcXdpa0NpdHkoKSwgcXdpa1ZpdGUoKSwgdHNjb25maWdQYXRocygpXSxcbiAgICAvLyBUaGlzIHRlbGxzIFZpdGUgd2hpY2ggZGVwZW5kZW5jaWVzIHRvIHByZS1idWlsZCBpbiBkZXYgbW9kZS5cbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIC8vIFB1dCBwcm9ibGVtYXRpYyBkZXBzIHRoYXQgYnJlYWsgYnVuZGxpbmcgaGVyZSwgbW9zdGx5IHRob3NlIHdpdGggYmluYXJpZXMuXG4gICAgICAvLyBGb3IgZXhhbXBsZSBbJ2JldHRlci1zcWxpdGUzJ10gaWYgeW91IHVzZSB0aGF0IGluIHNlcnZlciBmdW5jdGlvbnMuXG4gICAgICBleGNsdWRlOiBbXSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhbiBhZHZhbmNlZCBzZXR0aW5nLiBJdCBpbXByb3ZlcyB0aGUgYnVuZGxpbmcgb2YgeW91ciBzZXJ2ZXIgY29kZS4gVG8gdXNlIGl0LCBtYWtlIHN1cmUgeW91IHVuZGVyc3RhbmQgd2hlbiB5b3VyIGNvbnN1bWVkIHBhY2thZ2VzIGFyZSBkZXBlbmRlbmNpZXMgb3IgZGV2IGRlcGVuY2llcy4gKG90aGVyd2lzZSB0aGluZ3Mgd2lsbCBicmVhayBpbiBwcm9kdWN0aW9uKVxuICAgICAqL1xuICAgIC8vIHNzcjpcbiAgICAvLyAgIGNvbW1hbmQgPT09IFwiYnVpbGRcIiAmJiBtb2RlID09PSBcInByb2R1Y3Rpb25cIlxuICAgIC8vICAgICA/IHtcbiAgICAvLyAgICAgICAgIC8vIEFsbCBkZXYgZGVwZW5kZW5jaWVzIHNob3VsZCBiZSBidW5kbGVkIGluIHRoZSBzZXJ2ZXIgYnVpbGRcbiAgICAvLyAgICAgICAgIG5vRXh0ZXJuYWw6IE9iamVjdC5rZXlzKGRldkRlcGVuZGVuY2llcyksXG4gICAgLy8gICAgICAgICAvLyBBbnl0aGluZyBtYXJrZWQgYXMgYSBkZXBlbmRlbmN5IHdpbGwgbm90IGJlIGJ1bmRsZWRcbiAgICAvLyAgICAgICAgIC8vIFRoZXNlIHNob3VsZCBvbmx5IGJlIHByb2R1Y3Rpb24gYmluYXJ5IGRlcHMgKGluY2x1ZGluZyBkZXBzIG9mIGRlcHMpLCBDTEkgZGVwcywgYW5kIHRoZWlyIG1vZHVsZSBncmFwaFxuICAgIC8vICAgICAgICAgLy8gSWYgYSBkZXAtb2YtZGVwIG5lZWRzIHRvIGJlIGV4dGVybmFsLCBhZGQgaXQgaGVyZVxuICAgIC8vICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlmIHNvbWV0aGluZyB1c2VzIGBiY3J5cHRgIGJ1dCB5b3UgZG9uJ3QgaGF2ZSBpdCBhcyBhIGRlcCwgeW91IGNhbiB3cml0ZVxuICAgIC8vICAgICAgICAgLy8gZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLCAnYmNyeXB0J11cbiAgICAvLyAgICAgICAgIGV4dGVybmFsOiBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLFxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgOiB1bmRlZmluZWQsXG5cbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gRG9uJ3QgY2FjaGUgdGhlIHNlcnZlciByZXNwb25zZSBpbiBkZXYgbW9kZVxuICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9MFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByZXZpZXc6IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gRG8gY2FjaGUgdGhlIHNlcnZlciByZXNwb25zZSBpbiBwcmV2aWV3IChub24tYWRhcHRlciBwcm9kdWN0aW9uIGJ1aWxkKVxuICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9NjAwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KTtcblxuLy8gKioqIHV0aWxzICoqKlxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGlkZW50aWZ5IGR1cGxpY2F0ZSBkZXBlbmRlbmNpZXMgYW5kIHRocm93IGFuIGVycm9yXG4gKiBAcGFyYW0ge09iamVjdH0gZGV2RGVwZW5kZW5jaWVzIC0gTGlzdCBvZiBkZXZlbG9wbWVudCBkZXBlbmRlbmNpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXBlbmRlbmNpZXMgLSBMaXN0IG9mIHByb2R1Y3Rpb24gZGVwZW5kZW5jaWVzXG4gKi9cbmZ1bmN0aW9uIGVycm9yT25EdXBsaWNhdGVzUGtnRGVwcyhcbiAgZGV2RGVwZW5kZW5jaWVzOiBQa2dEZXAsXG4gIGRlcGVuZGVuY2llczogUGtnRGVwLFxuKSB7XG4gIGxldCBtc2cgPSBcIlwiO1xuICAvLyBDcmVhdGUgYW4gYXJyYXkgJ2R1cGxpY2F0ZURlcHMnIGJ5IGZpbHRlcmluZyBkZXZEZXBlbmRlbmNpZXMuXG4gIC8vIElmIGEgZGVwZW5kZW5jeSBhbHNvIGV4aXN0cyBpbiBkZXBlbmRlbmNpZXMsIGl0IGlzIGNvbnNpZGVyZWQgYSBkdXBsaWNhdGUuXG4gIGNvbnN0IGR1cGxpY2F0ZURlcHMgPSBPYmplY3Qua2V5cyhkZXZEZXBlbmRlbmNpZXMpLmZpbHRlcihcbiAgICAoZGVwKSA9PiBkZXBlbmRlbmNpZXNbZGVwXSxcbiAgKTtcblxuICAvLyBpbmNsdWRlIGFueSBrbm93biBxd2lrIHBhY2thZ2VzXG4gIGNvbnN0IHF3aWtQa2cgPSBPYmplY3Qua2V5cyhkZXBlbmRlbmNpZXMpLmZpbHRlcigodmFsdWUpID0+XG4gICAgL3F3aWsvaS50ZXN0KHZhbHVlKSxcbiAgKTtcblxuICAvLyBhbnkgZXJyb3JzIGZvciBtaXNzaW5nIFwicXdpay1jaXR5LXBsYW5cIlxuICAvLyBbUExVR0lOX0VSUk9SXTogSW52YWxpZCBtb2R1bGUgXCJAcXdpay1jaXR5LXBsYW5cIiBpcyBub3QgYSB2YWxpZCBwYWNrYWdlXG4gIG1zZyA9IGBNb3ZlIHF3aWsgcGFja2FnZXMgJHtxd2lrUGtnLmpvaW4oXCIsIFwiKX0gdG8gZGV2RGVwZW5kZW5jaWVzYDtcblxuICBpZiAocXdpa1BrZy5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH1cblxuICAvLyBGb3JtYXQgdGhlIGVycm9yIG1lc3NhZ2Ugd2l0aCB0aGUgZHVwbGljYXRlcyBsaXN0LlxuICAvLyBUaGUgYGpvaW5gIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBlbGVtZW50cyBvZiB0aGUgJ2R1cGxpY2F0ZURlcHMnIGFycmF5IGFzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cbiAgbXNnID0gYFxuICAgIFdhcm5pbmc6IFRoZSBkZXBlbmRlbmN5IFwiJHtkdXBsaWNhdGVEZXBzLmpvaW4oXCIsIFwiKX1cIiBpcyBsaXN0ZWQgaW4gYm90aCBcImRldkRlcGVuZGVuY2llc1wiIGFuZCBcImRlcGVuZGVuY2llc1wiLlxuICAgIFBsZWFzZSBtb3ZlIHRoZSBkdXBsaWNhdGVkIGRlcGVuZGVuY2llcyB0byBcImRldkRlcGVuZGVuY2llc1wiIG9ubHkgYW5kIHJlbW92ZSBpdCBmcm9tIFwiZGVwZW5kZW5jaWVzXCJcbiAgYDtcblxuICAvLyBUaHJvdyBhbiBlcnJvciB3aXRoIHRoZSBjb25zdHJ1Y3RlZCBtZXNzYWdlLlxuICBpZiAoZHVwbGljYXRlRGVwcy5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gIH1cbn1cbiIsICJ7XG4gIFwibmFtZVwiOiBcIm15LXF3aWstZW1wdHktc3RhcnRlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQXBwIHdpdGggUm91dGluZyBidWlsdC1pbiByZWFkeSB0byBjcmVhdGUgeW91ciBhcHBcIixcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCJeMTguMTcuMCB8fCBeMjAuMy4wIHx8ID49MjEuMC4wXCJcbiAgfSxcbiAgXCJlbmdpbmVzLWFubm90YXRpb25cIjogXCJNb3N0bHkgcmVxdWlyZWQgYnkgc2hhcnAgd2hpY2ggbmVlZHMgYSBOb2RlLUFQSSB2OSBjb21wYXRpYmxlIHJ1bnRpbWVcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwidHJ1c3RlZERlcGVuZGVuY2llc1wiOiBbXG4gICAgXCJzaGFycFwiXG4gIF0sXG4gIFwidHJ1c3RlZERlcGVuZGVuY2llcy1hbm5vdGF0aW9uXCI6IFwiTmVlZGVkIGZvciBidW4gdG8gYWxsb3cgcnVubmluZyBpbnN0YWxsIHNjcmlwdHNcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcInF3aWsgYnVpbGRcIixcbiAgICBcImJ1aWxkLmNsaWVudFwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcImJ1aWxkLnByZXZpZXdcIjogXCJ2aXRlIGJ1aWxkIC0tc3NyIHNyYy9lbnRyeS5wcmV2aWV3LnRzeFwiLFxuICAgIFwiYnVpbGQuc2VydmVyXCI6IFwidml0ZSBidWlsZCAtYyBhZGFwdGVycy92ZXJjZWwtZWRnZS92aXRlLmNvbmZpZy50c1wiLFxuICAgIFwiYnVpbGQudHlwZXNcIjogXCJ0c2MgLS1pbmNyZW1lbnRhbCAtLW5vRW1pdFwiLFxuICAgIFwiZGVwbG95XCI6IFwidmVyY2VsIGRlcGxveVwiLFxuICAgIFwiZGV2XCI6IFwidml0ZSAtLW1vZGUgc3NyIC0taG9zdFwiLFxuICAgIFwiZGV2LmRlYnVnXCI6IFwibm9kZSAtLWluc3BlY3QtYnJrIC4vbm9kZV9tb2R1bGVzL3ZpdGUvYmluL3ZpdGUuanMgLS1tb2RlIHNzciAtLWZvcmNlXCIsXG4gICAgXCJmbXRcIjogXCJwcmV0dGllciAtLXdyaXRlIC5cIixcbiAgICBcImZtdC5jaGVja1wiOiBcInByZXR0aWVyIC0tY2hlY2sgLlwiLFxuICAgIFwibGludFwiOiBcImVzbGludCBcXFwic3JjLyoqLyoudHMqXFxcIlwiLFxuICAgIFwicHJldmlld1wiOiBcInF3aWsgYnVpbGQgcHJldmlldyAmJiB2aXRlIHByZXZpZXcgLS1vcGVuXCIsXG4gICAgXCJzdGFydFwiOiBcInZpdGUgLS1vcGVuIC0tbW9kZSBzc3JcIixcbiAgICBcInF3aWtcIjogXCJxd2lrXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJ1aWxkZXIuaW8vcXdpa1wiOiBcIl4xLjUuNVwiLFxuICAgIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5XCI6IFwiXjEuNS41XCIsXG4gICAgXCJAdHlwZXMvZXNsaW50XCI6IFwiXjguNTYuMTBcIixcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjEyLjdcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjcuNy4xXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjcuNy4xXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xNFwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNTcuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1xd2lrXCI6IFwiXjEuNS41XCIsXG4gICAgXCJsdWNpZGUtcXdpa1wiOiBcIl4xLjAuMFwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzFcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMi41XCIsXG4gICAgXCJwcmV0dGllci1wbHVnaW4tdGFpbHdpbmRjc3NcIjogXCJeMC41LjRcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiMy4zLjNcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCI1LjQuNVwiLFxuICAgIFwidW5kaWNpXCI6IFwiKlwiLFxuICAgIFwidmVyY2VsXCI6IFwiXjI5LjEuMVwiLFxuICAgIFwidml0ZVwiOiBcIl41LjIuMTBcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjFcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxTQUFTLHlCQUF5QjtBQUNqVyxTQUFTLG9CQUFvQjs7O0FDRzdCLFNBQVMsb0JBQXFDO0FBQzlDLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsZ0JBQWdCO0FBQ3pCLE9BQU8sbUJBQW1COzs7QUNQMUI7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLGFBQWU7QUFBQSxFQUNmLFNBQVc7QUFBQSxJQUNULE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxzQkFBc0I7QUFBQSxFQUN0QixTQUFXO0FBQUEsRUFDWCxxQkFBdUI7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGtDQUFrQztBQUFBLEVBQ2xDLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxJQUNULE9BQVM7QUFBQSxJQUNULGdCQUFnQjtBQUFBLElBQ2hCLGlCQUFpQjtBQUFBLElBQ2pCLGdCQUFnQjtBQUFBLElBQ2hCLGVBQWU7QUFBQSxJQUNmLFFBQVU7QUFBQSxJQUNWLEtBQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLEtBQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxJQUNYLE9BQVM7QUFBQSxJQUNULE1BQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQixvQkFBb0I7QUFBQSxJQUNwQix5QkFBeUI7QUFBQSxJQUN6QixpQkFBaUI7QUFBQSxJQUNqQixlQUFlO0FBQUEsSUFDZixvQ0FBb0M7QUFBQSxJQUNwQyw2QkFBNkI7QUFBQSxJQUM3QixjQUFnQjtBQUFBLElBQ2hCLFFBQVU7QUFBQSxJQUNWLHNCQUFzQjtBQUFBLElBQ3RCLGVBQWU7QUFBQSxJQUNmLFNBQVc7QUFBQSxJQUNYLFVBQVk7QUFBQSxJQUNaLCtCQUErQjtBQUFBLElBQy9CLGFBQWU7QUFBQSxJQUNmLFlBQWM7QUFBQSxJQUNkLFFBQVU7QUFBQSxJQUNWLFFBQVU7QUFBQSxJQUNWLE1BQVE7QUFBQSxJQUNSLHVCQUF1QjtBQUFBLEVBQ3pCO0FBQUEsRUFDQSxjQUFnQixDQUFDO0FBQ25COzs7QUR4Q0EsSUFBTSxFQUFFLGVBQWUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEVBQUUsSUFBSTtBQUtwRCx5QkFBeUIsaUJBQWlCLFlBQVk7QUFLdEQsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBa0I7QUFDN0QsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBQUE7QUFBQSxJQUVqRCxjQUFjO0FBQUE7QUFBQTtBQUFBLE1BR1osU0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFtQkEsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBO0FBQUEsUUFFUCxpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQTtBQUFBLFFBRVAsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7QUFTRCxTQUFTLHlCQUNQQSxrQkFDQUMsZUFDQTtBQUNBLE1BQUksTUFBTTtBQUdWLFFBQU0sZ0JBQWdCLE9BQU8sS0FBS0QsZ0JBQWUsRUFBRTtBQUFBLElBQ2pELENBQUMsUUFBUUMsY0FBYSxHQUFHO0FBQUEsRUFDM0I7QUFHQSxRQUFNLFVBQVUsT0FBTyxLQUFLQSxhQUFZLEVBQUU7QUFBQSxJQUFPLENBQUMsVUFDaEQsUUFBUSxLQUFLLEtBQUs7QUFBQSxFQUNwQjtBQUlBLFFBQU0sc0JBQXNCLFFBQVEsS0FBSyxJQUFJLENBQUM7QUFFOUMsTUFBSSxRQUFRLFNBQVMsR0FBRztBQUN0QixVQUFNLElBQUksTUFBTSxHQUFHO0FBQUEsRUFDckI7QUFJQSxRQUFNO0FBQUEsK0JBQ3VCLGNBQWMsS0FBSyxJQUFJLENBQUM7QUFBQTtBQUFBO0FBS3JELE1BQUksY0FBYyxTQUFTLEdBQUc7QUFDNUIsVUFBTSxJQUFJLE1BQU0sR0FBRztBQUFBLEVBQ3JCO0FBQ0Y7OztBRHJHQSxJQUFPQyx1QkFBUSxhQUFhLHFCQUFZLE1BQU07QUFDNUMsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsZUFBZTtBQUFBLFFBQ2IsT0FBTyxDQUFDLDZCQUE2QixpQkFBaUI7QUFBQSxNQUN4RDtBQUFBLE1BQ0EsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztBQUFBLEVBQy9CO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZGV2RGVwZW5kZW5jaWVzIiwgImRlcGVuZGVuY2llcyIsICJ2aXRlX2NvbmZpZ19kZWZhdWx0Il0KfQo=
