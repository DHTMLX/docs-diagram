beforeCellsValidation
=====================
 
@short: fires before cells of the swimlane are validated

@params:
- swimlaneId    string|number	the id of the item
- action        "move"|"remove"|"add"   the type of the action

@returns:
- param     boolean     false - to prevent validation of new cells, otherwise true

@example:
diagram.events.on("beforeCellsValidation", (swimlaneId, action) => {
    console.log(swimlaneId, action);
    return true;
});

@descr:

@relatedapi:
- api/cellmanager/cellmanager_aftercellsvalidation_event.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_event
