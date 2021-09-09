Diagram Stylization
=====================

You can easily modify the appearance of a diagram shape or its content and change the look of connectors both via related CSS classes and by using 
[various attributes inside the shape object](diagram_guides/shapes_arrows_list.md#shapeattrs).

Styling shapes via CSS
------------------

- To change the style of the shape container, redefine the **.dhx_diagram_flow_item** CSS class. To modify the color of the text in a shape, use the **text** element selector in addition (see example below).
- To change the style of the shape, redefine the **.dhx_diagram_flow_shape** CSS class.
- To change the style of the connector container, redefine the **.dhx_diagram_connector** CSS class.
- To change the style of the connector arrow, redefine the **.dhx_diagram_arrow** CSS class.
- To change the style of the connector line, redefine the **.dhx_diagram_line** CSS class.
- To modify the look of the connectors between shapes, you need to define a CSS class with desired attributes and set its name in the configuration object of the connector. 

{{note Please note that a shape represents an SVG element. Thus, you can only use CSS properties applied to an SVG element to define the style of a connector line.}}

For example, you can stylize a diagram as shown in the image below:

<img src="styling_diagram.png">

by redefining the corresponding CSS classes of the diagram elements:

~~~js
<style>
	/*the text color*/
	.dhx_free_diagram .dhx_diagram_flow_item text{
		fill:#FFF;
	}

	/*the colors of a shape and its outline*/
	.dhx_free_diagram .dhx_diagram_flow_shape{
		fill:#478D99;
		stroke:none;
	}

	/*the color of the "decision" shape type*/
	.decision .dhx_diagram_flow_shape{
		fill:#F7D768;
	}

	/*the color of the "start" shape type*/
	.start .dhx_diagram_flow_shape{
		fill:#FE9998;
	}

	/*the color of the connector outline*/
	.dhx_free_diagram .dhx_diagram_line{
		stroke: #7D8495;
	}

	/*the colors of the arrow and its outline*/
	.dhx_free_diagram .dhx_diagram_arrow{
		stroke:#7D8495;
		fill:#7D8495;
	}
</style>

<script>
 var dataset = [
    { "id":"start", "x": 200, "y": 0, "type": "start", "text": "Start", "css":"start"},
	{ "id":"1", "x": 200, "y": 120, "text": "Call Client and \n set-up Appointment", 
    	"type": "process" },
	{ "id":"2", "x": 200, "y": 240, "text": "", "type": "decision", css: "decision" },
	{ "id":"3", "x": 20, "y": 360, "text": "Prepare \n a Conference Room", 
    	"type": "process" },
	{ "id":"4", "x": 380, "y": 360, "text": "Prepare a Laptop", "type": "process" },
	{ "id":"5", "x": 200, "y": 480, "text": "Meet with \n the Client", 
    	"type": "process" },
        
    // connectors
    { "id":"7", "from":"1", "to":"2", "type":"line", "forwardArrow":"filled" },
	{ "id":"8", "from":"2", "to":"3", "type":"line", "forwardArrow":"filled", 
    	"toSide":"top" },
	{ "id":"9", "from":"2", "to":"4", "type":"line", "forwardArrow":"filled", 
    	"toSide":"top" },
	{ "id":"10", "from":"3", "to":"5", "type":"line", "forwardArrow":"filled" },
	{ "id":"11", "from":"4", "to":"5", "type":"line", "forwardArrow":"filled" },
	{ "id":"12", "from":"5", "to":"6", "type":"line", "forwardArrow":"filled" }
 ]
    
 var diagram = new dhx.Diagram("diagram_container");
 diagram.data.parse(dataset);
</script>
~~~

{{editor	https://snippet.dhtmlx.com/a9t2z2dt	Diagram. Activity diagram}}

Styling shapes and connectors via object properties
-------------------------

A shape and connector objects provide a wide range of properties that you can use to modify the look and feel of shapes and connectors right in the diagram configuration.
[See the full list of shape object properties](diagram_guides/shapes_arrows_list.md#shapeattrs) and [connector object properties](diagram_guides/shapes_arrows_list.md#connectorattrs). 

There is an example of a diagram stylized via the configuration properties of shapes and connectors objects:

<img src="styling_via_config.png">

And the related code is given below:

~~~js
var dataset = [
  // shapes
  { "id":"start", "x":200, "y":0, "type":"start", "text":"Start", "stroke":"#f7a90e", 
  		"strokeWidth":2, "fill":"#FFD700", "fontColor":"#4c4c4c", "fontSize":16,},
  { "id":1, "x":200, "y":120, "text":"Call Client and \n set-up Appointment", 
  		"type": "process", "fill":"#9462C4", "fontColor":"#f9fcff"},
  { "id":2, "x":200, "y":240, "text":"", "type":"decision", "stroke":"#3a6645", 
  		"fill":"#9cd6aa", "strokeDash":"10", "fontColor":"#f9fcff"},
  { "id":3, "x":20, "y":360, "text":"Prepare \n a Conference Room", "type":"process", 
  		"fill":"#9462C4", "fontStyle":"italic", "fontColor":"#f9fcff" },
  { "id":4, "x":380, "y":360, "text":"Prepare a Laptop", "type":"process", 
  		"fill":"#9462C4", "fontStyle":"italic", "fontColor":"#f9fcff" },
  { "id":5, "x":200, "y":480, "text":"Meet with \n the Client", "type":"process", 
  		"fill":"#9462C4", "fontColor":"#f9fcff" },
    
  // connectors
  { "id":"8", "from": "start", "to": 1, "type": "line", "forwardArrow":"filled", 
  		"stroke":"#8493a3" },
  { "id":"9", "from":1, "to":2, "type": "line", "forwardArrow":"filled", 
  		"stroke":"#8493a3" },
  { "id":"10", "from":2, "to":3, "type":"line", "forwardArrow":"filled", 
  		"toSide":"top", "cornersRadius":10, "stroke":"#8493a3" },
  { "id":"11", "from":2, "to":4, "type":"line", "forwardArrow":"filled", 
  		"toSide":"top", "cornersRadius":10, "stroke":"#8493a3" },
  { "id":"12", "from":3, "to":5, "type":"line", "forwardArrow":"filled", 
  		"cornersRadius":10, "stroke":"#8493a3" },
  { "id":"13", "from":4, "to":5, "type":"line", "forwardArrow":"filled", 
  		"cornersRadius":10, "stroke":"#8493a3" },
  { "id":"14", "from":5, "to":6, "type":"line", "forwardArrow":"filled" },
]
~~~