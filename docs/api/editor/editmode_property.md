---
sidebar_label: editMode
title: editMode
description: text
---

# editMode

@short: switches the editor mode off and shows the preview mode, and vice versa

@signature: {``}

@type: boolean

@example:
const editor = new dhx.DiagramEditor(document.body, {
    editMode: false
});

@descr:
The object can contain a set of *control_name:value* pairs where *value* is *true* (by default) or *false*. Here are the list of available controls:
- **apply** - (*boolean*) enables the **Apply All** button
- **reset** - (*boolean*) enables the **Reset Changes** button
- **export** - (*boolean*) enables the **Export Data** button
- **import** - (*boolean*) enables the **Import Data** button
- **autoLayout** - (*boolean*) enables the **Auto Layout** button (in the default mode of the editor only)
- **historyManager** - (*boolean*) enables the **Undo** and **Redo** buttons
- **editManager** - (*boolean*) enables the **Edit Mode** button
- **scale** - (*boolean*) enables the **Zoom** group of buttons
- **gridStep** - (*boolean*) enables the **Grid Step** sidebar option in the right panel of the editor