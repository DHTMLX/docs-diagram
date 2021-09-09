afterCellsRemove
================

@short: fires after cells of the swimlane are removed

@params:
- swimlaneId    string|number	the id of the item

@example:
diagram.events.on("afterCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
});

@descr:

@relatedapi:
- api/cellmanager/cellmanager_aftercellsremove_event.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_event
