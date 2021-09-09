groupHeaderDblClick
===================

@short: fires on double-clicking a header of a group

@params:
- id            string|number   the id of a group
- event         MouseEvent      a native HTML event object
- subHeaderId   string          optional, the id of a subheader of a swimlane


@example:
diagram.events.on("groupHeaderDblClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});
// For diagram editor
editor.diagram.events.on("groupHeaderDblClick", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
});

@template: api_event
@descr:
If a double-click is done over a header of a swimlane, the event will be fired on the subheader of the swimlane.

@relatedapi:
api/diagram_groupclick_event.md
api/diagram_groupdblclick_event.md
api/diagram_groupheaderclick_event.md
api/diagram_groupmousedown_event.md

@changelog:
Added in v4.0
