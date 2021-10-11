---
sidebar_label: Exporting Diagram
title: Exporting Diagram
description: text
---

# Exporting Diagram

You can easily export a diagram into the PDF or PNG format. Check the related sections for details.

Exporting Diagram to PDF
----------------------

You can export a diagram to a PDF file via the related [](../api/export/pdf_method.md) method of the Export object:

~~~js
// default export
diagram.export.pdf();
~~~

{{editor	https://snippet.dhtmlx.com/ybpmz0zk	Diagram. Export diagram}}

It is possible to adjust the export settings by passing a configuration object with necessary options.

~~~js
// export with config settings
diagram.export.pdf({
    url: "https://myexportservice.com/",
    name:"result.pdf"
});
~~~

You can specify the following settings for export to PDF:

- **url** - (*string*) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service;
- **name** - (*string*) the name of the exported file;
- **header** - (*string*) specifies the header that will be added to the resulted PDF file. You can use any HTML here;
- **footer** - (*string*) specifies the footer that will be added to the resulted PDF file. You can use any HTML here;
- **pdf** - (*object*) the options object. It can have the following properties:
	- **_scale_** - (*number*) the scale of the webpage rendering, 1 by default;
	- **_displayHeaderFooter_** - (*boolean*) displays header and footer, false by default;
	- **_headerTemplate_** - (*string*) an HTML template for the print header. It should be valid HTML markup with following classes used to inject printing values into them:
		- *date* - formatted print date;
		- *title* - document title;
		- *url* - document location;
		- *pageNumber* - current page number;
		- *totalPages* - total pages in the document.
	- **_footerTemplate_** - (*string*) an HTML template for the print footer. Should use the same format as the headerTemplate;
	- **_printBackground_** - (*boolean*) print background graphics, false by default;
	- **_landscape_** - (*boolean*) paper orientation, false by default;
	- **_pageRanges_** - (*string*) paper ranges to print, e.g., '1-5, 8, 11-13'. By default it is set to an empty string, which means print all pages;
	- **_format_** - (*string*) paper format. If set, takes priority over width or height options. 'Letter' by default;
	- **_width_** - (*string*) paper width, accepts values labeled with units;
	- **_height_** - (*string*) paper height, accepts values labeled with units;
	- **_margin_** - (*object*) paper margins, none by default:
		- *top* - (*string*) top margin, accepts values labeled with units;
		- *right* - (*string*) right margin, accepts values labeled with units;
		- *bottom* - (*string*) bottom margin, accepts values labeled with units;
		- *left* - (*string*) left margin, accepts values labeled with units.
        
{{note To avoid problems during export, all images for Diagram shapes must be set either in base64 format or via an absolute URL.}}

Exporting Diagram to PNG
------------------------

The DHTMLX Diagram component allows you to export a ready diagram to the PNG format. For this you need to use the [](../api/export/png_method.md) method as follows:

~~~js
// default export
diagram.export.png();
~~~

{{editor	https://snippet.dhtmlx.com/ybpmz0zk	Diagram. Export diagram}}

You can also define necessary export settings and pass them as an object to the [](../api/export/png_method.md) method:

~~~js
// export with config settings
diagram.export.png({
    type:"jpeg",
    fullPage:true
});
~~~

The list of available settings is given below:

- **type** - (*string*) specifies the file type, can be either jpeg or png (default);
- **quality** - (*number*) the quality of the image, between 0-100. Not applicable to png images;
- **fullPage** - (*boolean*) when true, takes a screenshot of the full scrollable page, false by default;
- **clip** - (*object*) an object which specifies the clipping region of the page. Should have the following fields:
	- **_x_** - (*number*) x-coordinate of the top-left corner of clipping area;
	- **_y_** - (*number*) y-coordinate of the top-left corner of clipping area;
	- **_width_** - (*number*) the width of clipping area;
	- **_height_** - (*number*) the height of clipping area.
- **omitBackground** -  (*boolean*) hides the default white background and allows capturing screenshots with transparency.

{{note To avoid problems during export, all images for Diagram shapes must be set either in base64 format or via an absolute URL.}}

Exporting styles
-----------------

By default, all css styles included to the Diagram page are sent to the export service when exporting the diagram. As a result, the size of the request increases that can cause the request to fail.

To avoid this problem, you can reduce the size of the exported data. For example, setting the [](../api/diagram/exportstyles_property.md) configuration property of the Diagram object to *false* will prevent all styles from being sent to the export service:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
  	exportStyles: false
});
~~~

The alternative way is to define a set of styles that you want to be exported. For that, you need to set string values with the absolute paths to the desired styles to the **exportStyles** array:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
  	exportStyles:[
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});
~~~

{{editor	https://snippet.dhtmlx.com/jm8if6nh	Diagram. Export styles}}

**Note**, that you must use only absolute paths not relative ones.