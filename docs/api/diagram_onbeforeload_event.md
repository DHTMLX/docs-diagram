beforeLoad
=============

@short: fires on start of data loading
	

@params:

- url		string		the url data is loaded from
- type		string		the type of expected data ("json")

@example:
diagram.events.on("BeforeLoad", function(url, type){
	console.log("Start of loading from " + url);
    return true;
});

@template:	api_event
@descr:

Returning *false* from the event handler will block data loading.


@relatedapi:
	- api/diagram_onafterload_event.md

@relatedsample:
	- diagram/01_organogram/04_events.html