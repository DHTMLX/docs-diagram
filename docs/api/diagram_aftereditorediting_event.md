afterEditorEditing
=========

@short:
	fires after the text value of an item is edited via the inline editor  
    
@params:
- value         string              the new value of the item
- id    	    string|number		the id of the item
- key 		    string				the name of the edited property
- subheaderId	string|undefined	optional, the id of the edited subheader of a swimlane

@example:
diagram.events.on("afterEditorEditing", (value, id, key, subheaderId) => {
    console.log(value, id, key, subheaderId);
});
// For diagram editor
editor.diagram.events.on("afterEditorEditing", (value, id, key, subheaderId) => {
    console.log(value, id, key, subheaderId);
});

@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/7h2hgb3g	Diagram. Events
https://snippet.dhtmlx.com/l38pct7c	Diagram. Org chart events

@changelog:
Added in v4.0