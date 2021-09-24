---
sidebar_label: autoplacement
title: autoplacement
description: text
---

# autoplacement

@short: sets configuration for autoplacement

@signature: {``}

@type: object

@example:
const editor = new dhx.DiagramEditor(document.body, {
    autoplacement: {
        graphPadding: 100,
        mode: "edges"
    }
});

@descr:
{{note The property is available only in the default mode of the editor (*type:"default"*). The property does not work if you use groups or swimlanes.}}

The autoplacement object can contain the following options:

- **mode** - (*string*) the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) sets the distance between unconnected diagrams, *"200"* by default

### Modes of connecting shapes

<table cellspacing="0" cellpadding="1" border="0">
	<tbody>
    
	 <tr>
		<td><ul><b>"direct" mode </b></ul><ul>Connectors are aligned "from center to center"; they are straight and diagonal.</ul>
			<img src="direct_mode.png"> 
		
        </td>
		<td><ul><b>"edges" mode</b></ul><ul>Connectors are aligned "from side to side"; they are straight and 90-degree curved. </ul>
    		<img src="edges_mode.png">
		</td>	
	</tr>
   	</tbody>
</table>


@relatedapi: api/diagram_autoplace.md

@related: common_guides/configuration.md#configuringautoplacement

**Related samples**:
- [Diagram. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)
- [Diagram. Diagram Editor. Autoplacement direct mode](https://snippet.dhtmlx.com/p1ybrkz2)
- [Diagram. Diagram Editor. Autoplacement edges mode](https://snippet.dhtmlx.com/1i65txcw)

@changelog: added in v3.0

```todo
проверить пример и описание
```