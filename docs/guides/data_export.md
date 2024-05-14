---
sidebar_label: Exporting Diagram
title: Exporting Diagram
description: You can learn about exporting Diagram in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Exporting Diagram

You can easily export a diagram into the PDF or PNG format via the related [pdf()](../../api/export/pdf_method/)/[png()](../../api/export/png_method/) methods of the Export object:

<iframe src="https://snippet.dhtmlx.com/ybpmz0zk?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

To adjust the export settings, pass an object with configuration options to the necessary method.

Check the list of available settings:

- for the [pdf()](../../api/export/pdf_method/) method
- for the [png()](../../api/export/png_method/) method

## Exporting styles

By default, all css styles included to the Diagram page are sent to the export service when exporting the diagram. As a result, the size of the request increases that can cause the request to fail.

The library allows you:

- to prevent all styles from being sent to the export service via setting
the [](../api/diagram/exportstyles_property.md) configuration property of the Diagram object to *false*:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", { 
    exportStyles: false
});
~~~

- to define a set of styles that you want to be exported via setting absolute paths to the desired styles to the [](../api/diagram/exportstyles_property.md) array:

<iframe src="https://snippet.dhtmlx.com/jm8if6nh?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="350"></iframe>

:::note
**Note**, that you must use only absolute paths not relative ones.
:::
