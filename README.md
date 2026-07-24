# landing ttl

1. bun i
2. bun run dev
3. abrir el local host
4. http://localhost:4321/
5. cambio lo que tenga que cambiar
6. le doy control s
7. luego de haber hecho los cambios abro la pestaña de git las ramitas con bolitas a la izquierda
8. le hago clic a los cambios 
9. los reviso 
10. si estan bien le doy + 
11. en mensaje s le escribo que hice
12. y commit
13. y sincronizar

<div class="flex (este sirve para distribuir) w-full (este sirve para ancho completo) bg-red-500">
    <div class="w-10 bg-black">hola</div>
    <div class="flex-1 grid grid-cols-5 gap-2 p-2 bg-primary-200 m-10 border border-secondary-500 border-10 rounded-md text-white">
      <div>yo</div>
      <div>estoy</div>
      <div>aprendiendo</div>
      <div>equis</div> 
      <div>de</div>
      <div>ja</div>
      <div>ja</div>
    </div>
    
  </div>
# Astro Starter Kit: Minimal

```sh
bun create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).