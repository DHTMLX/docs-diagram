---
sidebar_label: RadioGroup
title: Editbar Grundlegende Steuerelemente - RadioGroup
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek können Sie das RadioGroup-Steuerelement der Editbar erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# RadioGroup

@short: Das grundlegende Steuerelement zum Erstellen von Gruppen aus Radiobuttons.

![RadioGroup control](/img/editbar-basic-controls/radiogroup.png)

## Verwendung {#usage}

~~~jsx
{
    type: "radiogroup",
    options: {
        rows?: object[],
        cols?: object[],
        css?: string,
        height?: string | number | "content",
        padding?: string | number,
        width?: string | number | "content"
    },
    key?: string | string[],
    wrap?: boolean, // standardmäßig false

    disabled?: boolean, // standardmäßig false
    hidden?: boolean, // standardmäßig false

    css?: string,
    height?: string | number | "content", // standardmäßig "content"
    width?: string | number | "content", // standardmäßig "content"
    padding?: string | number,

    // Prüfen Sie bei `wrap:true` die Label-Eigenschaften für Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // standardmäßig "top"

    // Dienst-Eigenschaften und -Methoden
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

Konfigurationsobjekt eines Radiobuttons innerhalb von RadioGroup:

~~~jsx
{
    value: string,
    text?: string,

    disabled?: boolean,
    hidden?: boolean,
    css?: string,
    height?: string | number | "content",
    width?: string | number | "content",
    padding?: string | number
}
~~~

## Beschreibung {#description}

### RadioGroup-Eigenschaften {#radiogroup-properties}

#### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Legen Sie ihn auf `"radioGroup"` fest
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umhüllung. Standardmäßig *false*
- `options` - (erforderlich) ein Objekt mit Optionen einer RadioGroup. Das Objekt kann die folgenden Attribute enthalten:
    - `rows` - (optional) ordnet [Radiobuttons](#radio-button-properties) innerhalb des RadioGroup-Steuerelements vertikal an
    - `cols` - (optional) ordnet [Radiobuttons](#radio-button-properties) innerhalb des RadioGroup-Steuerelements horizontal an
    - `css` - (optional) fügt einer RadioGroup Stilklassen hinzu
    - `height` - (optional) die Höhe einer RadioGroup
    - `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand einer RadioGroup fest
    - `width` - (optional) die Breite einer RadioGroup
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (boolean) legt fest, ob eine RadioGroup ausgeblendet ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines RadioGroup-Steuerelements fest
- `label` - (optional) legt ein Label für das Steuerelement fest
- `labelWidth` - (optional) legt die Label-Breite des Steuerelements fest
- `labelPosition` - (optional) legt die Position eines Labels fest: `"left"` | `"top"`. Standardmäßig `"top"`

#### Dienst-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Dienst-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen nicht neu zu definieren, da dies deren Funktionalität beeinträchtigen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt verfügt über die folgenden Eigenschaften:
    - `eventName` - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-radiogroup-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen des Events `change` des [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form-Steuerelements sowie des Events `change` von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form-Steuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der neue Wert des [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form-Steuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [RadioGroup](https://docs.dhtmlx.com/suite/form/radiogroup/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Dienst-Eigenschaften

### Radiobutton-Eigenschaften {#radio-button-properties}

- `value` - (erforderlich) der Wert eines Radiobuttons
- `text` - (optional) die Textbeschriftung eines Radiobuttons
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob ein Radiobutton ausgeblendet ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Radiobutton-Steuerelements fest

## Beispiel {#example}

~~~jsx {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "radioGroup",
                        key: "textAlign",
                        label: "Text align",
                        wrap: true,
                        options: {
                            rows: [
                                {
                                    text: "Left",
                                    value: "left"
                                },
                                {
                                    text: "Center",
                                    value: "center"
                                },
                                {
                                    text: "Right",
                                    value: "right"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
});
~~~
