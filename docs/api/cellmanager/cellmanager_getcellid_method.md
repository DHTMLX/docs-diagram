getCellId
=========

@short: returns the id of the cell of the swimlane by the index

@params:
- cellIndex     number           the start index of a cell in a layout
- type          "row"|"col"      the type of direction to count the index

@returns:
- id    id|undefined    the id of the cell

@example:
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // sets active swimlane

diagram.cellManager.getCellId(0, "row"); // gets the id of the cell

// -> "r01"

@descr:

The count of the index starts from 0.

@relatedapi:
- api/cellmanager/cellmanager_getcellindex_method.md
- api/cellmanager/cellmanager_getsubheadercellid_method.md
- api/cellmanager/cellmanager_getsubheadercellindex_method.md
- api/cellmanager/cellmanager_getsubheadertype_method.md

@related: diagram_guides/shapes_arrows_list.md#swimlaneconfiguration

@changelog:
Added in v4.0

@template: api_method
