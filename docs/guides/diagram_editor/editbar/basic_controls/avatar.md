---
sidebar_label: Avatar!!
title: Editbar Basic Controls - Avatar 
description: You can explore the Avatar of Editbar in the documentation of the the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Avatar

@short: A control for uploading of an avatar.

## Usage

~~~js
{
    type: "avatar",
    key?: string,
    target?: string,

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default
    readOnly?: boolean, // false by default

    removeIcon?: boolean, // true by default 
    circle?: boolean, // false by default
    icon?: string,
    placeholder?: string,
    preview?: string,
    alt?: string,
    size?: "small" | "medium" | "large" | number, // "medium" by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number,

    // for `wrap:true` check the label properties for the Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // "top" by default

    accept?: string, // "image/*" by default
    fieldName?: string, // "file" by default
    autosend?: boolean, // false by default
    params?: { [key: string]: any },
    headerParams?: { [key: string]: any },
    updateFromResponse?: boolean  // true by default 
}
~~~

## Description

### Basic properties

- `type` - (required) the type of a control, set it to *"avatar"*
- `key` - (optional) the name of the specified/modified property or the path to it in the object of a Diagram item (shape, line, group, swimlane)
- `wrap` - (optional)
- `target` - (optional) sets an URL to the server-side script that will process file upload, the property is required when an image is sent to the server via the control
:::note
While loading an image and sending it to the server via the `target` property, note that the *value* object will be sent to the server. The file itself will be recorded in the dataset in the *base64* format. You can redefine this logic using the [service methods] - **TODO - add link**. 
:::
- `hidden` - (optional) defines whether a control is hidden, *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `readOnly` - (optional) sets the readonly mode for the control, *false* by default
- `removeIcon` - (optional) enables the possibility to clear the control by means of the UI, *true* by default
- `circle` - (optional) sets the mode of displaying the control with rounded corners, *false* by default
- `icon` - (optional) allows setting an icon when there is no image uploaded, doesn't work together with the `preview` property
- `placeholder` - (optional) allows setting a text to be visible when there is no image uploaded, doesn't work together with the `preview` property
- `preview` - (optional) specifies the absolute path to the preview image. The preview image is visible, when the `value` is not defined
- `alt` - (optional) sets the attribute of the &lt;img&gt; tag - an alternative text when there is no image uploaded
- `size` - (optional) allows setting one of the three basic control's sizes, or applying a custom size, *"medium"* by default
- `css` - (optional) adds style classes to a control
- `width` - (optional) the width of a control, *"content"* by default
- `height` - (optional) the height of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of the Avatar control, *"8px"* by default
- `label` - (optional) specifies a label for the control
- `labelWidth` - (optional) sets the label width of the control
- `labelPosition` - (optional) defines the position of a label: "left" | "top", *"top"* by default
- `accept` - (optional) allows specifying the type/extension of the selected file, *"image/*"* by default. [Check details](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers)
- `fieldName` - (optional) sets the file field name in the form data sent to the server, *"file"* by default
- `autosend` - (optional) enables/disables automatic sending of an added file, *false* by default
- `params` - (optional) adds extra parameters for sending an XMLHttpRequest
- `headerParams` - (optional) provides additional parameters for Request Headers
- `updateFromResponse` - (optional) updates file attributes with the data from the server response, *true* by default

### Service properties

The properties, the name of which starts with the `$` sign are service properties.

:::warning
Note that it's highly not recommended to redefine the service properties and methods for the default types of controls, since it may cause breaks in the code. If you need to modify the default controls, you should [create a new control type]. **TODO - add link**
:::

- `$on` - (optional)
- `$handler` - (optional)
- `$setValue` - (optional)
- `$layout` - (optional)

## Example

~~~js {7-19}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                "img-card": [
                    {
                        type: "avatar",
                        accept: "image/*",
                        fieldName: "file",
                        target: "https://docs.dhtmlx.com/suite/backend/upload",
                        params: {
                            "firstCustomParam": "customValue",
                        },
                        headerParams: {
                            "firstCustomParam": "customValue",
                        },
                        autosend: true,
                    },
                ]
            }
        }
    }
});
~~~