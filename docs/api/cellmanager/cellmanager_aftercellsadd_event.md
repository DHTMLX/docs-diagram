afterCellsAdd
=============

@short: fires after new cells are added to a swimlane

@params:
- swimlaneId    string|number	the id of the item

@example:
diagram.events.on("afterCellsAdd", (swimlaneId) => {
    console.log(swimlaneId);
});

@descr:

@relatedapi:
- api/cellmanager/cellmanager_beforecellsadd_event.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_event