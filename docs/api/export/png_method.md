---
sidebar_label: png()
title: png Method
description: You can learn about the png method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# png

### Description

@short: Exports a diagram to a PNG file

{{note To avoid problems during export, all images for Diagram shapes must be set either in base64 format or via an absolute URL.}}

### Usage

~~~js
png(config?: object): void;
~~~

### Parameters

- `config` - (optional) an object with export settings. You can specify the following settings for export to PNG:
  - `type: string` - specifies the file type, can be either jpeg or png (default)
  - `quality: number` - the quality of the image, between 0-100. Not applicable to png images
  - `fullPage: boolean` - when true, takes a screenshot of the full scrollable page, **false** by default
  - `clip: object` - an object which specifies the clipping region of the page. Should have the following fields:
	- `x: number` - x-coordinate of the top-left corner of clipping area
	- `y: number` - y-coordinate of the top-left corner of clipping area
	- `width: number` - the width of clipping area
	- `height: number` - the height of clipping area
  - `omitBackground: boolean` - hides the default white background and allows capturing screenshots with transparency 

### Example

~~~js {7,10-13}
const diagram = new dhx.Diagram("diagram_container", {
	// config options
});
diagram.data.parse(data);

// default export
diagram.export.png();

// export with config settings
diagram.export.png({
	type:"jpeg",
	fullPage:true
});
~~~

**Related articles**:  [Exporting Diagram](../../../guides/data_export/)

**Related samples**: [Diagram. Export. Export diagram](https://snippet.dhtmlx.com/ybpmz0zk)