autoplacement
=============

@short: sets configuration for autoplacement
	

@type: object


@example:

var diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
		mode: "edges",
		graphPadding: 100
	}
});

diagram.parse(autoData);


@template:	api_config
@descr:
{{note The **autoplacement** property works for [Diagram and Diagram Editor](diagram_guides.md) but does not work for [Organizational Chart and Org Chart Editor](org_chart_guides.md). The **autoplacement** property does not work if you use groups or swimlanes.}}

The autoplacement object can contain the following options:

- **mode** - (*string*) the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) sets the distance between unconnected diagrams, *"200"* by default

### Modes of connecting shapes

<table  style='border-left:none !important;' cellspacing="0" cellpadding="1" border="0">
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

@relatedsample:
https://snippet.dhtmlx.com/f3uekgjw	Diagram. Autoplacement
https://snippet.dhtmlx.com/p1ybrkz2	Diagram. Diagram Editor. Autoplacement direct mode
https://snippet.dhtmlx.com/1i65txcw	Diagram. Diagram Editor. Autoplacement edges mode

@changelog: added in v3.0
