---
sidebar_label: Editbar TODO
title: Editor Guides - Editbar
description: You can learn about the Editbar of editor in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Editbar 

Здесь мы рассказываем как настроить Editbar и перечисляем несколько сценариев как настроить контролы с небольшими комментариями как в коде так и вне его.

Даем ссылки на [Basic controls](guides/diagram_editor/editbar/basic_controls.md) и [Complex controls](guides/diagram_editor/editbar/basic_controls.md), в которых детально расписаны всевозможные свойства (смотреть задачи https://tracker.webix.io/agiles/87-97/88-554?issue=DHX-4537  /  https://tracker.webix.io/agiles/87-97/88-554?issue=DHX-4538)

Даем ссылки и детально рассказываем как настраивать контролы внутри свойств [`properties`](api/diagram_editor/editbar/config/properties_property.md) и [`controls`](api/diagram_editor/editbar/config/controlss_property.md)

________________________________________________________________________________________________________________________________________

## Scenario 1

The example below shows how to configure Editbar controls if a user select a shape:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [ // specify custom controls for all shapes
                    { type: "estimate" }, // apply the "estimate" custom control
                    { type: "name" } // apply the "name" custom control
                ]
            },
            controls: {
                // create the "estimate" custom control
                estimate: { 
                    type: "fieldset",
                    label: "Time estimate",
                    rows: [
                        { type: "datepicker", key: "date_start", label: "Date start" },
                        { type: "datepicker", key: "date_end", label: "Date end" }
                    ]
                },
                // create the "name" custom control
                name: { type: "input", label: "Name", key: "name" }
            }
        }
    }
});
~~~

## Scenario 2

The example below shows how to configure Editbar taking into account the following conditions:
- If no element was selected or more than one element was selected, use the [gridStep](api/diagram_editor/editbar/complex_controls/gridstep.md) control.
- If you select the **rectangle** element, use a custom set of the following controls:
    - [`input`](api/diagram_editor/editbar/basic_controls/input.md) - the basic "input" control
    - [`arrange`](api/diagram_editor/editbar/complex_controls/arrange.md) - the complex "arrange" control
    - `estimate` - the custom control based on the [fieldset](api/diagram_editor/editbar/basic_controls/fieldset.md) basic control

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: [
                    { type: "gridStep" }
                ],
                // define a set of custom controls for the "rectangle" shape only
                rectangle: [
                    { type: "input", label: "Shape name" },
                    { type: "arrange" },
                    { type: "estimate" }, // apply the "estimate" custom control
                    { type: "input", label: "Task name", key: "task_name", wrap: true }
                ]
            },
            controls: {
                // create the "estimate" custom control
                estimate: {
                    type: "fieldset",
                    label: "Time estimate",
                    rows: [
                        { type: "datepicker", key: "date_start", label: "Date start" },
                        { type: "datepicker", key: "date_end", label: "Date end" }
                    ]
                }
            }
        }
    }
});

editor.parse([
    {
        "type": "rectangle",
        "date_start": "12/02/24",
        "date_end": "20/03/25",
        "text": "Rectangle",
        "task_name": "Header example"
    }
]);
~~~
