# 其他插件

实现 [suit](https://suitcss.github.io/) 格式的样式

```
http://www.w3cplus.com/PostCSS/postcss-deep-dive-shortcuts-and-shorthand.html
postcss-alias 插件可以创建自定义的简写属性 —— @Sean King
postcss-crip 插件有数百个预定义的属性简写 —— @Johnie Hjelm
postcss-font-magician可以像使用默认字体来使用自定义字体，自动生成 @font-face 代码 —— @Jonathan Neal
postcss-circle和postcss-triangle插件可以直接地直观地创建圆和三角形 —— @Jed Mao
postcss-all-link-colors插件可以一次输出所有链接状态的颜色 —— @Jed Mao
postcss-center插件提供了使用 top: center; 和 left: center; 实现垂直和水平居中 —— @Jed Mao
postcss-clearfix插件使用 clear: fix; 输出代码清除浮动样式 —— @Sean King
postcss-position插件允许你同一行添加 top, right,bottom 和 left 作为position 属性的值 —— @Sean King
postcss-size插件允许你一次性设置宽度和高度 —— @Andrey Sitnik
postcss-verthorz插件允许你使用使用单一规则输出水平间距和垂直间距。 —— @David Hemphill
postcss-color-short插件使您能够使用一至两位数实现十六进制编码和其他颜色写法的简写。 —— @Andrey Polischuk

http://www.w3cplus.com/PostCSS/using-postcss-together-with-sass-stylus-or-less.html
rtlcss 预处理器可以根据来源在样式中生成LTR(left向right，这也是默认的)和RTL(right 向left) —— @Mohammad Younes
postcss-colorblind 可以自动生成不同版本的样式表，让你不懂色彩的人也能亲身体验自己的设计。—— @Brian Holt
postcss-svgo 插件可以给内联SVG的代码做优化，优化后的代码不到原来的一半 —— @Ben Briggs
cssnano 虽然预处理器中可以带空格和注释，但cssnano插件汇集了25个不同的插件，可以执行的各种优化远远超过这两个步骤 —— @Ben Briggs
  cssnano优化包括下面一些类型：
    删除空格和最后一个分号
    删除注释
    优化字体权重
    丢弃重复的样式规则
    优化calc()
    压缩选择器
    减少手写属性
    合并规则
postcss-import 插件提供了一个更有效的引入内联样式表的方法
css-mqpacker 插件允许你将多个相同的媒体查询合并到一起

BEM是由@Yandex提出的一种类名命名方式。SUIT是基于BEM上的另一种类名命名方式，只不过@Nicholas Gallagher在BEM的基础上做了一些调整。BEM能做的事情，SUIT都可以做，但很多用户觉得SUIT是BEM的一种改进。
postcss-bem 插件通过缩写和嵌套缓解了（手动输入）实现 SUIT 格式样式的这些问题 —— @Malte-Maurice Dreyer
  一些操作
    Block
    Element
    Modifier https://en.bem.info/tools/bem/bem-naming/#convention-by-harry-roberts
  SUIT包括结构(Utilities)和组件(Components)。组件(Components)中又可以有修饰符(Modifiers)、后代(Descendants)和状态(States)。

  postcss-bem 要组合 postcss-nested 插件 使用

PostCSS提供了三个强大的网格系统：
  Lost,@Cory Simmons创建
  postcss-grid,@Andy Jansson创建
  postcss-neat,@Jo Asakura创建

postcss-simple-vars 增加对变量的支持

@Andrey Sitnik开发的postcss-will-change will-change属性用于提前让浏览器知道某些元素设计的动画。这允许浏览器优化呈现动画渲染过程，防止延误和闪烁。
```
