---
sidebar_label: sections
title: Shapebar 的 sections 属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解 Shapebar 的 sections 属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# sections

shapebar 的[默认分区](guides/diagram_editor/shapebar.md#default-sections)为：*Shapes*、*Groups*、*Swimlanes*。

使用 `sections` 属性，您可以更改 shapebar 的结构并显示所需的项目。

### 描述 {#description}

@short: 可选。一个对象，用于指定将显示在编辑器 shapebar 中的项目分区

### 用法 {#usage}

~~~jsx
sections?: {
    [name: string]: (obj | string)[]
};
~~~

### 参数 {#parameters}

`sections` 对象可以包含一组 *key:value* 键值对，其中：
- `key` - 用户指定的分区名称
- `value` - 一个数组，可以包含：
  - 一个包含单个 *key:value* 键值对的对象，用于渲染<span id="basic">基本形状集</span>。可用的键值对列表如下：
    - `{flowShapes: true}` - （可选）显示所有可用类型的 [流程图](shapes/default_shapes.md#shapes-in-the-default-mode) 形状
    - `{org: true}` - （可选）显示 Org 形状：`"card"` 和 `"img-card"` 形状类型
    - `{group: true}` - （可选）显示一组基本的 Groups
    - `{swimlane: true}` - （可选）显示一组基本的 Swimlanes
  - 一个字符串值，指定要在分区中渲染的项目的具体类型（例如 `"text"`、`"topic"` 等）
  - 一个包含多个 *key:value* 键值对的对象，用于重新定义任意形状的默认属性

### 示例 {#example}

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 显示默认的 Shapebar
        // 或通过对象配置 Shapebar
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

### 详情 {#details}

根据所选元素的不同，特定分区中项目的配置可以是以下几种形式：

1. 渲染基本分区

您可以使用 `sections` 配置对象渲染一组基本形状。例如：

~~~jsx {5-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }],
                "Base org cards": [{ org: true }],
                "Base groups": [{ group: true }],
                "Base swimlane": [{ swimlane: true }]
            }
        }
    }
});
~~~

2. 使用字符串字面量指定项目

您可以通过使用字符串字面量指定形状类型来渲染 Shapebar 项目。请查看以下示例：

~~~jsx {5-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom section": ["custom_shape"],
                "Other shapes": ["text", "topic", "circle"]
            }
        }
    }
});
~~~

3. 重新定义基本配置

另一种方法是重新定义任意形状的基本属性，并使用所需的参数进行渲染。以下示例展示了使用不同文本和颜色设置渲染 `circle` 类型形状的效果：

~~~jsx {5-23}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Circles": [
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

您可以通过这种方式重新配置任意类型的形状。

4. 在一个分区中组合不同类型的项目

如果您的项目需要使用多种元素，您可以在 Shapebar 中创建包含混合类型项目的分区。请查看以下示例：

~~~jsx {7-27}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 显示默认的 Shapebar
        // 或通过对象配置 Shapebar
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }, "text", "topic"],
                "Circles": [
                     "circle",
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

**相关文章：** [Shapebar](guides/diagram_editor/shapebar.md#custom-sections)

**更新日志：** v6.0 中新增
