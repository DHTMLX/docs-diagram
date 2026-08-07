---
sidebar_label: addShape()
title: addShape 方法
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 addShape 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX Diagram。
---

# addShape()

### 描述 {#description}

@short: 创建自定义形状

`addShape()` 方法既可以在 Diagram 中使用，也可以在 Editor 中使用。[查看下方示例](#example)

### 用法 {#usage}

~~~jsx
addShape(
    type: string,
    parameters: object
): void;
~~~

### 参数 {#parameters}

- `type` - （必需）自定义形状类型的唯一名称。该名称必须与默认形状的名称不同
- `parameters` - （必需）包含 `addShape()` 方法附加参数的对象。您可以在此指定以下属性：
    - `template: function` - （必需）该函数以形状的配置对象作为参数，并返回 HTML 或 SVG 模板
    - [`defaults: object`](shapes/custom_shape.md) - （可选）已创建形状的默认配置。请参阅[形状配置属性的完整列表](shapes/configuration_properties.md)
    - [`eventHandlers: object`](shapes/custom_shape.md#event-handlers-for-custom-shapes) - （可选）为形状模板的 HTML 元素添加自定义事件处理程序。`eventHandlers` 对象包含一组 `key:value` 键值对，其中：
        - `key: string` - 事件的名称。请注意，事件名称的开头使用 "on" 前缀（onclick、onmouseover）
        - `value: object` - 一个包含 `key:value` 键值对的对象，其中
          - `key` 是将应用该处理程序的 CSS 类名
          - `value` 是一个接受两个参数的函数：
            - `event: object` - （必需）事件对象
            - `shape: object` - （必需）形状对象

        :::tip
        我们建议您在初始化自定义事件处理程序时，为不同的自定义形状使用不同的 CSS 类。
        :::

### 示例 {#example}

~~~jsx {8-37} title="将形状添加到 Diagram 中"
const diagram = new dhx.Diagram("diagram_container", {
    type: "org", //  或 type: "default"，或 type: "mindmap"
    defaultShapeType: "personal",
});

diagram.data.parse(data);

diagram.addShape("personal", {
    template: ({ name, photo, post }) => (`
        <div class="dhx_diagram_template_a_box dhx_diagram_template_a">
            <div class="dhx_diagram_template_a__inside">
                <div class="dhx_diagram_template_a__picture" style="background-image: url(${photo});"></div>
                <div class="dhx_diagram_template_a__body">
                    <div class="dhx_diagram_template_a__title">${name}</div>
                    <div class="dhx_diagram_template_a__row">
                        <span class="dhx_diagram_template_a__text">${post}</span>
                    </div>
                </div>
                <div class="toggle--open-menu">
                    <span class="dhx_diagram_template_a__icon mdi mdi-dots-vertical"></span>
                </div>
            </div>
        </div>
    `),
    defaults: {
        height: 115, width: 330,
        name: "Name and First name",
        post: "Resident",
        photo: "",
    },
    eventHandlers: {
        onclick: {
            "toggle--open-menu": () => console.log("open menu")
        }
    }
});
~~~

**相关示例：** [带有 Editor 的 Diagram。组织结构图模式。卡片、editbar 和 toolbar 的自定义](https://snippet.dhtmlx.com/vcnt647v)

下面的示例展示了如何将自定义形状添加到 Diagram Editor 中，以及如何配置编辑器的 [Shapebar](guides/diagram_editor/shapebar.md) 和 [Editbar](guides/diagram_editor/editbar.md) 面板。在 Editor 的 editbar 中配置自定义形状是通过 Editbar 面板的 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 属性实现的。

~~~jsx {34-49} title="将形状添加到 Diagram Editor 中"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Network shapes": [
                    { type: "network", text: "Core", img: src + "core.svg" },
                    { type: "network", text: "Server", img: src + "server.svg" }
                ],
                "Flow shapes": [{ flowShapes: true }]
            }
        },
        editbar: {
            properties: {
                network: [
                    { type: "arrange" },
                    {
                        type: "fieldset",
                        label: "Network information",
                        rows: [
                            { type: "avatar", key: "img", circle: true, readOnly: true },
                            { type: "textarea", key: "text", label: "Description" },
                            { type: "input", key: "ip", label: "IP" }
                        ]
                    }
                ]
            }
        }
    }
});

editor.parse(data);

editor.diagram.addShape("network", {
    template: ({ img, text, ip }) => {
        return `
            <section class="dhx_diagram_template_d">
                <img class="dhx_diagram_template_d__image" src="${img}" alt="${text}"></img>
                <span class="dhx_diagram_template_d__title">${text}</span>
                <span class="dhx_diagram_template_d__text">${ip}</span>
            </section>
        `;
    },
    defaults: {
        width: 160, height: 160,
        preview: { scale: 0.7 },
        ip: "127.0.0.1"
    }
});
~~~

**更新日志：** `properties` 属性已在 v6.0 中移除。

**相关文章：** [自定义形状](shapes/custom_shape.md)

**相关示例：**

- [Diagram。思维导图模式。站点地图和用户流程示例（自定义模板）](https://snippet.dhtmlx.com/do1jwmw1)
- [带有 Editor 的 Diagram。组织结构图模式。卡片、editbar 和 toolbar 的自定义](https://snippet.dhtmlx.com/vcnt647v)
- **相关示例：** [Diagram Editor。默认模式。基础主题与自定义主题](https://snippet.dhtmlx.com/9twmlfus)
