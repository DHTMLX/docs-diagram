---
sidebar_label: 自定义形状
title: 自定义形状
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解自定义形状。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 自定义形状 {#custom-shape}

如果默认形状无法满足您的需求，您可以创建自定义形状。

假设您想要创建一个新的 `networkCard` 形状，用于渲染图像、文本和 IP 地址。

<iframe src="https://snippet.dhtmlx.com/u1xqyo9w?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

要实现这一点，您需要执行以下步骤：

1\. 使用 [`addShape()`](api/diagram/addshape_method.md) 方法为您的形状添加一个唯一名称（本例中为 *"networkCard"*），并为其提供模板：

~~~jsx
diagram.addShape("networkCard", {
    template: ({ img, text, ip }) => (`
        <section class="dhx-diagram-demo_network-card">
            <img src="${img}" alt="${text}"></img>
            <span>${text}</span>
            <span>${ip}</span>
        </section>
    `),
    // type:"networkCard" 形状的默认配置
    defaults: {
        width: 160,
        height: 160,
        img: path.network + "desktop.svg",
        text: "Network Card",
        ip: "138.68.41.78"
    }
});
~~~

`defaults` 属性用于定义 `"networkCard"` 形状的默认配置。如有需要，可以在各个形状的配置对象中更改所指定属性的值。

2\. 在为要加载到图表中的数据集做准备时，将该形状的唯一名称用作形状对象中 `type` 属性的值。

:::note
自定义形状的数据对象可以包含任何[配置属性](shapes/configuration_properties.md)，包括自定义属性。
:::

~~~jsx
const networkDiagram = [
    {
        "id": 1,
        "type": "networkCard",
        "x": 0,
        "y": 380,
        // 更改 text 和 ip 属性的默认值
        "text": "Remote expert desktop",
        "ip": "192.168.32.2" // 自定义属性
    },
    // 更多选项
]
~~~

为了更改 *text* 和 *ip* 属性的默认值，我们在形状的配置对象中指定了同名属性并赋予新值。
这样，*"Network Card"* 文本值将被替换为 *"Remote expert desktop"*，*"138.68.41.78"* 的 ip 值将被替换为 *"192.168.32.2"*。

## 自定义形状的事件处理程序 {#event-handlers-for-custom-shapes}

当用户与自定义形状交互时，您可能需要为触发的事件添加处理程序。可以通过 [`addShape()`](api/diagram/addshape_method.md) 方法的 `eventHandlers` 属性，为形状模板中的 HTML 元素添加事件处理程序来实现。

在下面的示例中，用户点击带有 `toggle_container` 类的图标后将打开一个上下文菜单：

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

`eventHandlers` 对象包含一组 *key:value* 键值对，其中：

- *key* - 事件的名称。请注意，事件名称的开头使用 `'on'` 前缀（onclick、onmouseover）。
- *value* - 一个包含 *key:value* 键值对的对象，其中 *key* 是该事件处理程序将应用到的 css 类名，*value* 是一个接受两个参数的函数：
	- `event` - 事件对象
	- `shape` - 形状对象

*我们建议您为不同的自定义形状使用不同的 CSS 类。*
