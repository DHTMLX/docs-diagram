---
sidebar_label: autoPlace()
title: autoPlace
description: text
---

# autoPlace()

@short: automatically arranges connected diagram shapes in the hierarchical structure

@signature: {`autoPlace(config?: IAutoPlacement): void;`}

@params:
`config: object` - optional, an object with configuration settings of the autoplacement. If not specified, the default settings will be applied.

@example:
var diagram = new dhx.Diagram("diagram");
diagram.data.parse(data);

diagram.autoPlace({
	mode: "edges"
});

@relatedsample:
**Related sample**: [Diagram. Autoplacement](https://snippet.dhtmlx.com/f3uekgjw)

@descr:

{{note The **autoPlace** method works for [Diagram](diagram_guides.md) not [Org Chart](org_chart_guides.md). The **autoPlace** method does not work if you use groups or swimlanes.}}

The method can take a config object as a parameter. The object contains two optional properties:

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

**Related articles**

common_guides/manipulating_shapes.md#arrangingshapesautomatically
 
@changelog:
added in v3.0