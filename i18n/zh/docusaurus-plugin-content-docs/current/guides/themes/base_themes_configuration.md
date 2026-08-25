---
sidebar_label: 配置内置主题
title: 配置内置主题
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解如何配置主题。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载免费的 30 天评估版 DHTMLX Diagram。
---

# 配置内置主题 {#configuring-built-in-themes}

## 配置所有主题 {#configuring-all-themes}

您可能会注意到，[默认](guides/themes.md#light-theme-default)主题的 CSS 变量包含配色方案的变量：

~~~css
--dhx-h-primary: 200;
--dhx-s-primary: 98%;
--dhx-l-primary: 40%;

--dhx-h-secondary: 0;
--dhx-s-secondary: 0%;
--dhx-l-secondary: 30%;

--dhx-h-danger: 0;
--dhx-s-danger: 100%;
--dhx-l-danger: 60%;

--dhx-h-success: 154;
--dhx-s-success: 89%;
--dhx-l-success: 37%;

--dhx-h-background: 0;
--dhx-s-background: 0%;
--dhx-l-background: 100%;
--dhx-a-background: 0.5;
~~~

:::tip
颜色值以 [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) 格式指定，其中：

- *色相（hue）* 是色轮上从 0 到 360 的度数，0 为红色，120 为绿色，240 为蓝色；
- *饱和度（saturation）* 是一个百分比值；0% 表示完全不饱和（灰色），100% 表示完全饱和；
- *明度（lightness）* 是一个百分比值；100% 为白色，0% 为黑色，50% 为 `"normal"`。
:::

得益于这些 CSS 变量，配色方案会自动计算。这意味着，如果您更改根元素中某个配色方案变量的值，`"contrast-light"`、`"dark"` 和 `"contrast-dark"` 主题的值将会实时自动重新计算。

例如，您可以通过以下方式一次性覆盖所有 Diagram 主题的主色：

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

此外，基于主色计算得出的变量值也会相应地重新计算。例如，聚焦颜色的值计算方式如下：

~~~jsx
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## 配置单个主题 {#configuring-a-separate-theme}

如果您想为某个单独的 [Diagram 主题](guides/themes.md) 覆盖部分颜色值，需要在 `'data-dhx-theme'` 属性中进行设置：

~~~html
<style>
    [data-dhx-theme='light'] {
        /* 边框 */
        --dhx-border-color: #ced4da;
        /* 边框结束 */

        /* 配色方案 */
        --dhx-h-primary: 210;
        --dhx-s-primary: 30%;
        --dhx-l-primary: 20%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 6;
        --dhx-s-danger: 78%;
        --dhx-l-danger: 57%;

        --dhx-h-success: 168;
        --dhx-s-success: 77%;
        --dhx-l-success: 42%;

        --dhx-l-background: 98%;
        /* 配色方案结束 */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });

    dhx.setTheme("light");
</script>
~~~

## 配置 Shapebar 中形状的外观 {#configuring-the-look-of-shapes-in-shapebar}

### 重新定义默认配色方案 {#redefining-default-color-schemes}

您可以通过重新定义指定配色方案的 CSS 变量来管理 Shapebar 项的外观：

- `--dhx-shapebar-item-font-color`
- `--dhx-shapebar-item-background`
- `--dhx-shapebar-item-border-color`

这些变量的默认值[取决于所应用的主题](guides/themes.md)。

### 设置自定义 CSS 变量 {#setting-custom-css-variables}

您还可以使用自己的 CSS 变量来调整 Shapebar 项的外观和风格。为此，您需要定义一个自定义 CSS 变量，并将其指定为 `defaults` 配置选项中相应属性的值。

:::note
该变量的值会在 Shapebar 项被选中时赋给该项，并且不会随主题的更改而重新定义。
:::

例如：

~~~html {11-12,23-24}
<style>
    :root {
        --rectangle-fill: #428df5;
        --rectangle-font-color: #002229;
    }
    [data-dhx-theme='dark'] {
        --dhx-shapebar-item-font-color: #fff;
        --dhx-shapebar-item-background: #002229;
        --dhx-shapebar-item-border-color: #007a99;

        --rectangle-fill: #f54278;
        --rectangle-font-color: #002229;
    }
</style>

<div id="editor_container" style="height: 100%"></div>

<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        defaults: {
            rectangle: {
                fill: "var(--rectangle-fill)",
                fontColor: "var(--rectangle-font-color)"
            }
        }
    });
    // 设置深色主题
    const node = document.getElementById("editor_container").childNodes[0];
    dhx.setTheme("dark", node);
</script>
~~~

## 调整 PERT 模式下任务的外观 {#adjusting-the-look-of-tasks-in-the-pert-mode}

[PERT 图模式下 Diagram 中](/#diagram-in-the-pert-mode)任务的外观由 `--dhx-shape-pert-header-background` CSS 变量定义。该变量在[默认](guides/themes.md#light-theme-default)主题中的指定方式如下：

~~~jsx
--dhx-shape-pert-header-background: var(--dhx-gantt-base-colors-primary, #537CFA);
~~~

- 当 PERT 图模式下的 Diagram 与 DHTMLX Gantt 一起使用时，Gantt 图表当前的配色方案将应用于 Diagram 任务
- 当 Diagram 单独使用时，上述 CSS 变量将被设置为默认值 `#537CFA`

