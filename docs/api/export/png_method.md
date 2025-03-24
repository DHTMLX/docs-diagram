---
sidebar_label: png()
title: png Method
description: You can learn about the png method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# png

### Description

@short: Exports a diagram to a PNG file

:::note
To avoid problems during export, all images for Diagram shapes must be set either in base64 format or via an absolute URL.
:::

### Usage

~~~jsx
png(config?: object): void;
~~~

### Parameters

- `config` - (optional) an object with export settings. You can specify the following settings for export to PNG:
  - `url?: string` - (optional) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/diagram/png/5.0.0`
  - `name?: string` - (optional) the name of the exported file
  - `header?: string` - (optional) an HTML template for the header in the exported file
  - `footer?: string` - (optional) an HTML template for the footer in the exported file

### Example

~~~jsx {7,10-13}
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// default export
diagram.export.png();

// export with config settings
diagram.export.png({
    name: "result_png"
});
~~~

**Related articles**:  [Exporting Diagram](../../../guides/data_export/)

**Related samples**: [Diagram. Export. Export diagram](https://snippet.dhtmlx.com/ybpmz0zk)
