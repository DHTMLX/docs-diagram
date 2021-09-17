---
sidebar_label: parse()
title: parse
description: text
---

# parse()

@short: loads data into the editor from a local data source

@params:
- data      any     the data that should be parsed into the editor

@example:
const data = [
    // shapes
    {
        "id": "a",
        "x": 50,
        "y": 53,
        "type": "triangle",
        "text": "Shape 1",
        "height": 50,
        "width": 50
    },
    {
        "id": "b",
        "x": 367,
        "y": 158,
        "type": "rectangle",
        "text": "Shape 2"
    },
 
    // connector
    {
        "id": "ab",
        "from":"a",
        "to":"b",
        "type": "line"
    },
]
 
const editor = new dhx.FreeEditor("editor_container"); 
editor.parse(data);

@descr:


@relatedsample:
https://snippet.dhtmlx.com/xshe9ut7	Diagram. Diagram Editor. Basic editor
https://snippet.dhtmlx.com/og4qm3ja Diagram. Org Chart Editor. Basic editor


You can load data in any supported data format. See the details in the [parse](api/data/methods/parse.md) article.