Live Editor
=============

In this section you will learn how you can use the [Diagram](diagram_guides/editor_mode.md) or [Organogram Editor](orgchart_guides/editor_mode.md) by the example of a small application. 
The application allows switching between the diagram (org chart in the example below) and the editor views and saving changes made in the editor to the diagram.

{{editor	https://snippet.dhtmlx.com/bng7ego7	Diagram. Org Chart Editor. Live org chart edit}}


##Step 1. Setting containers

First of all, let's create containers for the org chart and the editor:

~~~html
<div id="cont" style="width:800px;height:500px"></div>
<div id="editor_wrapper" style="width:800px;height:500px;">
~~~

##Step 2. Initializing an org chart and an editor

Then initialize the organogram and the editor in the defined containers, and parse data into the organogram:

~~~js
// placing diagram into the "cont" container
var diagram = new dhx.Diagram("cont", { type: "org" });
// placing the editor into the "editor_wrapper" container
var editor = new dhx.DiagramEditor("editor_wrapper", { type: "org" });

diagram.data.parse(data);
~~~

##Step 3. Setting a button to run the editor

After that add a button that will run the editor. This button will be placed next to the organogram container in a common div with the id "diagram_wrapper", so that it could be possible to manage them together:

~~~html
<div id="diagram_wrapper">
	<div id="cont" style="width:800px;height:500px"></div>
    <button class="dhx_btn dhx_btn--active" 
    	style="position:fixed;top:0;left:0;margin:10px;">Edit</button>
</div>
~~~

##Step 4. Defining initial behavior

On initializing the application, only the diagram view with the Edit button will be rendered, like this:

<img src="live_editor1.png">

So it is necessary to hide the container with the editor, as follows:

~~~js
var editorCont = document.querySelector("#editor_wrapper");
editorCont.style.display = "none";
~~~

##Step 5. Defining logic for running editor

The editor will run on click of the **Edit** button. On this step you need to: 

- attach the related handler to the button

~~~html
<div id="diagram_wrapper">
	<div id="cont" style="width:800px;height:500px"></div>
    <button class="dhx_btn dhx_btn--active" 
    		style="position:fixed;top:0;left:0;margin:10px;" 
            id="edit" onclick="runEditor()">Edit</button>
</div>
~~~

- define the **runEditor()** function which will contain the logic for running editor on the button click

On running the editor, the container with the org chart will be hidden and the editor container will appear. The current diagram state should be imported
into the editor as well. Use the **import()** method of the editor for this purpose:

~~~js
function runEditor(){
	diagramCont.style.display = "none";
	editorCont.style.display = "block";
	editor.import(diagram);			
}
~~~

<img src="live_editor2.png">

##Step 6. Defining logic for closing editor

The only thing left is to describe the behavior of the application on saving changes made in the editor. It is obvious that on closing the editor the applied changes must be saved and the organogram view rendered. 

To implement the described logic, use the **AfterApply** event of the editor that fires on clicking the **Apply All** button. In the handler of the event specify the necessary onclick behavior: 

- the editor hides, while the diagram is rendered
- the editor data is serialized and parsed into the diagram

~~~js
function runEditor(){
	diagramCont.style.display = "none";
	editorCont.style.display = "block";
	editor.import(diagram);
	editor.events.on("AfterApply", function(){
		diagramCont.style.display = "block";
		editorCont.style.display = "none";
		diagram.parse(editor.serialize());
	});
}
~~~

The application is ready. You can check out the result in the related sample.

{{editor	https://snippet.dhtmlx.com/bng7ego7	Diagram. Org Chart Editor. Live org chart edit}}

@linkclass:hidden
