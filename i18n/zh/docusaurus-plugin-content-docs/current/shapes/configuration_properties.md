---
sidebar_label: 形状属性
title: 形状属性
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解形状属性。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 形状属性 {#shape-properties}

:::note
请使用 HEX 格式指定颜色值。
:::

## 通用属性 {#common-properties}

### 用法 {#usage}

~~~jsx
const data = [
    // 形状对象
    {
        type: string,
        id?: string | number,
        x?: number, // 在 Diagram 默认模式下为必需项
        y?: number, // 在 Diagram 默认模式下为必需项
        text?: string,
        editable?: boolean, // 默认值为 true
        height?: number,
        width?: number,
        fixed?: boolean, // 默认值为 false
        hidden?: boolean
    },
    // 更多形状对象
]
~~~

### 描述 {#description}

每个形状对象都可以包含以下属性：

- `type` -（必需）形状的类型（默认值：默认模式下为 `"rectangle"`，组织结构图模式下为 `"card"`，思维导图模式下为 `"topic"`，PERT 模式下为 `"task"`）
- `id` -（可选）形状的唯一 id
- `x` -（可选）形状位置的 x 坐标。该属性在 Diagram 默认模式下为**必需项**
- `y` -（可选）形状位置的 y 坐标。该属性在 Diagram 默认模式下为**必需项**
- `text` -（可选）要在形状中渲染的文本
- `editable` -（可选）启用/禁用通过双击编辑形状文本的功能，默认值为 *true*。<br/>*该属性不适用于自定义形状。*
- `height` -（可选）形状的高度
- `width` -（可选）形状的宽度
- `fixed` -（可选）启用/禁用形状的移动和调整大小功能，默认值为 *false*
- `hidden` -（可选）定义形状是否隐藏

:::note
对于 `"text"`/`"topic"` 类型的形状，`height` 和 `width` 的值会根据形状的内容自动计算。
:::

## 自定义属性 {#custom-properties}

### 用法 {#usage-1}

~~~jsx
const data = [
    // 形状对象
    {
        // ... 通用属性
        [key: string]?: any, // 自定义属性
        // ... 更多自定义属性
    },
    // 更多形状对象
]
~~~

### 描述 {#description-1}

在为自定义形状准备数据集时，您可以向形状的配置对象中添加任意自定义属性：

- `key` -（可选）自定义形状的自定义属性。有关详细信息，请参阅[自定义形状](shapes/custom_shape.md)一文。<br/>*请为自定义属性使用唯一的名称。禁止覆盖 Diagram 形状对象的内部属性，否则会导致 Diagram 及其编辑器运行异常。*

### 示例 {#example}

~~~jsx
const data = [
    {
        "id": "main",
        "name": "Kristin Mccoy",
        "post": "Medical director",
        "phone": "(405) 555-0128",
        "mail": "kmccoy@gmail.com",
        "photo": "../img/avatar-01.jpg"
    }
];
~~~

## 默认模式特有的属性 {#properties-specific-for-the-default-mode}

### 用法 {#usage-2}

~~~jsx
const data = [
    // 形状对象
    {
        // ... 通用属性
        angle?: number,

        // 可以是
        preview?: string,
        // 也可以是
        preview?: {
            img?: string,
            width?: number | string,
            height?: number | string,
            gap?: number | string,
            scale?: number
        }
    },
    // 更多形状对象
]
~~~

### 描述 {#description-2}

在为默认模式下要加载到图表中的形状准备数据集时，您可以向形状的配置对象中添加以下属性：

- `angle` -（可选）形状旋转的角度
- `preview` -（可选）图像路径/base64 图像，或用于[配置编辑器 shapebar 中显示的形状预览](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)的设置对象。作为对象时，该属性可以包含以下一组可选属性：
  - `img` -（可选）图像路径或 base64 图像
  - `width` -（可选）图像的宽度
  - `height` -（可选）图像的高度
  - `gap` -（可选）为指定类型的形状设置 [preview](api/diagram_editor/shapebar/config/preview_property.md) 属性的 `gap` 特性值
  - `scale` -（可选）为指定类型的形状设置 [preview](api/diagram_editor/shapebar/config/preview_property.md) 属性的 `scale` 特性值
   :::info
   `scale` 属性不能与 `img`、`width`、`height` 属性同时使用
   :::

### 示例 {#example-1}

~~~jsx
const data = [
    { id: 1, x: 280, y: 0, text: "Start", type: "start", angle: 10 }
];
~~~

## 组织结构图模式特有的属性 {#properties-specific-for-the-org-chart-mode}

### 用法 {#usage-3}

~~~jsx
const data = [
    // 形状对象
    {
        // ... 通用属性
        parent?: string | number,
        dx?: number,
        dy?: number,
        dir?: string,
        open?: boolean, // 默认为 true
        assistant?: boolean,
        partner?: boolean,
        catchItem?: boolean,
        giveItem?: boolean

    },
    // 更多形状对象
]
~~~

### 描述 {#description-3}

在为组织结构图模式下要加载到图表中的形状准备数据集时，您可以向形状的配置对象中添加以下属性：

- `parent` -（可选）父级形状的 id
- `dx` -（可选）形状的左偏移量
- `dy` -（可选）形状的顶部偏移量
- `dir` -（可选）形状连接的方向。如需垂直连接形状，请将该属性设置为 `"vertical"` 值
- `open` -（可选）定义是否显示当前形状的子级项，默认值为 *true*
- `assistant` -（可选）定义该形状是否为父级形状的助理项
- `partner` -（可选）定义该形状是否为父级形状的合作伙伴项
- `catchItem` -（可选）定义该项是否可以捕获正在移动的项
- `giveItem` -（可选）定义该项是否可以被移动

### 示例 {#example-2}

~~~jsx
const data = [
    {
        "id": "1",
        "text": "item 1",
    },
    {
        "id": "2",
        "text": "item 2",
        "parent": "1",
        "dir": "vertical"
    },
    {
        "id": "1.1",
        "text": "assistant for 1",
        "parent": "1",
        "assistant": true
    },
    {
        "id": "1.2",
        "text": "partner for 1",
        "parent": "1",
        "partner": true
    }
];
~~~

**相关示例：** [Diagram。组织结构图模式。嵌套垂直列表](https://snippet.dhtmlx.com/98tzmzpg)

## 思维导图模式特有的属性 {#properties-specific-for-the-mindmap-mode}

### 用法 {#usage-4}

~~~jsx
const data = [
    // 形状对象
    {
        // ... 通用属性
        parent?: string | number,
        dx?: number,
        dy?: number,
        open?: boolean, // 默认为 true
        openDir?:{
            left?: boolean,
            right?: boolean
        },
        catchItem?: boolean,
        giveItem?: boolean
    },
    // 更多形状对象
]
~~~

### 描述 {#description-4}

在为思维导图模式下要加载到图表中的形状准备数据集时，您可以向形状的配置对象中添加以下属性：

- `parent` -（可选）父级形状的 id
- `dx` -（可选）形状的左偏移量
- `dy` -（可选）形状的顶部偏移量
- `open` -（可选）定义是否显示当前形状的子级项，默认值为 *true*
- `openDir` -（可选）显示/隐藏根形状的子级项。该对象接受两个属性：
    - `left` -（可选）显示/隐藏根形状左侧的子级项
    - `right` -（可选）显示/隐藏根形状右侧的子级项
- `catchItem` -（可选）定义该项是否可以捕获正在移动的项
- `giveItem` -（可选）定义该项是否可以被移动

**相关示例：** [Diagram 编辑器。思维导图模式。情绪思维导图](https://snippet.dhtmlx.com/lo1vm0e8)

:::info
请阅读[如何使用 DHTMLX 库创建 JavaScript 思维导图](https://dhtmlx.com/blog/create-javascript-mindmap-diagram-dhtmlx-library/)一文中的详细内容
:::

### 示例 {#example-3}

~~~jsx
const data = [
    {
        id: "1",
        text: "main",
        openDir: {
            left: true,
            right: false
        }
    },
    {
        id: "2",
        text: "2",
        parent: "1",
        giveItem: false
    },
    {
        id: "3",
        text: "3",
        parent: "1",
        catchItem: false
    },
    {
        id: "4",
        text: "4",
        parent: "1"
    }
];
~~~

## 适用于 "text"、"topic" 和流程图形状的特有属性 {#properties-specific-for-text-topic-and-flow-chart-shapes}

### 用法 {#usage-5}

~~~jsx
const data = [
    // 形状对象
    {
        // ... 通用属性
        fill?: string,
        stroke?: string,
        strokeWidth?: number, // 默认为 1
        strokeType?: "line" | "dash", // 默认为 "line"
        strokeDash?: string,
        fontColor?: string,
        fontStyle?: "normal" | "italic" | "oblique", // 默认为 "normal"
        fontWeight?: string, // 默认为 "normal"
        fontSize?: number, // 默认为 14
        textAlign?: "left" | "center" | "right", // 默认为 "center"
        textVerticalAlign?: "top" | "center" | "bottom", // 默认为 "center"
        lineHeight?: number // 默认为 14
    },
    // 更多形状对象
]
~~~

### 描述 {#description-5}

在为 `"text"`、`"topic"` 和流程图形状准备数据集时，您可以向形状的配置对象中添加以下属性：

- `fill` -（可选）形状的颜色
- `stroke` -（可选）形状轮廓的颜色
- `strokeWidth` -（可选）形状轮廓的宽度，默认为 1
- `strokeType` -（可选）轮廓线的类型，`"line"`（默认）或用于虚线的 `"dash"`
- `strokeDash` -（可选）虚线轮廓的虚线与间隔样式
- `fontColor` -（可选）文本字体的颜色
- `fontStyle` -（可选）文本字体的样式，可以是 `"normal"`（默认）、`"italic"` 或 `"oblique"`
- `fontWeight` -（可选）文本字体的粗细，可选值为：`"normal"`（默认）、`"bold"`、`"bolder"`、`"lighter"`，以及 `"100"` 到 `"900"` 之间的数值，其中 `"400"` 等同于 normal，`"600"` 及以上为最粗字体
- `fontSize` -（可选）字体大小（以像素为单位），默认为 14
- `textAlign` -（可选）形状中文本的对齐方式：`"left"`、`"center"`（默认）、`"right"`
- `textVerticalAlign` -（可选）形状中文本的垂直对齐方式：`"top"`、`"center"`（默认）、`"bottom"`
- `lineHeight` -（可选）行高，默认为 14

### 示例 {#example-4}

~~~jsx
const data = [
    {
        "id": "u1585139915192",
        "type": "text",
        "x": 25,
        "y": 280,
        "text": "Investment decision",
        "width": 150,
        "height": 16,
        "lineHeight": 14,
        "fontSize": "16",
        "fontColor": "rgba(0,0,0,0.70)"
    }
];
~~~

## 适用于 "card" 形状的特有属性 {#properties-specific-for-card-shapes}

### 用法 {#usage-6}

~~~jsx
const data = [
    // 形状对象
    {
        // ... 通用属性
        headerColor?: string
    },
    // 更多形状对象
]
~~~

### 描述 {#description-6}

在为 `"card"` 形状准备数据集时，您可以向形状的配置对象中添加以下属性：

- `headerColor` -（可选）形状标题栏的颜色

### 示例 {#example-5}

~~~jsx
const data = [
    {
        "id": 1,
        "type": "card",
        "text": "item: 1",
    },
    {
        "id": 2,
        "type": "card",
        "text": "item: 2",
        "parent": 1,
        "headerColor": "#5874CD"
    },
];
~~~

## 适用于 "img-card" 形状的特有属性 {#properties-specific-for-img-card-shapes}

### 用法 {#usage-7}

~~~jsx
const data = [
    // 形状对象
    {
        // ... 通用属性
        img?: string,
        title?: string,
        headerColor?: string
    },
    // 更多形状对象
]
~~~

### 描述 {#description-7}

在为 `"img-card"` 形状准备数据集时，您可以向形状的配置对象中添加以下属性：

- `img` -（可选）形状的图像
- `title` -（可选）形状的标题
- `headerColor` -（可选）形状标题栏的颜色

### 示例 {#example-6}

~~~jsx
const data = [
    {
        "id": "1",
        "type": "img-card",
        "text": "Chairman & CEO",
        "title": "Henry Bennett",
        "img": "../img/avatar-01.png",
        "headerColor": ""
    },
    {
        "id": "2",
        "type": "img-card",
        "text": "QA Lead",
        "title": "Emma Lynch",
        "img": "../img/avatar-02.png",
        "parent": "1",
        "headerColor": "#5874CD"
    }
];
~~~

## 适用于 "task" 形状的特有属性 {#properties-specific-for-task-shapes}

### 用法 {#usage-8}

~~~jsx
const data = [
    // 形状对象
    {
        type: "task",
        duration: number,
        start_date: string | Date,
        end_date?: string | Date,
        text?: string,
        parent?: string | number | null
        //... 通用属性
    },
    // 更多形状对象
]
~~~

### 描述 {#description-8}

在为 `"task"` 形状准备数据集时，您可以向形状的配置对象中添加以下属性：

- `text` -（可选）任务的描述
- `start_date` -（必需）任务的开始日期
- `end_date` -（可选）任务的结束日期
- `duration` -（必需）任务的持续时间
- `parent` -（可选）任务所属父级项目的 id

### 示例 {#example-7}

~~~jsx
const data = [
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    }
];
~~~

## 适用于 "milestone" 形状的特有属性 {#properties-specific-for-milestone-shapes}

### 用法 {#usage-9}

~~~jsx
const data = [
    // 形状对象
    {
        type: "milestone",
        text?: string,
        parent?: string | number | null
        //... 通用属性
    }
    // 更多形状对象
]
~~~

### 描述 {#description-9}

在为 `"milestone"` 形状准备数据集时，您可以向形状的配置对象中添加以下属性：

- `text` -（可选）任务的描述
- `parent` -（可选）任务所属父级项目的 id

### 示例 {#example-8}

~~~jsx
const data = [
     {
        "id": "5.2",
        "text": "Product Launch",
        "type": "milestone",
        "parent": "5",
        "start_date": new Date(2026, 2, 1),
        "duration": 1
    }
];
~~~


**相关文章：**

- [默认形状](shapes/default_shapes.md)
- [自定义形状](shapes/custom_shape.md)
