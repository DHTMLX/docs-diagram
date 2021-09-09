Org Chart Stylization
=======================

It is very easy to modify the appearance of the Org Chart. You can apply a new styling to shapes and their content, as well as modify the look of connectors and change the way of connecting shapes by creating nested lists.
The customization possibilities depend on the [shape type](orgchart_guides/orgchart_shapes_types.md#shapestypes). 

Styling "card" and "img-card" shape types
----------------

Check the list below to find the CSS class that should be changed to modify the look of a particular element:

- To style the shape, redefine the **.dhx_item_shape** CSS class.
- To style the shape content redefine the **.shape_content** CSS class.
- To style the title of the shape, redefine the **.dhx_content_title** CSS class.
- To style the text of the shape, redefine the **.dhx_content_text** CSS class. 
- To style the image in the shape, redefine the **.dhx_content_img** CSS class. 
- To style the look of the connectors between cards, you need to define a CSS class with desired attributes and set its name in the configuration object of the connector. 

{{note Please note that a connector represents an SVG line element. Thus, you can only use CSS properties applied to an SVG line element to define the style of a connector line.}}

For example:

<img src="styling_orgchart.png">

When you hover over the styled shape, it will change as follows:

<img src="styling_orgchart2.png">

The code implementing the styling shown above is: 

~~~js
<style>
	.myStyle .dhx_item_shape {
    	rx: 0;
    	ry: 0;
    	stroke: #9575CD;
    	fill: #9575CD;
    }
    
    .myStyle:hover .dhx_item_shape {
    	fill: #00b7ff;
    	stroke: #00b7ff;
    }
    
    .dhx_diagram_item.myStyle:hover .dhx_content_img {
    	border-radius: 0;
    }
    
    .dhx_diagram_item.myStyle .dhx_content_title {
    	fill: #FFF;
    	color: #FFF;
    }
    
    .dhx_diagram_item.myStyle:hover .dhx_content_title{
    	fill: #000;
    	color: #000;
    	font-size: 1.2em;
    }
    
    .dhx_diagram_item.myStyle .dhx_content_text {
    	fill: #FFF;
    	color: #FFF;
    }
    
    .dhx_diagram_item.myStyle:hover .dhx_content_text {
    	fill: #000;
    	color: #000;
    }
    
    .myConnector {
    	stroke: red;
    	stroke-dasharray: 10;
    }
</style>
    
<script>
  var dataset = [
 	// shapes
 	{"id":"1", "text":"Chairman & CEO", "title":"Henry Bennett", "img":"avatar1.png"},
 	{"id":"2", "text":"Manager", "title":"Mildred Kim", "img":"avatar2.png", 
    	"css":"myStyle"},
 	{"id":"3","text":"Technical Director","title":"Jerry Wagner","img":"avatar3.png"},
        
 	// connectors
 	{"id":"1-2", "from":"1", "to":"2", "css":"myConnector", "type":"line"},
 	{"id": "1-3", "from": "1", "to": "3", "type": "line"}
  ]    
	
	var diagram = new dhx.Diagram("diagram_container", { type: "org" });
	diagram.parse(dataset);
</script>
~~~

{{editor	https://snippet.dhtmlx.com/kj1yv94o	Diagram. Styling (custom CSS)}}


