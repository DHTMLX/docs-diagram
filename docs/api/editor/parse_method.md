---
sidebar_label: parse()
title: parse Method of Editor
description: text
---

# parse()

@short: loads data into the editor from a local data source

@signature: {`parse(data: IDataItem[]): void;`}

@params:
`data: any` - the data that should be parsed into the editor

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
 
    // connector line
    {
        "id": "ab",
        "from":"a",
        "to":"b",
        "type": "line"
    },
];

const editor = new dhx.DiagramEditor("editor_container"); 
editor.parse(data);

@descr:

**Related samples**:
- [Diagram editor. Default mode. Basic initialization](https://snippet.dhtmlx.com/xshe9ut7)
- [Diagram editor. Org chart mode. Basic initialization](https://snippet.dhtmlx.com/og4qm3ja)
- [Diagram editor. Mindmap mode. Emotions mind map](https://snippet.dhtmlx.com/lo1vm0e8)

You can load data in any supported data format. See the details in the [](api/data_collection/parse_method.md) article.
