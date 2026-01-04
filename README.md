# CutPicGo

## License

This template is open-source software licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0). You are free to fork, modify, and use it in your projects.

## Attribution

Originally created by Michael Andreuzza. Modified, extended, and redistributed by Bektur Aslan with added sections and updated UI/UX for broader usage.

## This template is using Tailwind CSS V4

Now we are using only a CSS file. It's called `global.css` and it's located in the src/styles folder. Now we are eimporting Tailwind CSS on the same file instead of using the `tailwind.config.cjs` file. Like this:

```css
// Importing Tailwind CSS
@import "tailwindcss";
// Importing Tailwind plugins
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";
```

Then to add your styles you will use the @theme directive. Like this:

```css
@theme {
  /* Your CSS goes here, see how styles are written on the global.css file */
}
```

Remember this is just in Alpha version, so you can use it as you want. Just keep an eye on the changes that Tailwind CSS is going to make.

## Template Structure

Inside of your Astro project, you'll see the following folders and files:

```
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

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Want to learn more?

Feel free to check Astro's [documentation](https://docs.astro.build)

### Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cutpicgo)
### feature
通用分割
自动识别输入图像中的视觉中心主体轮廓，将主体作为前景擦除背景，返回分割后的前景主体图（4通道），适用于人、动物、食物、物品等抠图场景。
通用高清分割
主体分割，输入一张图片，对图中主体进行分割输出对应的png透明图。
天空高清分割
输入一张图片对图片中天空进行像素级抠图。
天空分割
识别输入图像中的天空区域，与前景进行分离，返回分割后的前景区域图。
食品分割
识别输入图像中的食品区域，对图像中的食品进行像素级抠图。
人体分割
识别输入图像中的人体轮廓，与背景进行分割，返回前景人像图（4通道）。适用于单人/多人、复杂背景、各类人体姿态等场景。
高清人体分割
识别输入图像中的人体轮廓，与背景进行分离，返回分割后的前景人像图。支持最大40M的高清图像分割。
头像分割
识别输入图像中的人头轮廓，含人脸、头发耳朵、发饰区域，不含脖子，返回仅人头区域可视的透明图（4通道），适用于单人场景，多人场景。人像比较明显的图片输入效果会更好。
头发分割
识别输入图像中的头发轮廓，不含脖子、耳朵头发，返回仅人脸区域可视的透明图（4通道），适用于单人、多人场景，人脸比较明显的图片输入效果会更好。
商品分割
识别输入图像中的商品轮廓，与背景进行分离，返回分割后的前景商品图（4通道），适用于单商品/多商品、复杂背景等场景。
服饰分割
识别输入图像中的服饰区域，对图像中的服饰进行像素级抠图。
天空替换
用户输入两张天空图:天空图A，天空图B；用图B中的天空部分来提替换图A中的天空，实现换天功能。

---
Maintained & updated by Bektur Aslan. Contributions welcome.
