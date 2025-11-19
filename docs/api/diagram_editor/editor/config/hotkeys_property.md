---
sidebar_label: hotkeys 
title: hotkeys Property of Editor
description: You can learn about the hotkeys property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# hotkeys

### Description

@short: Optional. Allows managing keyboard shortcuts (hotkeys) for various actions within the editor

You can completely disable all hotkeys, disable specific combinations, or override their behavior with your custom functions.

:::note
Please note that enabling or disabling default hotkeys will also affect their visibility as tooltips or labels in the editor's Toolbar.
:::

### Usage 

~~~jsx
hotkeys?:
    | boolean
    | {
        [key: string]: false | ((event: KeyboardEvent) => void);
      };
~~~

### Parameters

- `hotkeys: boolean` - if set to *false*, all the standard hotkeys will be disabled. If set to *true*, all the standard hotkeys are enabled
- `hotkeys: object` - an object where the keys correspond to the hotkey names (e.g., `"ctrl+c"`, `"delete"`), and the values define their behavior in the following way:
	- `false` - disables the specified hotkey
	- `(event: KeyboardEvent) => void` - defines a custom function that will be executed when this hotkey is pressed. The function receives a `KeyboardEvent` object as an argument

### Example

- disabling all the hotkeys

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: false,
});
~~~

- disabling specific hotkeys (`Ctrl+C` and `Ctrl+V` in the following example)

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: {
        "ctrl+c": false,
        "ctrl+v": false
    },
});
~~~

- overriding the hotkey behavior

~~~jsx
let editor = null;

editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: {
        // Overrides the "delete" key to remove selected elements
        "delete": () => editor.diagram.data.remove(editor.diagram.selection.getIds()),
        // Adds a custom hotkey "Ctrl+F"
        "ctrl+f": () => console.log("custom search"),
    },
});
~~~

### Description

The table below describes the actions performed by standard hotkeys and provides key string parameters for those hotkeys that can be overridden:

#### Hotkeys Table

| Hotkey combination             | Description                                          | Parameter key string    |
|--------------------------------|------------------------------------------------------|-------------------------|
| `Alt+1`                        | Shows/hides Shapebar (default mode only)             | `"alt+1"`               |
| `Alt+2`                        | Shows/hides Editbar                                  | `"alt+2"`               |
| `Alt+3`                        | Shows/hides Grid Area                                | `"alt+3"`               |
| `Ctrl+Z` (Win), `CMD+Z` (macOS)| Reverts the latest action                            | `"ctrl+z"`              |
| `Ctrl+Shift+Z` (Win), `CMD+Shift+Z` (macOS)| Returns to the canceled action           | `"ctrl+shift+z"`        |
| `Ctrl+D` (Win), `CMD+D` (macOS)| Duplicates a selected element (default mode only)    | `"ctrl+d"`              |
| `Ctrl+C` (Win), `CMD+C` (macOS)| Copies a selected element (default mode only)        | `"ctrl+c"`              |
| `Ctrl+V` (Win), `CMD+V` (macOS)| Pastes a selected element (default mode only)        | `"ctrl+v"`              |
| `Ctrl+Alt+C` (Win), `CMD+Alt+C` (macOS)| Copies the style of the selected item (applicable for elements of one essence)| `"alt+ctrl+c"`       |
| `Ctrl+Alt+V` (Win), `CMD+Alt+V` (macOS)| Applies a copied style to the selected item (applicable for elements of one essence)| `"alt+ctrl+v"` |
| `Ctrl+A` (Win), `CMD+A` (macOS)| Selects all items                                    | `"ctrl+a"`              |
| `Ctrl+Shift+A` (Win), `CMD+Shift+A` (macOS)| Unselects all selected items             | `"ctrl+shift+a"`        |
| `Shift+Left Click`             | Adds an item to the list of selected items           | (Not directly a `hotkeys` parameter key) |
| `Alt+Left Click`               | Unselects the selected item                          | (Not directly a `hotkeys` parameter key) |
| `Delete` (`Del`), `Backspace`  | Deletes an item(s)                                   | `"delete"`, `"backspace"` |
| `Arrow-Left`, `Arrow-Right`, `Arrow-Up`, `Arrow-Down`| Moves the selected items       | `"arrowLeft"`, `"arrowRight"`, `"arrowUp"`, `"arrowDown"` |
| `Ctrl+Mousewheel` (Win), `CMD+Mousewheel` (macOS)| Increases/decreases the scale value | (Not directly a `hotkeys` parameter key) |

**Change log**:

- The `hotkeys` property is added in v6.1

**Related samples**:

- [Diagram Editor. Managing hotkeys' adding, modifying and disabling via API](https://snippet.dhtmlx.com/8ads5dq8)