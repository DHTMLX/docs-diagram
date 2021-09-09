beforeEditorOpen
=========

@short:
	fires before the inline editor of an item is opened 
    
@params:
- id    	    string|number		the id of the item
- key 		    string				the name of the property to be edited
- subheaderId	string|undefined	optional, the id of the edited subheader of a swimlane

@returns:
- param     boolean     false - to block opening of the inline editor, otherwise true

@example:
diagram.events.on("beforeEditorOpen", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
    return true;
});

// For diagram editor
editor.diagram.events.on("beforeEditorOpen", (id, key, subheaderId) => {
    console.log(id, key, subheaderId);
    return true;
});

@template: api_event
@descr:

**Related samples**:
- [Diagram. Events](https://snippet.dhtmlx.com/7h2hgb3g)
- [Diagram. Org chart events](https://snippet.dhtmlx.com/l38pct7c)

@changelog:
Added in v4.0