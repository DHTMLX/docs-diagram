---
sidebar_label: Textarea
title: Editbar Basissteuerelemente - Textarea
description: Entdecken Sie das Textarea-Steuerelement der Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Textarea

@short: Das Basissteuerelement zur Eingabe von einfachem mehrzeiligem Text.

![Textarea-Steuerelement](/img/editbar-basic-controls/textarea.png)

## Verwendung {#usage}

~~~jsx
{
    type: "textarea",
    key?: string | string[],
    wrap?: boolean, // Standardmäßig false

    css?: string,
    disabled?: boolean, // Standardmäßig false
    hidden?: boolean, // Standardmäßig false
    height?: string | number | "content", // Standardmäßig "content"
    width?: string | number | "content", // Standardmäßig "content"
    padding?: string | number,

    maxlength?: number | string,
    minlength?: number | string,
    placeholder?: string,
    readOnly?: boolean, // Standardmäßig false

    // Bei `wrap:true` die Label-Eigenschaften für Fieldset prüfen
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

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"textarea"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umrandung. Standardmäßig *false*
- `css` - (optional) fügt einem Steuerelement Style-Klassen hinzu
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand des Textarea-Steuerelements fest
- `maxlength` - (optional) die maximale [Anzahl der im Textarea-Feld zulässigen Zeichen](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters)
- `minlength` - (optional) die minimale [Anzahl der im Textarea-Feld zulässigen Zeichen](https://docs.dhtmlx.com/suite/form/work_with_form/#number-of-allowed-characters)
- `placeholder` - (optional) ein Hinweis für das Textarea-Feld
- `readOnly` - (optional) legt fest, ob das Textarea-Feld schreibgeschützt ist. Standardmäßig *false*
- `label` - (optional) legt ein Label für das Steuerelement fest
- `labelWidth` - (optional) legt die Label-Breite des Steuerelements fest
- `labelPosition` - (optional) legt die Position eines Labels fest: `"left"` | `"top"`. Standardmäßig `"top"`

### Service-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend davon abraten, die Service-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen neu zu definieren, da dies zu Fehlfunktionen führen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt hat die folgenden Eigenschaften:
    - `eventName`  - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Textarea](https://docs.dhtmlx.com/suite/form/textarea/)-Formularsteuerelement
            - `editor` - das Objekt von Diagram Editor
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-textarea-events/)
- `$handler` - (optional) - eine Callback-Funktion, die die Behandlung von Aktionen beim Auslösen der `change`- und `input`-Events des [Textarea](https://docs.dhtmlx.com/suite/form/textarea/)-Formularsteuerelements und des `change`-Events der DataCollection ermöglicht. Wird mit folgendem Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt von Diagram Editor
        - `control` - das Objekt des [Textarea](https://docs.dhtmlx.com/suite/form/textarea/)-Formularsteuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der neue Wert des [Textarea](https://docs.dhtmlx.com/suite/form/textarea/)-Formularsteuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [Textarea](https://docs.dhtmlx.com/suite/form/textarea/)-Formularsteuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in der DataCollection ermöglicht. Wird mit folgendem Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt von Diagram Editor
        - `control` - das Objekt des [Textarea](https://docs.dhtmlx.com/suite/form/textarea/)-Formularsteuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Textarea](https://docs.dhtmlx.com/suite/form/textarea/)-Formularsteuerelements zurück. Wird mit folgendem Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

## Beispiel {#example}

~~~jsx {7-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "textarea",
                        key: "text",
                        label: "Textarea label",
                        height: 250,
                        wrap: true
                    }
                ]
            }
        }
    }
});
~~~
