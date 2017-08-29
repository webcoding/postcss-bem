# PostCSS Bem [![Build Status][ci-img]][ci]

在 postcss-bem 上扩展了一些功能，如 shortcuts

[PostCSS] plugin implementing BEM as at-rules.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ileri/postcss-bem.svg
[ci]:      https://travis-ci.org/ileri/postcss-bem

```css
// postcss-bem 默认是 suit 模式（在BEM模式中没有@utility和@when语法，它们不会编译成任何东西，所以在BEM中不要使用Utility或State。）
// Utilities是用来处理结构和位置方面的样式，组件中也可以用这种方式来写。常常在驼峰命名前加一个u-前缀。例如.u-clearFix。
@utility utilityName {
  color: green;
}

@utility utilityName small {
  color: blue;
}

// SUIT中的Components就相当于BEM中的Block。组件的命名方式常常使用pascal命名，也更适合SUIT，使它们更容易识别。例如.SearcForm。
@component ComponentName {
  color: cyan;

  // SUIT中的Modifier和BEM中的一样，但SUIT对他们的角色控制的更为严格。SUIT中的Modifier只用于组件(Components)上，不用于Dedicated上。它也不能用于表示状态(State)变化，就算要用于状态的变化，SUIT也有自己一套专用的命名约定。
  // Modifier都用两个破折号--来连接，例如：SearchForm--advanced。
  @modifier modifierName {
    color: yellow;
  }

  // SUIT中的Descendants相当于BEM中的Element。它使用破折号-和驼峰命名结合在一起来。例如.SearchForm-heading，.SearchForm-textField
  @descendent descendentName {
    color: navy;
  }

  // State是用来反映组件更改的状态。通过不同的修饰词，反映出组件修改后的基本外观。如果有必要，State也可以应用于Descendent中。
  // State一般都在驼峰命名前添加is-前缀。如：.SearchForm.is-invalid。
  @when stateName {
    color: crimson;
  }
}

// 组件可以在命名前加一个nmsp-这样的命名空间，用来防止类名的冲突。比如.mine-SearchForm。
@component-namespace nmsp {
  @component ComponentName {
    color: red;
  }
}
```

```css
.u-utilityName {
  color: green;
}

.u-sm-utilityName {
  color: blue;
}

.ComponentName {
  color: cyan;
}

.ComponentName--modifierName {
  color: yellow;
}

.ComponentName-descendentName {
  color: navy;
}

.ComponentName.is-stateName {
  color: crimson;
}

.nmsp-ComponentName {
  color: red;
}
```

**With shortcuts** 使用快捷键

```css
@b nav { /* b is for block */
  @e item { /* e is for element */
    display: inline-block;
  }
  @m placement_header { /* m is for modifier */
    background-color: red;
  }
}
```

```css
.nav {}
.nav__item {
  display: inline-block
}
.nav_placement_header {
  background-color: red
}
```

## Usage

```js
postcss([ require('postcss-bem')({
  defaultNamespace: undefined, // default namespace to use, none by default
  style: 'suit', // suit or bem, suit by default,
  separators: {
    descendent: '__' // overwrite any default separator for chosen style
  },
  shortcuts: {
    utility: 'util' //override at-rule name
  }
}) ])
```

See [PostCSS] docs for examples for your environment.
