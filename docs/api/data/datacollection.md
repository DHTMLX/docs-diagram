DataCollection
=======

<div class='h2' id="methods">Methods</div>

{{api
	- api/data/methods/add.md - adds a new shape/connector line to the diagram
    - api/data/methods/copy.md - creates a copy of a shape at the defined position
	- api/data/methods/eachchild.md - iterates through the children of the specified item
	- api/data/methods/eachparent.md - iterates through all parents of the specified item
	- api/data/methods/exists.md - checks whether the specified item exists in the diagram
	- api/data/methods/filter.md - filters the items in the diagram by the specified key
	- api/data/methods/find.md - finds the item that corresponds to the specified parameters
	- api/data/methods/findall.md - finds all the items that correspond to the specified parameters
	- api/data/methods/getid.md - returns the id of the item by its index
	- api/data/methods/getindex.md - returns the index of the item by its id
	- api/data/methods/getitem.md - returns the object of an item by its id
    - api/data/methods/getnearid.md - returns the id of an item which is nearest to the specified one
	- api/data/methods/getroot.md - returns the id of the root item by the id of its child
	- api/data/methods/getroots.md - returns an array with ids of all root items of the diagram
	- api/data/methods/load.md - loads data from an external file
	- api/data/methods/map.md - iterates through all items of the diagram
    - api/data/methods/move.md - moves an item to the defined position
	- api/data/methods/parse.md - loads data from a local data source
	- api/data/methods/remove.md - deletes the specified item from the diagram
	- api/data/methods/removeall.md - deletes all items from the diagram
	- api/data/methods/serialize.md - serializes the diagram data into an array of JSON objects
	- api/data/methods/update.md - updates properties of the item
}}

<div class='h2' id="events">Events</div>

{{api
	- api/data/events/diagram_onafteradd_event.md - fires after adding a shape
    - api/data/events/diagram_onbeforeadd_event.md - fires before adding a shape
    - api/data/events/diagram_change_event.md - fires on changes in the diagram 
	- api/data/events/diagram_load_event.md - fires on loading data into the diagram  
}}

@index:
- api/data/methods/data_methods.md
- api/data/events/data_events.md