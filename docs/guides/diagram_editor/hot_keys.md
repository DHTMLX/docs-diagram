---
sidebar_label: Hotkeys
title: Editor Guides - Hotkey List 
description: You can learn about the Hotkeys of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Hotkey list

In this section you will find a set of standard hotkeys you can use while creating a diagram in the editor, descriptions of the actions performed by these hotkeys and key string parameters for those hotkeys that can be overridden. Apply the [`hotkeys`](/api/diagram_editor/editor/config/hotkeys_property/) property for managing keyboard hotkeys within the editor.

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
