---
sidebar_label: autoplacement
title: autoplacement
description: text
---

# autoplacement

@short: sets configuration for auto-placement of shapes

@signature: {`autoplacement?: IAutoPlacement;`}

@example:
const editor = new dhx.DiagramEditor("editor_container", {
    autoplacement: {
        graphPadding: 100,
        mode: "edges"
    }
});

@descr:
**Related samples**:
- [Diagram. Default mode. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)
- [Diagram editor. Default mode. Autoplacement direct mode](https://snippet.dhtmlx.com/p1ybrkz2)
- [Diagram editor. Default mode. Autoplacement edges mode](https://snippet.dhtmlx.com/1i65txcw)

{{note The **autoplacement** property works only in the default mode of the editor (*type:"default"*) and only for shapes.}}

The `autoplacement` object can contain the following options:

- **mode** - (*string*) the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) sets the distance between unconnected diagrams, *"200"* by default

### Modes of connecting shapes

| mode: "direct"                                                                  | mode: "edges"                                                                       |
| :------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| Connectors are aligned "from center to center"; they are straight and diagonal. | Connectors are aligned "from side to side"; they are straight and 90-degree curved. |
| ![](../../assets/direct_mode.png)                                               | ![](../../assets/edges_mode.png)                                                    |

@changelog: added in v3.0