---
sidebar_label: Fieldset
title: Editbar Grundlegende Steuerelemente - Fieldset
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek können Sie das Fieldset-Steuerelement der Editbar erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Fieldset

@short: Das grundlegende Steuerelement zum Erstellen komplexer Steuerelemente mithilfe der Editbar-Konfigurationsoptionen [`controls`](api/diagram_editor/editbar/config/controls_property.md) oder [`properties`](api/diagram_editor/editbar/config/properties_property.md).

![Fieldset control](/img/editbar-basic-controls/fieldset.png)

## Verwendung {#usage}

~~~jsx
{
    type: "fieldset",

    compact?: boolean,
    hidden?: boolean, // standardmäßig false
    disabled?: boolean, // standardmäßig false

    css?: string,
    width?: string | number | "content", // standardmäßig "content"
    height?: string | number | "content", // standardmäßig "content"
    padding?: string | number,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // standardmäßig "start"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // standardmäßig "left"

    rows?: object[],
    cols?: object[],

    $layout?: function
}
~~~

Die Eigenschaften `rows` und `cols` können ein Array von Objekten der angegebenen Steuerelemente oder die unten angegebene verschachtelte Struktur enthalten:

~~~jsx
{
    css?: string,
    width?: string | number | "content", // standardmäßig "content"
    height?: string | number | "content", // standardmäßig "content"
    padding?: string | number,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // standardmäßig "start"
    rows?: object[],
    cols?: object[]
}
~~~

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Legen Sie ihn auf `"fieldset"` fest
- `compact` - (optional) legt den kompakten Modus fest, entfernt Einzüge und Rahmen. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `css` - (optional) der Name der CSS-Klasse(n), die auf die Steuerelementgruppe angewendet werden
- `width` - (optional) legt die Breite der Steuerelementgruppe fest. Standardmäßig `"content"`
- `height` - (optional) legt die Höhe der Steuerelementgruppe fest. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand für den Inhalt innerhalb der Steuerelementgruppe fest
- `align` - (optional) legt die Ausrichtung der Steuerelemente innerhalb der Steuerelementgruppe fest. Standardmäßig `"start"`
- `label` - (optional) legt ein Label für ein Steuerelement fest
- `labelAlignment` - (optional) legt die Position des Labels fest: `"left"` | `"right"` | `"center"`. Standardmäßig `"left"`
- `rows` - (optional) ordnet die Steuerelemente innerhalb der Steuerelementgruppe vertikal an
- `cols` - (optional) ordnet die Steuerelemente innerhalb der Steuerelementgruppe horizontal an

#### Dienst-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Dienst-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen nicht neu zu definieren, da dies deren Funktionalität beeinträchtigen kann.
:::

- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Fieldset](https://docs.dhtmlx.com/suite/form/fieldset/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Dienst-Eigenschaften

## Beispiel {#example}

~~~jsx {7-28} title="Erstellen eines Fieldsets über die properties-Eigenschaft"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "fieldset",
                        label: "Task details",
                        rows: [
                            { type: "input", key: "name", label: "Task name" },
                            { type: "input", key: "id", label: "ID", readOnly: true },
                            {
                                align: "between",
                                cols: [
                                    { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                    { type: "datepicker", key: "date_end", label: "Date end", width: "48%" },
                                ]
                            },
                            {
                                type: "combo",
                                key: "responsible",
                                label: "Responsible",
                                placeholder: "Select responsible",
                                options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                            }
                        ]
                    }
                ]
            }
        }
    }
});
~~~

~~~jsx {10-33} title="Erstellen eines komplexen Steuerelements über die controls-Eigenschaft"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "details" }
                ]
            },
            controls: {
                details: {
                    type: "fieldset",
                    label: "Task details",
                    rows: [
                        { type: "input", key: "name", label: "Task name" },
                        { type: "input", key: "id", label: "ID", readOnly: true },
                        {
                            align: "between",
                            cols: [
                                { type: "datepicker", key: "date_start", label: "Date start", width: "48%" },
                                { type: "datepicker", key: "date_end", label: "Date end", width: "48%" }
                            ]
                        },
                        {
                            type: "combo",
                            key: "responsible",
                            label: "Responsible",
                            placeholder: "Select responsible",
                            options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                        }
                    ]
                }
            }
        }
    }
});
~~~
