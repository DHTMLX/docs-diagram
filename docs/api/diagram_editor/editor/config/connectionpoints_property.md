---
sidebar_label: connectionPoints!!
title: connectionPoints Property of Editor
description: You can learn about the connectionPoints property of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# connectionPoints

### Description

@short: Optional. Enables/disables an ability to connect shapes using connection controls

:::info
The `connectionPoints` property works only the **default** mode.
:::

### Usage

~~~jsx
connectionPoints?: boolean;
~~~

### Default config

~~~jsx
connectionPoints: true
~~~

### Example

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor", {
    type: "default", // only "default"
    connectionPoints: false, // true by default
    // other configurations
});
~~~

**Related article:** TODO

**Change log**: The property was added in v6.0
