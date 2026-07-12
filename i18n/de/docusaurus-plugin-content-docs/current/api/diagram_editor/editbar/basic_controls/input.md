---
sidebar_label: Input
title: Editbar Grundlegende Steuerelemente - Input
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek können Sie das Input-Steuerelement der Editbar erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Input

@short: Das grundlegende Eingabefeld-Steuerelement zur Texteingabe.

![Input control](/img/editbar-basic-controls/input.png)

## Verwendung {#usage}

~~~jsx
{
    type: "input",
    key?: string | string[],
    wrap?: boolean, // standardmäßig false

    css?: string,
    disabled?: boolean, // standardmäßig false
    hidden?: boolean, // standardmäßig false
    height?: string | number | "content", // standardmäßig "content"
    width?: string | number | "content", // standardmäßig "content"
    padding?: string | number,

    icon?: string,
    inputType?: "text" | "password" | "number", // standardmäßig "text"
    max?: number | string,
    maxlength?: number | string,
    min?: number | string,
    minlength?: number | string,
    placeholder?: string,
    readOnly?: boolean, // standardmäßig false

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

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Legen Sie ihn auf `"input"` fest
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umhüllung. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Input-Steuerelements fest
- `icon` - (optional) die CSS-Klasse eines [Icons](https://docs.dhtmlx.com/suite/helpers/icon/) aus der verwendeten Icon-Schriftart
- `inputType` - (optional) legt den Typ einer Eingabe fest: `"text"` | `"password"` | `"number"`. Standardmäßig `"text"`
Verwenden Sie den Wert `"password"`, um ein Feld für die Passworteingabe festzulegen
- `max` - (optional) - der [maximal zulässige Wert der Eingabe](https://docs.dhtmlx.com/suite/form/work_with_form/#minimal-and-maximal-values). Das Attribut funktioniert nur mit dem Eingabetyp: *"number"*
- `maxlength` - (optional) die maximale [Anzahl der in der Eingabe zulässigen Zeichen](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters). Das Attribut funktioniert mit den folgenden Eingabetypen: *"text", "password"*
- `min` - (optional) [der minimal zulässige Wert der Eingabe](https://docs.dhtmlx.com/suite/form/work_with_form/#minimal-and-maximal-values). Das Attribut funktioniert nur mit dem Eingabetyp: *"number"*
- `minlength` - (optional) die minimale [Anzahl der in der Eingabe zulässigen Zeichen](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters). Das Attribut funktioniert mit den folgenden Eingabetypen: *"text", "password"*
- `placeholder` - (optional) ein Hinweis für die Eingabe
- `readOnly` - (optional) legt fest, ob eine Eingabe schreibgeschützt ist. Standardmäßig *false*
- `label` - (optional) legt ein Label für das Steuerelement fest
- `labelWidth` - (optional) legt die Label-Breite des Steuerelements fest
- `labelPosition` - (optional) legt die Position eines Labels fest: `"left"` | `"top"`. Standardmäßig `"top"`

### Dienst-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Dienst-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen nicht neu zu definieren, da dies deren Funktionalität beeinträchtigen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt verfügt über die folgenden Eigenschaften:
    - `eventName` - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Input](https://docs.dhtmlx.com/suite/form/input/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-input-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen der Events `change` und `input` des [Input](https://docs.dhtmlx.com/suite/form/input/) Form-Steuerelements sowie des Events `change` von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Input](https://docs.dhtmlx.com/suite/form/input/) Form-Steuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der neue Wert des [Input](https://docs.dhtmlx.com/suite/form/input/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [Input](https://docs.dhtmlx.com/suite/form/input/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Input](https://docs.dhtmlx.com/suite/form/input/) Form-Steuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Input](https://docs.dhtmlx.com/suite/form/input/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Dienst-Eigenschaften

## Beispiel {#example}

~~~jsx {7-22}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "input",
                        inputType: "text",
                        key: "text",
                        label: "Input with a string value",
                        placeholder: "Enter a string value"
                    },
                    {
                        type: "input",
                        inputType: "number",
                        key: "x",
                        label: "Input with a number value",
                        placeholder: "Enter a number value",
                        min: 0,
                        max: 100,
                    }
                ]
            }
        }
    }
});
~~~
