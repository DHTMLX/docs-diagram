---
sidebar_label: exportStyles
title: exportStyles Property
description: You can learn about the exportStyles property in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# exportStyles

:::info
By default, all css styles included to the page are sent to the export service when exporting a DHTMLX Diagram. As a result, the size of the request increases that can cause the request to fail.

To avoid this problem, you can reduce the size of the exported data by applying the **exportStyles** property.
:::

### Description

@short: Optional. Defines the styles that will be sent to the export service when exporting the diagram

### Usage

~~~js
exportStyles?: boolean;
//or
exportStyles?: string[];
~~~

### Default config

~~~js
exportStyles: true
~~~

### Example

Set the **exportStyles** property to *false* to prevent all styles from being sent to the export service:

~~~js
const diagram = new dhx.Diagram("diagram_container", { 
  	exportStyles: false
});
~~~

Or define a set of styles you want to be exported. For that, you need to set string values with the absolute paths to the desired styles to the **exportStyles** array:

~~~js
const diagram = new dhx.Diagram("diagram_container", { 
  	exportStyles:[
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});
~~~

:::tip
You must use only absolute paths not relative ones
:::

**Change log**: Added in v3.1

**Related articles**: [Exporting Diagram](../../../guides/data_export/)

**Related sample**: [Diagram. Export. Export styles](https://snippet.dhtmlx.com/jm8if6nh)
