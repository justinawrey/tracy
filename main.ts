/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

// First party plugins
import twind from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

// Custom plugins
import pageLevelFlex from "./plugins/page-level-flex.ts";
import hybridDarkMode from "./plugins/hybrid-dark-mode.ts";

await start(manifest, {
  plugins: [
    twind(twindConfig),
    pageLevelFlex(),
    hybridDarkMode(),
  ],
});
