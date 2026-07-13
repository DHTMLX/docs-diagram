---
sidebar_label: magnetic
title: 编辑器的 magnetic 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的 magnetic 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# magnetic

:::info
`magnetic` 属性仅在编辑器的 `default` 模式下起作用（`type: "default"`）
:::

### 描述 {#description}

@short: 可选。定义在移动形状时是否显示对齐线；如果显示，还可以配置其外观

:::tip
当您移动的形状的中心或侧边极值坐标与附近静态形状的中心或侧边极值坐标重合时，将显示对齐线
:::

### 用法 {#usage}

~~~jsx
magnetic?: {
    show?: boolean,
    lineWidth?: number,
    lineColor?: string
} | boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
magnetic: true
~~~

通过以下配置可启用 magnetic 模式：

~~~jsx
magnetic: {
    show: true,
    lineWidth: 2,
    lineColor: "#000"
}
~~~

### 参数 {#parameters}

作为对象时，`magnetic` 属性可以包含以下参数：

- `show` -（可选）用于启用或禁用移动形状时显示的对齐线
- `lineWidth` -（可选）对齐线的宽度（默认值为 2）
- `lineColor` -（可选）对齐线的颜色（默认值为 *"#000"*）

### 示例 {#example}

~~~jsx {3-7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    magnetic: {
        show: true,
        lineWidth: 2,
        lineColor: "#B0B8CD"
    }
});
~~~

**更新日志**：`show` 参数已在 v6.0 中新增
