---
sidebar_label: 本地化
title: 本地化
description: 您可以在 DHTMLX JavaScript Diagram 库的文档中了解本地化相关内容。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Diagram 的免费 30 天评估版本。
---

# 本地化

您可以将 Diagram 编辑器的界面本地化为任意语言。为此，您需要通过 `dhx.i18n.setLocale()` 方法提供相应的区域设置。
该方法接受两个参数：图表容器，以及一个包含特定国家/地区本地化规则的对象。

~~~jsx
// 英语区域设置示例
const en = {
    addColumnLast: "Add column",
    addLeftShape: "Add left shape",
    addLineTitle: "Add title",
    addRightShape: "Add right shape",
    addRowLast: "Add row",
    addShape: "Add shape",
    alignHorizontalCenter: "Align horizontal center",
    alignHorizontalDistribution: "Distribute horizontal spacing",
    alignHorizontalLeft: "Align left",
    alignHorizontalRight: "Align right",
    alignVerticalBottom: "Align bottom",
    alignVerticalDistribution: "Distribute vertical spacing",
    alignVerticalMiddle: "Align vertical center",
    alignVerticalTop: "Align top",
    connect: "Connect",
    copy: "Duplicate",
    lineTitleAutoPositionDisable: "Disable title auto position",
    lineTitleAutoPositionEnable: "Enable title auto position",
    menu: "Menu",
    menuAddAssistant: "Add assistant",
    menuAddColumnLeft: "Add column left",
    menuAddColumnRight: "Add column right",
    menuAddPartner: "Add partner",
    menuAddRowDown: "Add row down",
    menuAddRowUp: "Add row up",
    menuAlignChildrenHorizontally: "Align children horizontally",
    menuAlignChildrenVertically: "Align children vertically",
    menuDelete: "Delete",
    menuDeleteCol: "Delete column",
    menuDeleteRow: "Delete row",
    menuMoveColumnLeft: "Move column left",
    menuMoveColumnRight: "Move column right",
    menuMoveRowDown: "Move row down",
    menuMoveRowUp: "Move row up",
    remove: "Delete",
    removePoint: "Delete point",
    text: "Text",
    shapebar: {
        shapeSections: "Shapes",
        groupSections: "Groups",
        swimlaneSections: "Swimlanes",
        group: "Group",
        swimlaneCols: "Swimlane cols",
        swimlaneRows: "Swimlane rows",
        swimlaneMix: "Swimlane mix",
        untitled: "Untitled",
    },
    editbar: {
        arrange: "Arrange",
        border: "Border",
        fill: "Fill",
        gridStep: "Grid step",
        header: "Header",
        headerColor: "Header color",
        headerPosition: "Position",
        image: "Image",
        lineShape: "Line shape",
        lineStyle: "Line style",
        pointerView: "Pointer view",
        positionOffset: "Position offset",
        size: "Size",
        subheaderCols: "Subheader for columns",
        subheaderRows: "Subheader for rows",
        text: "Text",
        textAlignment: "Text alignment",
        textStyle: "Text style",
        title: "Title"
    },
    toolbar: {
        align: "Align",
        alignHorizontalCenter: "Horizontal center",
        alignHorizontalLeft: "Left",
        alignHorizontalRight: "Right",
        alignVerticalBottom: "Bottom",
        alignVerticalCenter: "Vertical center",
        alignVerticalTop: "Top",
        arrange: "Arrange",
        connectionPoints: "Connection points",
        copy: "Copy",
        copyStyle: "Copy style",
        distribute: "Distribute",
        distributeHorizontal: "Horizontal",
        distributeVertical: "Vertical",
        duplicate: "Duplicate",
        edit: "Edit",
        editbar: "Edit bar",
        export: "Export as",
        exportJson: "JSON",
        exportPdf: "PDF",
        exportPng: "PNG",
        file: "File",
        grid: "Grid",
        gridStep: "Grid step",
        importJson: "Import from JSON",
        itemsDraggable: "Draggable items",
        layout: "Auto layout",
        layoutMode: "Placement mode",
        layoutModeDirect: "Direct",
        layoutModeEdges: "Edges",
        layoutOrthogonal: "Orthogonal",
        layoutRadial: "Radial",
        magnetic: "Magnetic",
        paste: "Paste",
        pasteStyle: "Paste style",
        redo: "Redo",
        resizePoints: "Resize points",
        selectAll: "Select all",
        selectNone: "Select none",
        shapebar: "Shape bar",
        theme: "Theme",
        themeDark: "Dark",
        themeDarkContrast: "Dark contrast",
        themeLight: "Light",
        themeLightContrast: "Light contrast",
        undo: "Undo",
        view: "View",
        zoomIn: "Zoom in",
        zoomOut: "Zoom out"
    },
    hotkey: {
        "Alt+1": "Alt+1",
        "Alt+2": "Alt+2",
        "Alt+3": "Alt+3",

        "Ctrl+Z": "Ctrl+Z",
        "Ctrl+Shift+Z": "Ctrl+Shift+Z",
        "Ctrl+D": "Ctrl+D",
        "Ctrl+C": "Ctrl+C",
        "Ctrl+V": "Ctrl+V",
        "Ctrl+Alt+C": "Ctrl+Alt+C",
        "Ctrl+Alt+V": "Ctrl+Alt+V",
        "Ctrl+A": "Ctrl+A",
        "Ctrl+Shift+A": "Ctrl+Shift+A",
        "Ctrl+Mousewheel": "Ctrl+Mousewheel",

        "CMD+Z": "CMD+Z",
        "CMD+Shift+Z": "CMD+Shift+Z",
        "CMD+D": "CMD+D",
        "CMD+C": "CMD+C",
        "CMD+V": "CMD+V",
        "CMD+Alt+C": "CMD+Alt+C",
        "CMD+Alt+V": "CMD+Alt+V",
        "CMD+A": "CMD+A",
        "CMD+Shift+A": "CMD+Shift+A",
        "CMD+Mousewheel": "CMD+Mousewheel"
    }
};

dhx.i18n.setLocale("diagram", locale);
~~~

之后，您需要初始化编辑器，并检查标签名称的变化情况。

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
    // 其他配置选项
});
~~~

**相关示例**：

- [Diagram editor. 默认模式. 本地化](https://snippet.dhtmlx.com/sivvpbyg)
- [Diagram editor. 组织结构图模式. 本地化](https://snippet.dhtmlx.com/7qt2mfu2)
