---
sidebar_label: controls
title: controls Property of Editor
description: You can learn about the controls property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# controls

### Description

@short: optional, an object with settings to define which controls should be shown/hidden in the toolbar of the editor

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

### Details

The property allows you to enable/disable the following options:

- `apply` - (optional) enables the Apply All button
- `reset` - (optional) enables the Reset Changes button
- `export` - (optional) enables the Export Data button
- `import` - (optional) enables the Import Data button
- `autoLayout` - (optional) enables the Auto Layout button (in the default mode of the editor only)
- `historyManager` - (optional) enables the Undo and Redo buttons
- `editManager` - (optional) enables the Edit Mode button
- `scale` - (optional) enables the Zoom group of buttons
- `gridStep` - (optional) enables the Grid Step sidebar option in the right panel of the editor

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