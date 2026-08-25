---
sidebar_label: Checkbox
title: Editbar-Basissteuerelemente - Checkbox
description: Sie können das Checkbox-Steuerelement von Editbar in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

# Checkbox

@short: Das grundlegende Steuerelement zum Anzeigen des angegebenen Werts oder zum Umschalten auf den entgegengesetzten Wert.

![Checkbox-Steuerelement](/img/editbar-basic-controls/checkbox.png)

## Verwendung {#usage}

~~~jsx
{
    type: "checkbox",
    key?: string | string[],
    text?: string,
    value?: string,

    css?: string,
    disabled?: boolean, // Standardmäßig false
    hidden?: boolean, // Standardmäßig false
    height?: string | number | "content", // Standardmäßig "content"
    width?: string | number | "content", // Standardmäßig "content"
    padding?: string | number,

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

Das Steuerelement kann sowohl mit einem *booleschen* Wert als auch mit einem *String*-Wert verwendet werden, sofern die Eigenschaft `value` angegeben ist. [Sehen Sie sich das Beispiel unten an](#example), um die Idee zu verstehen.

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"checkbox"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `text` - (optional) der Textwert eines Steuerelements. Er wird rechts neben dem Steuerelement platziert
- `value` - (optional) der Wert einer Checkbox
- `css` - (optional) fügt einem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob eine Checkbox ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Checkbox-Steuerelements fest
- `label` - (optional) legt ein Label für ein Steuerelement fest
- `labelPosition` - (optional) legt die Position eines Labels fest: `"left"` | `"top"`. Standardmäßig `"top"`
- `labelWidth` - (optional) legt die Breite des Labels eines Steuerelements fest

### Service-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Service-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen nicht neu zu definieren, da dies zu Fehlfunktionen führen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt hat die folgenden Eigenschaften:
    - `eventName` - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-checkbox-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen des `change`-Events des [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form-Steuerelements und des `change`-Events von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der neue Wert des [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Setzen des Werts des [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Checkbox](https://docs.dhtmlx.com/suite/form/checkbox/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

## Beispiel {#example}

~~~jsx {7-17}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "checkbox",
                        label: "String value",
                        key: "other",
                        value: "enable"
                    },
                    {
                        type: "checkbox",
                        label: "Boolean value",
                        key: "fixed"
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "type": "rectangle", "other": "", "fixed": false },
    { "type": "rectangle", "other": "enable", "fixed": true, "x": 400 }
]);
~~~
