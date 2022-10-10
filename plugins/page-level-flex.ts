import { Plugin } from "$fresh/server.ts";

const name = "page-level-flex";

export default function pageLevelFlex(): Plugin {
  return {
    name,
    render(ctx) {
      ctx.render();
      return {
        styles: [{
          cssText: `body {
              height: 100vh;
              justify-content: center;
              align-items: center;
              display: flex;
              flex-direction: column;
            }`,
          id: name,
        }],
      };
    },
  };
}
