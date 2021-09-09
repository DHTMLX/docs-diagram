---
sidebar_label: Overview
title: Overview 
slug: /
description: text
---

```todo
dhtmlxDiagram is a client-side chart component that allows you to display relations between some objects, concepts or living beings in a visual form:
as a scheme, chart, organizational chart, etc. The diagram makes it easier to present tangled and bulky information in a simple and accessible way.

You can choose between several options:

- [create a diagram out of preset shapes and connectors](#diagram);
- [draw schemes and represent processes](#diagram);
- [render a predefined organizational chart](#organizationalchart); 
- [create a neat mind map](#mindmap);
- [create custom shapes for building your own diagram](#customdiagram);
- [create a mixed diagram containing both the diagram and org chart shapes](#mixeddiagram);
- [initialize a Diagram editor](#diagrameditor) and build a custom diagram that will meet your needs;
- [initialize an Org Chart editor](#orgcharteditor) and easily create an org chart with the desired structure and look;
- [initialize a Mind Map editor](#mindmapeditor) and create a beautiful mind map;
- [switch between the diagram (org chart) and the editor views and save changes made in the editor to the diagram](#liveeditor), etc.

Diagram
------------------------

dhtmlxDiagram component provides the possibility to make various diagrams using a predefined set of shapes and connectors, and experiment with their look and feel via the "native" and custom CSS classes.

You can choose shapes of desired types, link them by suitable connectors and build any type of a diagram that will show the sequence of some operations making up a particular process, like this:<br><br>


<div class="components_group">
	<div>
    	<a href="https://snippet.dhtmlx.com/4d4k3o8p">
			<img src="icon_wide_diagram.png">
			<br>Wide Flowchart
        </a>
    </div>
    <div>
    	<a href="https://snippet.dhtmlx.com/t6t8ay80">
			<img src="icon_vert_decision_tree.png">
			<br>Vertical Decision Tree
        </a>
    </div>
    <div>
    	<a href="https://snippet.dhtmlx.com/e6zm6wh1">
			<img src="icon_data_planning_model.png">
			<br>Data Planning Model
        </a>
    </div><br><br>
    <div>
    	<a href="https://snippet.dhtmlx.com/7bn52dl1">
			<img src="icon_decision_tree.png">
			<br>Decision Tree
        </a>
    </div>
    <div>
    	<a href="https://snippet.dhtmlx.com/a9t2z2dt">
			<img src="icon_activity.png">
			<br>Activity Diagram
        </a>
    </div>
</div>

<div style="clear:both;"></div>

<style>
div.components_group div{
    padding-top:25px;
    padding-bottom:25px;
    float:left;
    width:230px;
    text-align:center;
}
</style>


The following list of guides will help you to learn more about dhtmlxDiagram:

- common_guides.md
- diagram_guides.md

You can draw simple or more complicated schemes by grouping shapes in different ways with the help of such an element of Diagram as a group. It is possible to create as one-level groups as nested groups, to configure their appearance and behavior. Check the details in the [Groups configuration](diagram_guides/shapes_arrows_list.md#groupsconfiguration) article.

<a href="https://snippet.dhtmlx.com/0hf8ahrb" target="_blank"><img src="virtual_cloud.png"></a>

{{editor	https://snippet.dhtmlx.com/0hf8ahrb	Diagram. Virtual private cloud architecture}}

Using swimlanes of the DHTMLX Diagram library lets you represent any process (be it a business process, manufacturing or service one, and any other processes) or its separate parts from start to finish.

<a href="https://snippet.dhtmlx.com/z6x5m3gb" target="_blank"><img src="swimlane.png"></a>

{{editor	https://snippet.dhtmlx.com/z6x5m3gb	Diagram. Swimlane template}}

{{editor	https://snippet.dhtmlx.com/1h4j9gb3	Diagram. Game levels and locations}}

{{editor	https://snippet.dhtmlx.com/k5vlvj8i	Diagram. Waterfall diagram template}}

To find out more about the swimlanes, read the [Swimlane configuration](diagram_guides/shapes_arrows_list.md#swimlaneconfiguration) article.

Organizational Chart
-----------------------

There is also a predefined diagram type for rendering an organizational chart - Org Chart. This type of a diagram contains a set of shapes connected by lines in a hierarchical order. 

<a href="https://snippet.dhtmlx.com/5ign6fyy" target="_blank"><img style="display:block; margin-left:auto;margin-right:auto;" src="diagram_basic.png"></a>


Each shape has a text and a colored header line. Shapes located on the same level have headers of identical color. Optionally, you can add an image into a shape.

<a href="https://snippet.dhtmlx.com/qnx3ekin" target="_blank"><img style="display:block; margin-left:auto;margin-right:auto;" src="tutorial_start.png"></a>

The following list of guides will help you to learn more about Org Chart:

- common_guides.md
- org_chart_guides.md

Mind Map
--------------

There is one more kind of a hierarchical diagram - Mind Map. The mind map is used to represent a core topic or idea surrounded by the branches of the subtopics.

<a href="https://snippet.dhtmlx.com/twd25ww1" target="_blank"><img style="display:block; margin-left:auto;margin-right:auto;" src="mindmap_emotions.png"></a>

The shapes are connected by curved lines and arranged around a central shape of the diagram. Each shape has a text and a colored border. The color of the outline depends on the level the shape belongs to. But you can change the look and feel of the shapes depending on your needs.

The following list of guides will help you to learn more about Mind Map:

- common_guides.md
- mindmap_guides.md

Custom Diagram
--------------

You can build your own diagram or organizational chart by creating custom shapes of the desired appearance and linking them by suitable connectors, as in:

<div class="components_group">
<div>
    	<a href="https://snippet.dhtmlx.com/y4k51owl">
			<img src="sticky.png">
			<br>Life Cycle Diagram
        </a>
    </div>
    <div>
    	<a href="https://snippet.dhtmlx.com/2tzyfois">
			<img src="venn.png">
			<br>Venn Diagram
        </a>
    </div>
    <div>
    	<a href="https://snippet.dhtmlx.com/madymxt5">
			<img src="html.png">
			<br>UML Class Diagram
        </a>
    </div>
    <div>
    	<a href="https://snippet.dhtmlx.com/u1xqyo9w">
			<img src="network.png">
			<br>Network Diagram
        </a>
    </div>
    <div>
    	<a href="https://snippet.dhtmlx.com/8fubjmlz">
			<img src="medical_hierarchy.png">
			<br>Medical Hierarchy
        </a>
    </div>
    
</div>

<div style="clear:both;"></div>

For more details about creating a custom shape, see the common_guides/configuration.md#creatingcustomshapes article.

Mixed Diagram
---------------

In addition to creating standard Diagram, Org Chart, or Mind Map, dhtmlxDiagram provides a great opportunity to combine their shapes into a single diagram. The image below demonstrates the result of adding shapes of Org Chart into Diagram:

<a href="https://snippet.dhtmlx.com/15acqc24" target="_blank"><img style="display:block; margin-left:auto;margin-right:auto;" src="mixed.png"></a>

For more information about building a mixed diagram, see the following articles:

- diagram_guides/shapes_arrows_list.md#creatingmixeddiagram
- orgchart_guides/orgchart_shapes_types.md#creatingmixedorgchart
- mindmap_guides/mindmap_shapes_connectors.md#mixedshapes

Diagram Editor
--------------

dhtmlxDiagram goes with an [editor that lets you build your own diagram](diagram_guides/editor_mode.md): you need just to choose desired shapes and set connectors between them. Besides you can:

- set precise positioning for shapes;
- define their width and height;
- specify the angle of rotation for a shape, if necessary;
- define the content and look of a shape: set a suitable shape color, define outline settings, insert a text inside and adjust its look and feel;
- modify the appearance of connectors.
    
<a href="https://snippet.dhtmlx.com/4d4k3o8p" target="_blank"><img src="diagram_editor_new2.png"></a>

There is a great possibility to set the size of the left panel, create sections for dividing shapes into groups and structuring them in the left panel. Besides, you can configure the right panel for editing a custom shape.

<a href="https://snippet.dhtmlx.com/u1xqyo9w" target="_blank"><img style="margin: 20px auto 20px auto;display: block;" src="right_panel.png"></a>


You can read more information about diagram_guides/editor_mode.md.

Org Chart Editor
--------------------

The Org Chart Editor is a part of the dhtmlxDiagram library that allows building an org chart quickly: you need to select a shape and add a new child for it. Also you can:

- set precise positioning for shapes;
- define their width and height;
- edit the content of a shape;
- set a suitable color of a shape header.

<a href="https://snippet.dhtmlx.com/vghuunmd" target="_blank"><img src="orgcard_editor.png"></a>

You can read more information about orgchart_guides/editor_mode.md.

Mind Map Editor
-------------------

The Mind Map Editor is a part of the dhtmlxDiagram library that makes building and editing a mind map quick and easy. The way of adding a new shape into the mind map is pretty simple: you need to select a shape and add a new child for it. Aside from that, you can:

- set the left-top position of a shape;
- define the size of a shape;
- define the look of a shape: set a suitable shape color, define outline settings, insert a text inside and adjust its look and feel;

<a href="https://snippet.dhtmlx.com/lo1vm0e8" target="_blank"><img src="mindmap_editor1.png"></a>

You can read more information about mindmap_guides/editor_mode.md.

Live Editor
-------------

You can easily make changes to the diagram (or organizational chart) via switching between the diagram and the editor views. All changes made in the editor can be saved to the diagram.

<a href="https://snippet.dhtmlx.com/xdvi4fek" target="_blank"><img style="display:block; margin-left:auto;margin-right:auto;" src="live_diagram.png"></a>

For more information about Live Editor, see the related samples:

- {{editor	https://snippet.dhtmlx.com/xdvi4fek	Diagram. Diagram Editor. Live diagram edit}}
- {{editor	https://snippet.dhtmlx.com/bng7ego7	Diagram. Org Chart Editor. Live org chart edit}}

Shape Search
---------------

dhtmlxDiagram provides you with a set of API that you can apply in order to make working with a Diagram more convenient.
For example, you can implement a feature of searching a shape on request that helps you to simplify work with large diagrams. 

<a href="https://snippet.dhtmlx.com/d7kvzq4r" target="_blank"><img style="display:block; margin-left:auto;margin-right:auto;" src="search_shape.png"></a>

{{editor	https://snippet.dhtmlx.com/d7kvzq4r	Diagram. Shape search}}

Diagram Scale
----------------

You can apply the zoom template to your diagram to be able to change its appearance via zooming the diagram in or out. Besides, you can make it possible to user to get the detailed information on the selected shape.

<a href="https://snippet.dhtmlx.com/09o8t3o2" target="_blank"><img style="display:block; margin-left:auto;margin-right:auto;" src="zoom.png"></a>

{{editor	https://snippet.dhtmlx.com/09o8t3o2	Diagram. Zoom template}}

What's Next
--------------

You can also skip the basics and head for detailed guides and instructions:

- api/refs/diagram.md
- common_guides.md
- diagram_guides.md
- org_chart_guides.md
- mindmap_guides.md

```todo