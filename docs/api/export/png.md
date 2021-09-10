---
sidebar_label: png()
title: png
description: text
---

# png

@short:
exports a diagram to a PNG file

@params:

* config			object			optional, an object with export settings (see the list below)

@example:

// default export
diagram.export.png();

// export with config settings
diagram.export.png({
	type:"jpeg",
	fullPage:true
});

@template: api_method
@descr:
{{note To avoid problems during export, all images for Diagram shapes must be set either in base64 format or via an absolute URL.}}

You can specify the following settings for export to PNG:

- **type** - (*string*) specifies the file type, can be either jpeg or png (default);
- **quality** - (*number*) the quality of the image, between 0-100. Not applicable to png images;
- **fullPage** - (*boolean*) when true, takes a screenshot of the full scrollable page, false by default;
- **clip** - (*object*) an object which specifies the clipping region of the page. Should have the following fields:
	- **x** - (*number*) x-coordinate of the top-left corner of clipping area;
	- **y** - (*number*) y-coordinate of the top-left corner of clipping area;
	- **width** - (*number*) the width of clipping area;
	- **height** - (*number*) the height of clipping area.
- **omitBackground** -  (*boolean*) hides the default white background and allows capturing screenshots with transparency. 

@related:
	common_guides/data_export.md

@relatedsample:
https://snippet.dhtmlx.com/ybpmz0zk	Diagram. Export diagram

@relatedapi:
    api/export/pdf.md