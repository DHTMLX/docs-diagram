---
sidebar_label: exportStyles
title: exportStyles
description: text
---

# exportStyles

@short:
	defines the styles that will be sent to the export service when exporting the diagram
   

@default:true
@type: boolean, array
@example:
var diagram = new dhx.Diagram("diagram_container", { 
  	exportStyles:[
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});



@template:	api_config
@descr:

By default, all css styles included to the page are sent to the export service when exporting a dhtmlxDiagram. As a result, the size of the request increases that can cause the request to fail.

To avoid this problem, you can reduce the size of the exported data. For example, setting the **exportStyles** property to *false* will prevent all styles from being sent to the export service:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
  	exportStyles: false
});
~~~

Or you can define a set of styles you want to be exported. For that, you need to set string values with the absolute paths to the desired styles to the **exportStyles** array:

~~~js
var diagram = new dhx.Diagram("diagram_container", { 
  	exportStyles:[
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});
~~~

**Note**, that you must use only absolute paths not relative ones.


@related: common_guides/data_export.md
 
**Related sample**:
- [Diagram. Export styles](https://snippet.dhtmlx.com/jm8if6nh)

@changelog: added in v3.1

