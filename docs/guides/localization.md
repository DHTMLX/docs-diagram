---
sidebar_label: Localization
title: Localization
description: You can learn about the Localization in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Localization

It is possible to localize the interface of the Diagram editor into a desired language. For this, you need to provide the corresponding locale settings via the **dhx.i18n.setLocale()** method.
The method takes two parameters: the diagram container and an object that contains rules of localization for a particular country.

~~~js
//an example of English locale
const locale = {
	arrange: "Arrange",
    position: "Position",
    size: "Size",
    color: "Color",
    title: "Title",
    text: "Text",
    image: "Image",
    fill: "Fill",
    textProps: "Text style",
    textPosition: "Text position",
    stroke: "Stroke",
    copy: "Duplicate",
    gridStep: "Grid step",

    headerText: "Header text",
    headerFill: "Header fill",
    headerStyle: "Header style",
    headerPosition: "Header position",
    headerEnable: "Header",
    subHeaderRowsEnable: "Subheader rows",
    subHeaderColsEnable: "Subheader cols",

    positionOptions: {
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",
    },
    switchOptions: {
        on: "on",
        off: "off",
    },

    shapeSections: "Shapes",
    groupSections: "Groups",
    swimlaneSections: "Swimlanes",

    imageUpload: "Click to upload",
    emptyState: "Select a shape or a connector",

    menuDeleteRow: "Delete row",
    menuDeleteCol: "Delete column",
    menuMoveColumnRight: "Move column right",
    menuMoveColumnLeft: "Move column left",
    menuMoveRowUp: "Move row up",
    menuMoveRowDown: "Move row down",
    menuAddRowUp: "Add row up",
    menuAddRowDown: "Add row down",
    menuAddColumnRight: "Add column right",
    menuAddColumnLeft: "Add column left",

    menuDelete: "Delete",
    menuAddPartner: "Add partner",
    menuAddAssistant: "Add assistant",
    menuAlignChildrenVertically: "Align children vertically",
    menuAlignChildrenHorizontally: "Align children horizontally",

    alignHorizontalLeft: "Align left",
    alignHorizontalCenter: "Align horizontal centers",
    alignHorizontalRight: "Align right",
    alignHorizontalDistribution: "Distribute horizontal spacing",
    alignVerticalDistribution: "Distribute vertical spacing",
    alignVerticalTop: "Align top",
    alignVerticalMiddle: "Align vertical centers",
    alignVerticalBottom: "Align bottom",

    addShape: "Add shape",
    menu: "Menu",
    remove: "Delete",
    addLeftShape: "Add left shape",
    addRightShape: "Add right shape",

    lineTextAutoPositionEnable: "Enable text auto position",
    lineTextAutoPositionDisable: "Disable text auto position",
    addLineText: "Add text",
    addColumnLast: "Add column",
    addRowLast: "Add row",
    connect: "Connect",
    removePoint: "Delete point",

    toolbar: {
        file: "File",
        importJson: "Import from JSON",
        export: "Export as",
        exportJson: "JSON",
        exportPdf: "PDF",
        exportPng: "PNG",
        edit: "Edit",
        undo: "Undo",
        redo: "Redo",
        duplicate: "Duplicate",
        copy: "Copy",
        paste: "Paste",
        copyStyle: "Copy style",
        pasteStyle: "Paste style",
        selectAll: "Select all",
        selectNone: "Select none",
        view: "View",
        theme: "Theme",
        themeLight: "Light",
        themeDark: "Dark",
        themeLightContrast: "Light contrast",
        themeDarkContrast: "Dark contrast",
        shapebar: "Shape bar",
        editbar: "Edit bar",
        grid: "Grid",
        gridStep: "Grid step",
        magnetic: "Magnetic",
        connectionPoints: "Connection Points",
        resizePoints: "Resize Points",
        itemsDraggable: "Draggable items",
        arrange: "Arrange",
        zoomIn: "Zoom in",
        zoomOut: "Zoom out",
        layout: "Layout",
        layoutMode: "Mode",
        layoutModeDirect: "Direct",
        layoutModeEdges: "Edges",
        layoutOrthogonal: "Orthogonal",
        layoutRadial: "Radial",
        align: "Align",
        alignHorizontalLeft: "Left",
        alignHorizontalCenter: "Horizontal centers",
        alignHorizontalRight: "Right",
        alignVerticalTop: "Top",
        alignVerticalCenter: "Vertical centers",
        alignVerticalBottom: "Bottom",
        distribute: "Distribute",
        distributeVertical: "Vertical",
        distributeHorizontal: "Horizontal",
    },
    hotkey: {
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
        "CMD+Mousewheel": "CMD+Mousewheel",
    },
};

dhx.i18n.setLocale("diagram", locale);
~~~

After that, you need to initialize the editor and check how the labels' names have changed.

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
    // other config options
});
~~~

**Related sample:** [Diagram editor. Default mode. Localization](https://snippet.dhtmlx.com/sivvpbyg)

**Related sample:** [Diagram editor. Org chart mode. Localization](https://snippet.dhtmlx.com/7qt2mfu2)
