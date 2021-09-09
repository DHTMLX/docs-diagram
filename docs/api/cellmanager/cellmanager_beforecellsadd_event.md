beforeCellsAdd
==============

@short: fires before new cells are added to a swimlane

@params:
- swimlaneId    string|number	the id of the item

@returns:
- param     boolean     false - to prevent adding of new cells, otherwise true

@example:
diagram.events.on("beforeCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});

@descr:

@relatedapi:
- api/cellmanager/cellmanager_aftercellsadd_event.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_event
