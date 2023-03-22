---
sidebar_label: pdf()
title: pdf Method
description: You can learn about the pdf method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# pdf()

### Description

@short: Exports a diagram to a PDF file

:::note
To avoid problems during export, all images for Diagram shapes must be set either in base64 format or via an absolute URL
:::

### Usage

~~~js
pdf(config?: object): void;
~~~

### Parameters

- `config` - (optional) an object with export settings. You can specify the following settings for export to PDF:
    - `url: string` -  the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/diagram/pdf/5.0.0`
    - `name: string` - the name of the exported file
    - `pdf: object` - the options object. It can have the following properties:
	    - `scale: number` - the scale of the chart rendering (between **0.1** and **2**)
	    - `landscape: boolean` - paper orientation, **false** by default
	    - `format: string` - paper format. If set, takes priority over width or height options. **'Letter'** by default. Read more about formatting [here](https://github.com/puppeteer/puppeteer/blob/v16.0.0/docs/api/puppeteer.paperformat.md)
	    - `width: string | number` - paper width. As a value of the property, you can specify a number or a string with a unit
	    - `height: string | number` - paper height. As a value of the property, you can specify a number or a string with a unit
	    - `margin: object` - paper margins, none by default
		    - `top: string | number` - top margin, accepts values labeled with units
		    - `right: string | number` - right margin, accepts values labeled with units
		    - `bottom: string | number` - bottom margin, accepts values labeled with units
		    - `left: string | number` - left margin, accepts values labeled with units

### Example

~~~js {7,10-13}
const diagram = new dhx.Diagram("diagram_container", {
	// config options
});
diagram.data.parse(data);

// default export
diagram.export.pdf();

// export with config settings
diagram.export.pdf({
	url: "https://export.dhtmlx.com/diagram/pdf/5.0.0",
	name:"result_pdf"
});
~~~

**Related articles**:  [Exporting Diagram](../../../guides/data_export/)

**Related samples**: [Diagram. Export. Export diagram](https://snippet.dhtmlx.com/ybpmz0zk)