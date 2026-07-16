---
sidebar_label: 形状栏
title: 编辑器指南 - 形状栏
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解编辑器的形状栏。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版。
---

# 形状栏 {#shapebar}

形状栏是编辑器的一部分，用于渲染 Diagram 项目的预览。您可以选择所需的项目，并将它们从形状栏拖动到网格区域中。

:::note
形状栏仅在以默认模式（type: `"default"`）初始化的编辑器中可用。
:::

## 默认分区 {#default-sections}

默认情况下，形状栏分为三个分区：*形状*、*组* 和 *泳道*。*形状* 分区包含所有默认形状以及自定义形状。
*组* 和 *泳道* 分区包含基本的项目集合。

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义分区 {#custom-sections}

要自定义形状栏的结构，您应使用 [`sections`](api/diagram_editor/shapebar/config/sections_property.md) 属性。它允许您按所需顺序指定自己的分区，并将项目放入相应的分区中。

`sections` 属性是一个对象，包含一组 *key:value* 键值对，其中 `key` 是分区的名称，`value` 是一个数组，包含应在该分区中渲染的项目列表。

根据所选元素的不同，特定分区中项目的配置可以是以下几种情况：

1. 渲染基本分区

您可以使用 `sections` 配置对象渲染一组基本形状。例如：

~~~jsx
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

2. 借助字符串字面量指定项目

您可以借助字符串字面量指定形状类型，从而渲染形状栏项目。请查看以下示例：

~~~jsx
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

3. <p id="customization">重新定义基本配置</p>

另一种方式是重新定义任意形状的基本属性，并使用所需参数进行渲染。以下示例展示了如何渲染具有不同文本和颜色设置的 `circle` 类型形状：

~~~jsx
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

您可以按照这种方式重新配置任何类型的形状。

4. 在分区中组合不同类型的项目

如果您的项目使用了多种元素，您可以在形状栏中创建包含混合类型项目的分区。请查看以下示例：

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
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

## 添加具有不同设置的同类型项目 {#adding-items-of-the-same-type-with-different-settings}

该库允许您向编辑器的形状栏中添加多个具有不同设置的相同项目（即同类型的项目）。
为此，您需要：

- 为所需类型的项目创建具有不同配置的独立对象。您可以根据需要创建任意数量的对象
- 将创建的对象的 *名称* 用作项目的 *类型*，并使用 [`sections`](api/diagram_editor/shapebar/config/sections_property.md) 属性将其添加到形状栏的分区中

## 设置形状的预览 {#setting-the-preview-of-shapes}

要配置在编辑器形状栏中渲染的项目的预览，请使用 [`preview`](api/diagram_editor/shapebar/config/preview_property.md) 属性。它是一个包含两个属性的对象：

- `scale` -（可选）定义在编辑器形状栏中渲染的项目的缩放比例，默认值为 0.5
- `gap` -（可选）指定形状栏中渲染的项目之间的间距，默认值为 "6px 8px"
（表示上下方向间距为 6px，左右方向间距为 8px）

~~~jsx
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

### 自定义形状预览 {#customizing-a-shape-preview}

要自定义特定形状的外观，您可以应用形状对象的 [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) 配置属性。

该属性可应用于以下两种情况：

- 通过编辑器对象的 [`defaults`](api/diagram_editor/editor/config/defaults_property.md) 属性设置默认形状的默认配置时
- 通过 [`addShape()`](api/diagram/addshape_method.md) 方法的 `defaults` 属性设置自定义形状的默认配置时

下面我们来看三个配置形状预览的示例：

1\. 您可以为自定义形状指定要在形状栏中显示的图像。为此，您需要将加载图像的 URL 或 base64 图像作为字符串值传递给 `preview` 属性：

~~~jsx {6}
const defaults = {
    title: "Name and First name",
    img: "../avatar-1.jpg",
    height: 115,
    width: 330,
    preview: "../shape_preview.png"
};

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

2\. 如果您需要指定图像并定义其宽度和高度，则应将 `preview` 属性提供为包含 `img`、`height` 和 `width` 属性的对象：

~~~jsx {4-8}
const defaults = {
    title: "Name and First name", email: "some@mail.com",
    img: "../avatar-1.jpg", height: 115, width: 330,
    preview: {
        img: "../shape_preview.png",
        height: 58,
        width: 165
    }
}

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

:::note
您可以设置图像的精确宽度和高度，但无法设置图像的缩放比例。
:::

3\. 您可以通过 `scale` 属性重新定义在形状栏中渲染的特定形状的缩放比例：

~~~jsx {2-4}
const defaults = {
    preview: {
        scale: 0.72
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom shapes": ["personalCard"],
                "OrgChart shapes": ["card", "img-card"]
            },
            preview: {
                scale: 0.65
            }
        }
    }
});

editor.diagram.addShape("personalCard", {
    defaults,
    // ...
});
~~~

:::note
将数据导出为 JSON 格式时，将省略 `preview` 属性。
:::

## 设置形状栏的宽度 {#setting-the-width-of-shapebar}

形状栏的默认宽度为 300。您可以通过 [`width`](api/diagram_editor/shapebar/config/width_property.md) 属性更改它并设置任意其他宽度，例如：

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // 默认值为 300
        }
    }
});
~~~

## 显示/隐藏形状栏 {#showinghiding-the-shapebar}

当您需要控制形状栏的可见性时，可以使用 [`show`](api/diagram_editor/shapebar/config/show_property.md) 属性。它允许您在初始化 Diagram Editor 时以特定设置隐藏形状栏，并在需要时再将其显示出来。默认情况下，形状栏是显示的。

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            show: false // 默认值为 true
        }
    }
});
~~~

## 形状栏与形状外观 {#shapebar-and-shapes-appearance}

您可以通过 [`css`](api/diagram_editor/shapebar/config/css_property.md) 属性为形状栏提供所需的外观和风格。它允许指定自定义 CSS 类，以您自己的方式设置形状栏中项目展示的样式。

~~~html {6}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            shapebar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~

您还可以[调整形状的外观](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar)，方法是重新定义特定主题的默认配色方案，或使用您自己的 CSS 变量来管理形状栏项目的配色方案。
