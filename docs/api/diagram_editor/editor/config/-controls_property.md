---
sidebar_label: controls
title: controls Property of Editor
description: You can learn about the controls property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# controls

### Description

@short: Optional. An object with settings to define which controls should be shown/hidden in the toolbar of the editor

### Usage

~~~js
controls?: {
    apply?: boolean,
    reset?: boolean,
    export?: boolean,
    import?: boolean,
    autoLayout?: boolean,
    historyManager?: boolean,
    editManager?: boolean,
    scale?: boolean,
    gridStep?: boolean
};
~~~

### Parameters

The **controls** object contains the following parameters:

- `apply` - (optional) enables/disables the Apply All button
- `reset` - (optional) enables/disables the Reset Changes button
- `export` - (optional) enables/disables the Export Data button
- `import` - (optional) enables/disables the Import Data button
- `autoLayout` - (optional) enables/disables the Auto Layout button (in the default mode of the editor only)
- `historyManager` - (optional) enables/disables the Undo and Redo buttons
- `editManager` - (optional) enables/disables the Edit Mode button
- `scale` - (optional) enables/disables the Zoom group of buttons
- `gridStep` - (optional) enables/disables the Grid Step sidebar option in the right panel of the editor

### Default config

~~~js
controls: {
    apply: true,
    reset: true,
    export: true,
    import: true,
    autoLayout: true,
    historyManager: true,
    editManager: true,
    scale: true,
    gridStep: true
};
~~~

### Example

~~~js
const editor = new dhx.DiagramEditor("editor_container", {
    controls: { 
        import: true,
        export: true,
        gridStep: false,
        autoLayout: false,
        apply: false,
        reset: false
    }
});
~~~

**Related articles**:  [Toolbar](../../../guides/diagram_editor/toolbar/)