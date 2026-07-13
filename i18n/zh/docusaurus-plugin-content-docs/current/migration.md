---
sidebar_label: 迁移到新版本
title: 迁移到新版本
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解迁移到新版本的相关内容，浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天试用版本。
---

# 迁移到新版本 {#migration-to-newer-versions}

## 5.0 -> 6.0

### Diagram Editor 结构 {#diagram-editor-structure}

Diagram Editor 的主要部分已重命名：

- 左侧面板 -> [Shapebar](guides/diagram_editor/shapebar.md)
- 右侧面板 -> [Editbar](guides/diagram_editor/editbar.md) 已[提供灵活的配置](whats_new.md#new-functionality)

默认的 [Toolbar](guides/diagram_editor/toolbar.md) 结构已被修改。它同样变得高度可配置，因此您也可以添加自定义 Toolbar 元素。

### Diagram Editor API

引入了 `view` 对象，用于配置 Diagram Editor 面板：

~~~jsx
view?: {
    toolbar?: boolean | obj,
    shapebar?: boolean | obj,
    editbar?: boolean | obj
}
~~~

请查看相关的 API 概述指南，以探索管理面板的新可能性：

- [View API 概述](api/diagram_editor/view/api_overview.md)
- [Toolbar API 概述](api/diagram_editor/toolbar/api_overview.md)
- [Shapebar API 概述](api/diagram_editor/shapebar/api_overview.md)
- [Editbar API 概述](api/diagram_editor/editbar/api_overview.md)

#### 已弃用的方法 {#deprecated-methods}

- Diagram Editor 的 `setViewMode()` 方法已弃用，不再受支持。请改用 `view` 对象的 [`show()`](api/diagram_editor/view/methods/show_method.md)/[`hide()`](api/diagram_editor/view/methods/hide_method.md) 方法。

~~~jsx {4} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.setViewMode("preview"); // "preview" 或 "edit"
~~~

~~~jsx {4-5} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.view.hide("shapebar");
editor.view.hide("editbar");
~~~

#### 已弃用的属性 {#deprecated-properties}

- Diagram Editor 的 `reservedWidth` 属性已弃用，不再受支持。

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    reservedWidth: 150
});
~~~

请改用以下语法：

~~~jsx title="From v6.0"
editor.diagram.config.margin.x = 40;
~~~

- Diagram Editor 的 `editMode` 属性已弃用，不再受支持。请改用 `view` 对象的相应属性（[toolbar](api/diagram_editor/toolbar/api_overview.md)、[shapebar](api/diagram_editor/shapebar/api_overview.md)、[editbar](api/diagram_editor/editbar/api_overview.md)）。

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    editMode: false
});
~~~

~~~jsx {2-6} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: false,
        shapebar: false, // only for "default" mode
        editbar: false
    }
});
~~~

- Diagram Editor 的 `controls` 属性已弃用，不再受支持。请改用 `view.toolbar` 配置的 [`items`](api/diagram_editor/toolbar/config/items_property.md) 属性。

~~~jsx {2-4} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    controls: {
        // ...
    }
});
~~~

~~~jsx {2-6} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: {
            items: []
        }
    }
});
~~~

- Diagram Editor 的 `shapeBarWidth` 属性已弃用，不再受支持。请改用 `view.shapebar` 配置的 [`width`](api/diagram_editor/shapebar/config/width_property.md) 属性。

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeBarWidth: 190
});
~~~

~~~jsx {3-7} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // 默认为 300
        }
    }
});
~~~

- Diagram Editor 的 `shapeSections` 属性已弃用，不再受支持。请改用 `view.shapebar` 配置的 [`sections`](api/diagram_editor/shapebar/config/sections_property.md) 属性。

~~~jsx {2-7} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "Swimlane": [{ swimlane: true }],
        "Groups": [{ group: true }],
        "Flowchart shapes": [{ flowShapes: true }],
        "Org shapes, text, topic": [{ org: true }, "text", "topic"]
    }
});
~~~

~~~jsx {3-12} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

- Diagram Editor 的 `gapPreview` 属性已弃用，不再受支持。请改用 `view.shapebar` 配置中 [`preview`](api/diagram_editor/shapebar/config/preview_property.md) 对象的 `gap` 属性。

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

- Diagram Editor 的 `scalePreview` 属性已弃用，不再受支持。请改用 `view.shapebar` 配置中 [`preview`](api/diagram_editor/shapebar/config/preview_property.md) 对象的 `scale` 属性。

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

#### 已弃用的事件 {#deprecated-events}

- 由于工具栏中已没有相应的按钮，Diagram Editor 的以下事件已弃用，不再受支持：`resetButton`、`applyButton`、`visibility`、`exportData`、`importData`、`autoLayout`。您可以改为监听 Diagram Editor 的 `toolbar` 对象的 `click` 事件：

~~~jsx
editor.toolbar.events.on("click", id => console.log(id));
~~~

:::note
[服务元素](guides/diagram_editor/toolbar.md#service-elements)的 id 以 `$` 符号开头。
:::

- Diagram Editor 的 `changeGridStep` 事件已弃用，不再受支持。

### Diagram API

- [`addShape`](api/diagram/addshape_method.md) 方法的 `properties` 属性已弃用，不再使用。Editor 中 Editbar 内自定义形状的配置是通过 Editbar 面板的 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 属性实现的：

~~~jsx {13-16} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);

editor.diagram.addShape("network", {
    template: config => (
        `<section className='template'>
            <h3>${config.title}</h3>
            <ul><li>${config.text.join("</li><li>")}</li></ul>
        </section>`
    ),
    properties:[
        { type:"arrange" },
        { type:"size" }
    ]
});
~~~

~~~jsx {14-27} title="From v6.0"
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
            <section className="dhx_diagram_template_d">
                <img className="dhx_diagram_template_d__image" src="${img}" alt="${text}"/></img>
                <span className="dhx_diagram_template_d__title">${text}</span>
                <span className="dhx_diagram_template_d__text">${ip}</span>
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

### Diagram Selection API

- Diagram 的 Selection 对象的 `getId()` 方法已弃用，不再受支持。您可以改用 Selection 对象的 [`getIds()`](api/selection/getids_method.md) 和 [`getItem()`](api/selection/getitem_method.md) 方法。请查看下面的示例：

~~~jsx {7} title="Before v6.0"
// diagram 必须使用 "select:true" 选项创建
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
diagram.data.parse(data);

const id = diagram.selection.getId(); // -> "2"
~~~

~~~jsx {7-11} title="From v6.0"
// 需使用 "select:true" 选项创建 diagram
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
diagram.data.parse(data);

// 返回最后一个被选中的元素
let id = diagram.selection.getIds().at(-1);
id = diagram.selection.getItem().id;
~~~

### 形状属性 {#shape-properties}

[形状配置对象](shapes/configuration_properties.md)的 `text` 属性的用法仅限于字符串值。在配置自定义形状时将其用作字符串值数组的用法已弃用，不再受支持。

### 线条标题 {#line-titles}

线条标题已从 `line` 对象中移出，被移至与线条同级的通用数据结构中，并定义为 [`lineTitles`](/line_titles/) 对象。

在 v6.0 之前，线条标题是在 `line` 对象内按以下方式指定的：

~~~jsx title="Before v6.0"
const data = [
    // line 对象
    {
        // line 对象的属性
        title?: {
            fontSize?: number | string, // 默认为 14
            lineHeight?: number | string, // 默认为 14
            textAlign?: "center" | "left" | "right", // 默认为 "center"
            textVerticalAlign?: string,
            fontStyle?: "normal" | "italic" | "oblique", // 默认为 "normal"
            fontColor?: string, // 默认为 "#4C4C4C"
            fontWeight?: string, // 默认为 "500"
            fill?: string,
            editable?: boolean, // 默认为 true
            hidden?: boolean,
            draggable?: boolean,
            autoPosition?: boolean,
            text?: [
                {
                    id?: string | number,
                    type?: "$linetext",
                    width?: number,
                    height?: number,
                    distance?: number,
                    autoPosition?: boolean,
                    hidden?: boolean,
                    editable?: boolean, // 默认为 true
                    draggable?: boolean,
                    fill?: string,
                    text?: string,
                    fontSize?: number | string, // 默认为 14
                    lineHeight?: number | string, // 默认为 14
                    fontStyle?: "normal" | "italic" | "oblique", // 默认为 "normal"
                    fontColor?: string, // 默认为 "#4C4C4C"
                    fontWeight?: string, // 默认为 "500"
                    textAlign?: "center" | "left" | "right", // 默认为 "center"
                    textVerticalAlign?: "center" | "top" | "bottom" // 默认为 "center"
                },
                // 该线条文本项的更多对象
            ]
        }
    },
    // 更多 line 对象
]
~~~

从 v6.0 起，线条标题被定义在具有 `"lineTitle"` 类型的独立对象中。`lineTitle` 对象具有以下配置属性：

~~~jsx title="From v6.0"
const data = [
    // line title 对象
    {
        type: "lineTitle",
        id?: string | number,
        text: string,
        parent: string | number,

        distance?: number, // 默认为 50
        autoPosition?: boolean, // 默认为 true
        editable?: boolean, // 默认为 true
        fixed?: boolean, // 默认为 false
        hidden?: boolean, // 默认为 false

        fill?: string,
        fontSize?: string | number, // 默认为 14
        lineHeight?: string | number, // 默认为 14
        fontStyle?: "normal" | "italic" | "oblique", // 默认为 "normal"
        fontColor?: string, // 默认为 "#4C4C4C"
        fontWeight?: string, // 默认为 "500"
        textAlign?: "center" | "left" | "right" // 默认为 "center"
    },
    // 更多对象
];
~~~

详情请查看 LineTitles 的 [API](line_titles/configuration_properties.md) 和[指南](/line_titles/)。

### 本地化 {#localization}

由于 Diagram Editor 界面进行了修改，语言区域设置也已更新。详情请查看[本地化指南](guides/localization.md)。

## 4.2 -> 5.0

### Diagram API

Diagram 的 `lineGap` 属性已弃用，不再受支持。请改用 [lineConfig](api/diagram/lineconfig_property.md) 属性中的 `lineGap` 参数。

~~~jsx {3} title="Before v5.0"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="From v5.0"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // 其他配置参数
});
~~~

### Editor API

Diagram Editor 的 `lineGap` 属性已弃用，不再受支持。请改用 `lineConfig` 属性中的 `lineGap` 参数。

~~~jsx {3} title="Before v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="From v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // 其他配置参数
});
~~~

## 4.1 -> 4.2

### Diagram API

在 v4.2 中，`defaultLinkType` 属性已被弃用。

从 v4.2 起，您需要应用新的 [lineConfig](api/diagram/lineconfig_property.md) 属性来指定连接线的默认类型。

~~~jsx title="Before v4.2"
const diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType: "dash"
});
~~~

~~~jsx {2-4} title="From v4.2"
const diagram = new dhx.Diagram("diagram_container", {
    lineConfig: {
        lineType: "dash",
    },
    // 其他配置参数
});
~~~

### Editor API

Editor 左侧面板中各分区的基本项目集合的指定语法已发生变化。

在 v4.2 之前，您可以为分区项目数组设置布尔值 *true*，以在该分区中显示所有可用的流程图形状：

~~~jsx {3} title="Before v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [true],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

从 v4.2 起，您需要使用不同的语法来实现此目的：

~~~jsx {3} title="From v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [{ flowShapes: true }],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

此外，现在还可以通过相应的 *key:value* 键值对来指定其他基本项目集合。更多详情请查看 `shapeSections` 一文。

## 3.1 -> 4.0

### API

`shapeHover` 事件已在 v4.0 中弃用。从 v4.0 开始，请改用新的 [itemMouseOver](api/diagram/itemmouseover_event.md) 事件。

~~~jsx title="Before v4.0"
diagram.events.on("shapeHover", (id,e) => {
    console.log("An item"+ diagram.data.getItem(id).text +"has been hovered over");
});
~~~

~~~jsx title="From v4.0"
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
// 针对 Diagram Editor
editor.diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~

## 3.0 -> 3.1

### Editor API

editor 对象的 `shapeMove` 事件已在 v3.1 中弃用。从 v3.1 开始，请改用新的 `BeforeShapeMove` 和 `AfterShapeMove` 事件。

~~~jsx title="Before v3.1"
editor.events.on("shapeMove", () => {
    console.log("The shape is moved");
});
~~~

~~~jsx title="From v3.1"
// BeforeShapeMove 事件
editor.events.on("BeforeShapeMove", (e) => {
    console.log("Before the shape is moved:", e);
    return true;
});

// AfterShapeMove 事件
editor.events.on("AfterShapeMove", (e) => {
    console.log("After the shape is moved:", e);
});
~~~

## 2.2 -> 3.0

### 创建自定义形状 {#creating-custom-shapes}

创建自定义形状的方式已发生变化，变得更简单，也有所改进。

从 v3.0 起，要创建您自己的形状类型，应使用新的 `addShape` 方法，而不是 *diagram.flowShapes* 对象。该方法使您能够创建可在不同浏览器中正常工作的 HTML 模板。此外，该方法还允许在 Diagram Editor 中创建和编辑自定义形状。

尽管 *diagram.flowShapes* 对象已被弃用，但它将继续可用。

### Editor 中的 Toolbar 按钮 {#toolbar-buttons-in-editor}

在 3.0 版本之前，您可以通过 Editor 的相关 *showApply、showReset、showExport* 配置属性在 Diagram Editor 中显示/隐藏工具栏按钮。

在 3.0 版本中，这些属性已被弃用并移除。取而代之的是新增了包含一组 *control_name:value* 键值对的 `controls` 配置属性。因此，这些属性被替换为：

- showApply -> controls.apply
- showReset -> controls.reset
- showExport -> controls.export

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    controls: {
        apply: false,
        reset: false,
        export: true
    }
});
~~~

要启用/禁用某个工具栏按钮，您需要将该控件的值指定为 *true*（默认）或 *false*。

可用控件的完整列表请参见 [Toolbar](guides/diagram_editor/toolbar.md) 一文。

## 1.1 -> 2.0

### 已移除的 API {#removed-api}

- diagram.eachChild

### 已更改的 API {#changed-api}

- diagram.addItem -> [diagram.data.add](api/data_collection/add_method.md)
- diagram.attachEvent -> [diagram.events.on](guides/event_handling.md#attaching-event-listeners)
- diagram.callEvent -> [diagram.events.fire](guides/event_handling.md#calling-events)
- diagram.clearAll -> [diagram.data.removeAll](api/data_collection/removeall_method.md)
- diagram.deleteItem -> [diagram.data.remove](api/data_collection/remove_method.md)
- diagram.detachEvent -> [diagram.events.detach](guides/event_handling.md#detaching-event-listeners)
- diagram.eachItem -> [diagram.data.map](api/data_collection/map_method.md)
- diagram.getItem -> [diagram.data.getItem](api/data_collection/getitem_method.md)
- diagram.getSelectedId -> `diagram.selection.getId`
- diagram.load -> [diagram.data.load](api/data_collection/load_method.md)
- diagram.parse -> [diagram.data.parse](api/data_collection/parse_method.md)
- diagram.selectItem -> [diagram.selection.add](api/selection/add_method.md)
- diagram.serialize -> [diagram.data.serialize](api/data_collection/serialize_method.md)
- diagram.unselectItem -> [diagram.selection.remove](api/selection/remove_method.md)
- diagram.updateItem -> [diagram.data.update](api/data_collection/update_method.md)
