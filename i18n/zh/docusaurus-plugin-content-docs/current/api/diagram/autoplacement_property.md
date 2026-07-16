---
sidebar_label: autoplacement
title: autoplacement 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 autoplacement 属性。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版。
---

# autoplacement

### 描述 {#description}

@short: 可选。一个用于形状自动布局配置设置的对象

:::info
`autoplacement` 属性仅在图表的默认模式下有效，且仅适用于形状。如果使用分组或泳道，则该属性不起作用。

只有在应用 [`autoPlace()`](api/diagram/autoplace_method.md) 方法之后，才会应用自动布局。
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

`autoplacement` 对象具有以下参数：

- `mode` - （可选）形状连接的模式，`"direct"`（默认）或 `"edges"`
- `graphPadding` - （可选）设置两个或多个未连接图表之间的距离，默认为 *200*
- `placeMode` - （可选）设置形状的排列模式，`"orthogonal"`（默认）或 `"radial"`
- `itemPadding` - （可选）项之间的最小间距（最小值为 *1*），默认为 *20*
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
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        placeMode: "radial",
        mode: "direct",
        itemPadding: 10,
        levelPadding: 10,
        graphPadding: 100
    }
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

## 连接形状的模式 {#modes-of-connecting-shapes}

### "direct" 模式 {#direct-mode}

无箭头连接线按“从中心到中心”对齐。线条为直线且呈对角线状。

![](/img/direct_mode.png)

### "edges" 模式 {#edges-mode}

连接线按“从边到边”对齐。

:::info
要为线条添加箭头，请在[线对象](lines/configuration_properties.md)的配置中指定 `forwardArrow: "filled"` 或 `backArrow: "filled"`。
:::

`"edges"` 模式下的连接线可以是：

- 直线（如果设置[线对象](lines/configuration_properties.md)的 `connectType: "straight"` 属性）

![](/img/edges_straight_mode.png)

- 或 90 度折线（如果设置[线对象](lines/configuration_properties.md)的 `connectType: "elbow"` 属性）

![](/img/edges_mode.png)

## 形状的排列模式 {#modes-of-placement-of-shapes}

### "orthogonal" 模式 {#orthogonal-mode}

形状沿垂直线和水平线排列

- 线条为 `"direct"` 模式下的 `"orthogonal"` 排列

![](/img/direct_ortogonal.png)

- 线条为 `"edges"` 模式下的 `"orthogonal"` 排列

![](/img/edges_ortogonal.png)

### "radial" 模式 {#radial-mode}

形状围绕中心形状（即连接数最多的形状）排列在假想的圆周上

- 线条为 `"direct"` 模式下的 `"radial"` 排列

![](/img/direct_radial.png)

- 线条为 `"edges"` 模式下的 `"radial"` 排列

![](/img/edges_radial.png)

**更新日志**：

- `itemPadding` 和 `levelPadding` 参数在 v6.1.3 中新增
- `placeMode` 参数在 v5.0 中新增

**相关文章**：

- [配置形状的自动布局](guides/diagram/configuration.md#configuring-autoplacement-for-shapes)
- [自动排列形状](guides/manipulating_items.md#arranging-shapes-automatically)

**相关示例**：

- [Diagram. 默认模式。带内边距选项的径向自动布局](https://snippet.dhtmlx.com/huut0l1s)
- [Diagram. 默认模式。使用自动布局排列生成的径向数据集](https://snippet.dhtmlx.com/rwsime82)
