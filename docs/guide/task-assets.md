# 静态资源任务 {#assets-task}

任务类型为 `static` 或 `image` 。

静态资源包含常见的图像、媒体和字体文件等。如果不想处理这些静态资源文件，你可以将它们放在 `public` 目录下。



## 任务流程 {#process-flow}

- 自定义处理流程 - 处理 `pipflow.config.js` 中添加的自定义 `plugins`
- 压缩图片 - 基于 `imagemin` 压缩图片
- 生成文件hash及manifest文件



## 图片压缩

由于图片压缩是一项耗时的一次性任务，且 `gulp-imagemin` 插件**安装依赖经常失败**(国内环境)。所以 `pipflow` 将 压缩图片作为一个可选项。如果你的项目不需要 压缩图片或者手动一次性压缩，请删除项目的 `package.json` 中的 `gulp-imagemin` 依赖，并将 `imageMinify` 配置项的值设置为 `false`。

关于图片压缩配置，你可以为所有静态任务统一配置，也可以单独配置某个静态任务。

1. 统一配置项 `build.imageMinify` , 具体请看 [这里](../config/build-options.md#build-imageminify)。
2. 单独任务配置项 `minify`。

```ts
ImageMinifyOptions : boolean | {
  plugins?: ImageMinifyPlugin[]
  options?: {
    verbose?: boolean
    silent?: boolean
  }
}
```



> `gulp-imagemin` 插件在压缩图片过程中会自动过滤非图片文件。 具体配置请点击 [这里](https://www.npmjs.com/package/gulp-imagemin)

::: warning 🚨 提醒
`gulp-imagemin` 只能安装 `<=7` 的版本，`8`及以上版本仅支持 `esModule` 模块化.
:::

