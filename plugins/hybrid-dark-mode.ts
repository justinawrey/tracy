import { Plugin } from "$fresh/server.ts";

const name = "hybrid-dark-mode";
const main =
  `data:application/javascript,if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  export default function(state){}
  `;

export default function hybridDarkMode(): Plugin {
  return {
    name,
    entrypoints: { main },
    render(ctx) {
      ctx.render();
      return {
        scripts: [{ id: name, entrypoint: "main", state: "" }],
      };
    },
  };
}
