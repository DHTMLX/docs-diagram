load
=============


@short:
	loads data from an external file

@params:

- url			string		URL of the external file

@returns:

- loaded	promise		promise of data loading

@example:
diagram.load("../common/data.json");


@template:	api_method
@descr:

The component will make an AJAX call and expect the remote url to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
diagram.load("/some/data").then(function(){
	diagram.select(123)
})
~~~

@relatedapi:
	api/diagram_parse.md
@relatedsample:
	diagram/01_organogram/06_load.html
@related:
guides/loading_data.md