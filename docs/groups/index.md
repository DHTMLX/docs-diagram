---
sidebar_label: Configuring groups
title: Configuring Groups 
description: text
---

# Configuring Groups

## Group overview

A group is a separate kind of the Diagram items. You can draw simple or more complicated schemes by grouping shapes or other groups in different ways. It is possible to create as one-level groups as nested groups, to configure their appearance and behavior. 

{{note Groups are available only in the default mode of Diagram/Diagram Editor (type: "default").}}

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

## Creating groups

To create a group, specify *"$group"* as a value of the **type** attribute inside the group object while preparing a related JSON structure to load into the diagram:

~~~js
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "User Access",
        },
        groupChildren: ["1.1", "1.2"],
    },
    {
        type: "it",
        id: "1.1",
        x: 50,
        y: 75,
        text: "Remote Desktop"
    },
    {
        type: "it",
        id: "1.2",
        x: 200,
        y: 75,
        text: "Login Server"
    },
];

// initializing a diagram
const diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);
~~~

### Properties

See [the full list of configuration properties of a group object](../configuration_properties/) which allow you to configure the positioning and appearance of the group.

```
## Configuring the behavior of group items

{{editor	https://snippet.dhtmlx.com/4gxy38ek	Diagram. Groups and shapes interaction}}

```