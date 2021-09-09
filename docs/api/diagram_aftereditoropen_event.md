afterEditorOpen
=========

@short:
	fires after the inline editor of an item is opened 
    
@params:
- id    	    string|number		the id of the item
- key 		    string				the name of the edited property
- subheaderId	string|undefined	optional, the id of the edited subheader of a swimlane

@example:
diagram.events.on("afterEditorOpen", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
});
// For diagram editor
editor.diagram.events.on("afterEditorOpen", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
});

@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/7h2hgb3g	Diagram. Events
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events

@changelog:
Added in v4.0