---
sidebar_label: autoplacement
title: Editor 的 autoplacement 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 editor 的 autoplacement 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# autoplacement

### 描述 {#description}

@short: 可选。一个用于配置形状自动布局的对象

:::info
`autoplacement` 属性仅在 editor 的默认模式下有效，且仅适用于形状。如果使用群组或泳道，则该属性不起作用。
:::

### 用法 {#usage}

~~~ts
autoplacement?: {
    mode?: "direct" | "edges", // 默认为 "direct"
    graphPadding?: number, // 默认为 200
    placeMode?: "orthogonal" | "radial", // 默认为 "orthogonal"
    itemPadding?: number, // 默认为 20
    levelPadding?: number // 默认为 20
};
~~~

### 参数 {#parameters}

`autoplacement` 对象包含以下参数：

- `mode` - （可选）形状的连接模式，`"direct"`（默认）或 `"edges"`
- `graphPadding` - （可选）设置未连接图表之间的距离，默认为 *200*
- `placeMode` - （可选）设置形状的排列模式，`"orthogonal"`（默认）或 `"radial"`
- `itemPadding` - （可选）元素之间的最小间距（最小值为 *1*），默认为 *20*
- `levelPadding` - （可选）层级之间的最小间距（最小值为 *1*），默认为 *20*

### 默认配置 {#default-config}

~~~jsx
autoplacement: {
    mode: "direct",
    graphPadding: 200,
    placeMode: "orthogonal",
    itemPadding: 20,
    levelPadding: 20
}
~~~

### 示例 {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    autoplacement: {
        placeMode: "radial",
        mode: "direct",
        itemPadding: 10,
        levelPadding: 10,
        graphPadding: 100
    }
});

editor.parse(data);
~~~

## 形状连接模式 {#modes-of-connecting-shapes}

### "direct" 模式 {#direct-mode}

无箭头的连接线按“从中心到中心”对齐，呈直线和对角线状。

![](/img/direct_mode.png)

### "edges" 模式 {#edges-mode}

连接线按“从边到边”的方式对齐。

:::info
若要为线条添加箭头，请在[线条对象](lines/configuration_properties.md)的配置中指定 `forwardArrow: "filled"` 或 `backArrow: "filled"`。
:::

`"edges"` 模式下的连接线可以是：

- 直线（如果为[线条对象](lines/configuration_properties.md)设置 `connectType: "straight"` 属性）

![](/img/edges_straight_mode.png)

- 或 90 度折线（如果为[线条对象](lines/configuration_properties.md)设置 `connectType: "elbow"` 属性）

![](/img/edges_mode.png)

## 形状排列模式 {#modes-of-placement-of-shapes}

### "orthogonal" 模式 {#orthogonal-mode}

形状沿垂直和水平线排列

- `"orthogonal"` 排列方式配合 `"direct"` 模式的连接线

![](/img/direct_ortogonal.png)

- `"orthogonal"` 排列方式配合 `"edges"` 模式的连接线

![](/img/edges_ortogonal.png)

### "radial" 模式 {#radial-mode}

形状围绕中心形状（即连接数最多的形状）排列在假想的圆周上

- `"radial"` 排列方式配合 `"direct"` 模式的连接线

![](/img/direct_radial.png)

- `"radial"` 排列方式配合 `"edges"` 模式的连接线

![](/img/edges_radial.png)

**更新日志**：

- `itemPadding` 和 `levelPadding` 参数在 v6.1.3 中新增
- `placeMode` 参数在 v5.0 中新增
- `autoplacement` 属性在 v3.0 中新增

**相关示例：** [Diagram Editor。默认模式。径向自动布局算法](https://snippet.dhtmlx.com/f0cespbk)
