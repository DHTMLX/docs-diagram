---
sidebar_label: add()
title: add Method of HistoryManager
description: You can learn about the add method of HistoryManager in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# add()

### Description

@short: Adds a new state

:::info
Adding the new state is done automatically. Therefore this method is not recommended for manual usage
:::

### Usage

~~~jsx
add(newState: array): void;
~~~

### Parameters

- `newState` - (required) an array of JSON objects of the current state of the diagram

### Example

~~~jsx {5-9}
const editor = new dhx.DiagramEditor("editor_container", { 
    type: "default"
});
// ...
editor.history.add([
    { "id": "shape_1", "type": "start", "x": 200, y: 0, "text": "Start" },
    { "id": "shape_2", "type": "process", "x": 200, y: 120, "text": "Call the client" },
    { "id": "line_1", "type": "line", "from": "shape_1", "to": "shape_2" }
]);
~~~

**Change log**: Added in v4.1
