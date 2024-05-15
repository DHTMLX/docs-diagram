---
sidebar_label: pdf()
title: pdf Method
description: You can learn about the pdf method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# pdf()

### Description

@short: Exports a diagram to a PDF file

:::note
To avoid problems during export, all images for Diagram shapes must be set either in the base64 format or via an absolute URL.
:::

### Usage

~~~jsx
pdf(config?: object): void;
~~~

### Parameters

- `config` - (optional) an object with export settings. You can specify the following settings for export to PDF:
    - `url?: string` - (optional) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/diagram/pdf/5.0.0`
    - `name?: string` - (optional) the name of the exported file
    - `pdf?: object` - (optional) the object of pdf options. Here you can specify the following properties:
        - `scale?: number` - (optional) the scale of the grid rendering (between *0.1* and *2*)
        - `landscape?: boolean` - (optional) defines a landscape orientation, ***false*** by default. It works only if the `format` option is specified
        - `width?: string | number` - (optional) the width of the output page. As a value of the property, you can specify a number or a string with a unit
        - `height?: string | number` - (optional) the height of the output page. As a value of the property, you can specify a number or a string with a unit
        - `margin?: object` - (optional) the object with paper margins, ***none*** by default
            - `left?: string | number` - (optional) defines a left margin, accepts values labeled with units (px,in,cm,mm)
            - `right?: string | number` - (optional) defines a right margin, accepts values labeled with units (px,in,cm,mm)
            - `top?: string | number` - (optional) defines a top margin, accepts values labeled with units (px,in,cm,mm)
            - `bottom?: string | number` - (optional) defines a bottom margin, accepts values labeled with units (px,in,cm,mm)
        - `format?: string` - (optional) defines the paper format. If set, it takes priority over the **width** or **height** options. Not specified by default. Check the list of all available [formats and their sizes](#list-of-formats).
        - `pageRanges?: string` - (optional) paper ranges to print, e.g. 1-5, 8, 11-13. It works only if the `format` option is specified
        - `displayHeaderFooter?: boolean` - (optional) defines whether to display the header and footer, *false* by default
        - `footerTemplate?: string` - (optional) an HTML template for the print footer. It should be a valid HTML markup with the following classes used to inject printing values into them:
            - `date` - (optional) the formatted print date
            - `title` - (optional) the document name
            - `pageNumber` - (optional) the current page number. It is used by default
            - `totalPages` - (optional) the total number of pages in the document. It is used by default
        - `headerTemplate?: string` - (optional) an HTML template for the print header. It should be a valid HTML markup with the following classes used to inject printing values into them:
            - `date` - (optional) the formatted print date
            - `title` - (optional) the document name
            - `pageNumber` - (optional) the current page number
            - `totalPages` - (optional) the total number of pages in the document

### Example

~~~jsx {7,10-13}
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

### Details

:::info
It is necessary to set sufficient margin for correct display of `headerTemplate`/`footerTemplate`.
:::

## List of formats

| Format    | Size               |
| --------- | ------------------ |
| "Letter"  | (8.5in x 11in)     |
| "Legal"   | (8.5in x 14in)     |
| "Tabloid" | (11in x 17in)      |
| "Ledger"  | (17in x 11in)      |
| "A0"      | (33.1in x 46.8in)  |
| "A1"      | (23.4in x 33.1in)  |
| "A2"      | (16.54in x 23.4in) |
| "A3"      | (11.7in x 16.54in) |
| "A4"      | (8.27in x 11.7in)  |
| "A5"      | (5.83in x 8.27in)  |
| "A6"      | (4.13in x 5.83in)  |

**Related articles**:  [Exporting Diagram](../../../guides/data_export/)

**Related samples**: [Diagram. Export. Export diagram](https://snippet.dhtmlx.com/ybpmz0zk)
