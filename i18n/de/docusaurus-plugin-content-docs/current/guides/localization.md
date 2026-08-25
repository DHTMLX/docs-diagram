---
sidebar_label: Lokalisierung
title: Lokalisierung
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die Lokalisierung. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Lokalisierung {#localization}

Sie können die Oberfläche des Diagram Editors in jede beliebige Sprache lokalisieren. Dazu müssen Sie die entsprechenden Spracheinstellungen über die Methode `dhx.i18n.setLocale()` bereitstellen.
Die Methode nimmt zwei Parameter entgegen: den Diagram-Container und ein Objekt, das die Lokalisierungsregeln für ein bestimmtes Land enthält.

~~~jsx
// Beispiel für eine englische Locale
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

Initialisieren Sie anschließend den Editor und überprüfen Sie, wie sich die Bezeichnungen der Labels geändert haben.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
    // weitere Konfigurationsoptionen
});
~~~

**Verwandte Beispiele**:

- [Diagram Editor. Standardmodus. Lokalisierung](https://snippet.dhtmlx.com/sivvpbyg)
- [Diagram Editor. Organigramm-Modus. Lokalisierung](https://snippet.dhtmlx.com/7qt2mfu2)
