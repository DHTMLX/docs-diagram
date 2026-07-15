---
sidebar_label: 현지화
title: 현지화
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 현지화에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 현지화

Diagram 에디터의 인터페이스를 원하는 언어로 현지화할 수 있습니다. 이를 위해서는 `dhx.i18n.setLocale()` 메서드를 통해 해당 로케일 설정을 제공해야 합니다.
이 메서드는 두 개의 매개변수를 받습니다. diagram 컨테이너와 특정 국가의 현지화 규칙을 포함하는 객체입니다.

~~~jsx
// 영어 로케일의 예시
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

그런 다음 에디터를 초기화하고 레이블 이름이 어떻게 변경되었는지 확인하세요.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
    // 기타 구성 옵션
});
~~~

**관련 예제**:

- [Diagram editor. 기본 모드. 현지화](https://snippet.dhtmlx.com/sivvpbyg)
- [Diagram editor. 조직도 모드. 현지화](https://snippet.dhtmlx.com/7qt2mfu2)
