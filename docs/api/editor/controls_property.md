---
sidebar_label: controls
title: controls Property of Editor
description: text
---

# controls

@short: an object with settings to define which controls should be shown/hidden in the toolbar of the editor

@signature: {`controls?: IEditorControls;`}

@descr:
The object can contain a set of *control_name:value* pairs where *value* is *true* (by default) or *false*.

@example:
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

@descr:

Here is the list of available controls:

- **apply** - (*boolean*) enables the Apply All button
- **reset** - (*boolean*) enables the Reset Changes button
- **export** - (*boolean*) enables the Export Data button
- **import** - (*boolean*) enables the Import Data button
- **autoLayout** - (*boolean*) enables the Auto Layout button (in the default mode of the editor only)
- **historyManager** - (*boolean*) enables the Undo and Redo buttons
- **editManager** - (*boolean*) enables the Edit Mode button
- **scale** - (*boolean*) enables the Zoom group of buttons
- **gridStep** - (*boolean*) enables the Grid Step sidebar option in the right panel of the editor

#### Related articles

[Toolbar](../../../guides/diagram_editor/toolbar/)