---
sidebar_label: pdf()
title: pdf
description: text
---

# pdf()

@short: exports a diagram to a PDF file

@signature: {`pdf(config: any): void;`}

@params:

`config: object` - optional, an object with export settings (see the list below)

@example:

// default export
diagram.export.pdf();

// export with config settings
diagram.export.pdf({
	url: "https://export.dhtmlx.com/diagram/2.0.0/pdf",
	name:"result.pdf"
});

@relatedsample:
**Related samples**: [Diagram. Export. Export diagram](https://snippet.dhtmlx.com/ybpmz0zk)

@descr:

{{note To avoid problems during export, all images for Diagram shapes must be set either in base64 format or via an absolute URL.}}

### Object properties

You can specify the following settings for export to PDF:

- **url** - (*string*) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/diagram/2.0.0/pdf`;
- **name** - (*string*) the name of the exported file;
- **header** - (*string*) specifies the header that will be added to the resulted PDF file. You can use any HTML here;
- **footer** - (*string*) specifies the footer that will be added to the resulted PDF file. You can use any HTML here;
- **pdf** - (*object*) the options object. It can have the following properties:
	- **scale** - (*number*) the scale of the webpage rendering, 1 by default;
	- **displayHeaderFooter** - (*boolean*) displays header and footer, false by default;
	- **headerTemplate** - (*string*) an HTML template for the print header. It should be valid HTML markup with following classes used to inject printing values into them:
		- **date** - formatted print date;
		- **title** - document title;
		- **url** - document location;
		- **pageNumber** - current page number;
		- **totalPages** - total pages in the document.
	- **footerTemplate** - (*string*) an HTML template for the print footer. Should use the same format as the headerTemplate;
	- **printBackground** - (*boolean*) print background graphics, false by default;
	- **landscape** - (*boolean*) paper orientation, false by default;
	- **pageRanges** - (*string*) paper ranges to print, e.g., '1-5, 8, 11-13'. By default it is set to an empty string, which means print all pages;
	- **format** - (*string*) paper format. If set, takes priority over width or height options. 'Letter' by default;
	- **width** - (*string*) paper width, accepts values labeled with units;
	- **height** - (*string*) paper height, accepts values labeled with units;
	- **margin** - (*object*) paper margins, none by default;
		- **top** (*string*) top margin, accepts values labeled with units;
		- **right** (*string*) right margin, accepts values labeled with units;
		- **bottom** (*string*) bottom margin, accepts values labeled with units;
		- **left** (*string*) left margin, accepts values labeled with units.

#### Related articles

[Exporting Diagram](../../../guides/data_export/)
