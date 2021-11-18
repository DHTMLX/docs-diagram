---
sidebar_label: autoplacement
title: autoplacement Property of Editor
description: text
---

# autoplacement

@short: an object with configuration settings for auto-placement of shapes

@signature: {`autoplacement?: IAutoPlacement;`}

@descr:
#### Object properties:

- **mode** - (*string*) the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) sets the distance between unconnected diagrams, *"200"* by default

{{note The **autoplacement** property works only in the default mode of the editor (*type:"default"*) and only for shapes.}}

@example:
const editor = new dhx.DiagramEditor("editor_container", {
    autoplacement: {
        graphPadding: 100,
        mode: "edges"
    }
});

@descr:
**Related samples**:
- [Diagram editor. Default mode. Autoplacement direct mode](https://snippet.dhtmlx.com/p1ybrkz2)
- [Diagram editor. Default mode. Autoplacement edges mode](https://snippet.dhtmlx.com/1i65txcw)

### Modes of connecting shapes

| mode: "direct"                                                                  | mode: "edges"                                                                       |
| :------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| Connectors are aligned "from center to center"; they are straight and diagonal. | Connectors are aligned "from side to side"; they are straight and 90-degree curved. |
| ![](../../assets/direct_mode.png)                                               | ![](../../assets/edges_mode.png)                                                    |

@changelog: added in v3.0