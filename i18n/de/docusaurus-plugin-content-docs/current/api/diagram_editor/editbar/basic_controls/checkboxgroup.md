---
sidebar_label: CheckboxGroup
title: Editbar-Basissteuerelemente - CheckboxGroup
description: Sie können das CheckboxGroup-Steuerelement von Editbar in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

# CheckboxGroup

@short: Das grundlegende Steuerelement zum Erstellen von Gruppen von Checkboxen.

![CheckboxGroup-Steuerelement](/img/editbar-basic-controls/checkboxgroup.png)

## Verwendung {#usage}

~~~jsx
{
    type: "checkboxGroup",
    options: {
        rows?: object[],
        cols?: object[],
        css?: string,
        height?: string | number | "content", // Standardmäßig "content"
        width?: string | number | "content", // Standardmäßig "content"
        padding?: string | number,
    },
    key?: string | string[],
    wrap?: boolean, // Standardmäßig false

    css?: string,
    disabled?: boolean, // Standardmäßig false
    hidden?: boolean, // Standardmäßig false
    height?: string | number | "content", // Standardmäßig "content"
    width?: string | number | "content", // Standardmäßig "content"
    padding?: string | number,

    // Prüfen Sie bei `wrap:true` die Label-Eigenschaften für Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // Standardmäßig "top"

    // Service-Eigenschaften und -Methoden
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

Konfigurationsobjekt der Checkbox innerhalb einer CheckboxGroup:

~~~jsx
{
    id: string,
    text: string,
    value?: string,

    css?: string,
    disabled?: boolean, // Standardmäßig false
    hidden?: boolean, // Standardmäßig false
    height?: string | number | "content", // Standardmäßig "content"
    width?: string | number | "content", // Standardmäßig "content"
    padding?: string | number
}
~~~

Die Objekte mit der `checkbox`-Konfiguration innerhalb des Steuerelements können sowohl mit einem *booleschen* Wert als auch mit einem *String*-Wert verwendet werden, sofern die Eigenschaft `value` angegeben ist. [Sehen Sie sich das Beispiel unten an](#example), um die Idee zu verstehen.

## Beschreibung {#description}

### CheckboxGroup-Eigenschaften {#checkboxgroup-properties}

#### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"checkboxGroup"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der externen Umrahmung. Standardmäßig *false*
- `options` - (erforderlich) ein Objekt mit den Optionen einer CheckboxGroup. Das Objekt kann die folgenden Attribute enthalten:
    - `rows` - (optional) ordnet die [checkboxes](#checkbox-properties) innerhalb des CheckboxGroup-Steuerelements vertikal an
    - `cols` - (optional) ordnet die [checkboxes](#checkbox-properties) innerhalb des CheckboxGroup-Steuerelements horizontal an
    - `css` - (optional) fügt einer CheckboxGroup Stilklassen hinzu
    - `height` - (optional) die Höhe einer CheckboxGroup
    - `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand einer CheckboxGroup fest
    - `width` - (optional) die Breite einer CheckboxGroup
- `css` - (optional) fügt einem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (boolean) legt fest, ob eine CheckboxGroup ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines CheckboxGroup-Steuerelements fest
- `label` - (optional) legt ein Label für das Steuerelement fest
- `labelWidth` - (optional) legt die Breite des Labels des Steuerelements fest
- `labelPosition` - (optional) legt die Position eines Labels fest: `"left"` | `"top"`. Standardmäßig `"top"`

#### Service-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Service-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen nicht neu zu definieren, da dies zu Fehlfunktionen führen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt hat die folgenden Eigenschaften:
    - `eventName` - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-checkboxgroup-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen des `change`-Events des [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form-Steuerelements und des `change`-Events von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der neue Wert des [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Setzen des Werts des [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [CheckboxGroup](https://docs.dhtmlx.com/suite/form/checkboxgroup/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

### Checkbox-Eigenschaften {#checkbox-properties}

- `id` - (optional) die ID eines Steuerelements, automatisch generiert, falls nicht festgelegt
- `text` - (optional) das Textlabel einer Checkbox
- `value` - (optional) der Wert einer Checkbox
- `css` - (optional) fügt einem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob eine Checkbox ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Checkbox-Steuerelements fest

## Beispiel {#example}

~~~jsx {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkboxGroup",
                        label: "Select products",
                        key: "products",
                        options: {
                            rows: [
                                { id: "diagram", text: "DHTMLX Diagram", value: "diagram" },
                                { id: "suite", text: "DHTMLX Suite", value: "suite" },
                                { id: "gantt", text: "DHTMLX Gantt" },
                                { id: "spreadsheet", text: "DHTMLX Spreadsheet", disabled: true }
                            ]
                        }
                    }
                ]
            }
        }
    }
});
editor.parse([
    {
        "type": "rectangle",
        "products": {
            "diagram": "diagram",
            "suite": "",
            "gantt": true,
            "spreadsheet": false
        }
    }
]);
~~~
