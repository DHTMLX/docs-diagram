---
sidebar_label: Timepicker
title: Editbar Basissteuerelemente - Timepicker
description: Entdecken Sie das Timepicker-Steuerelement der Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Timepicker

@short: Das Basissteuerelement zur Auswahl eines Zeitwerts, entweder durch Bewegen von Griffen entlang von Schienen oder durch direkte Eingabe von Stunden- und Minutenwerten in die entsprechenden Eingabefelder.

![Timepicker-Steuerelement](/img/editbar-basic-controls/timepicker.png)

## Verwendung {#usage}

~~~jsx
{
    type: "timepicker",
    key?: string | string[],
    wrap?: boolean, // Standardmäßig false

    css?: string,
    disabled?: boolean, // Standardmäßig false
    hidden?: boolean, // Standardmäßig false
    height?: string | number | "content", // Standardmäßig "content"
    width?: string | number | "content", // Standardmäßig "content"
    padding?: string | number,

    controls?: boolean, // Standardmäßig false
    icon?: string,
    placeholder?: string,
    timeFormat?: 12 | 24, // Standardmäßig 24
    valueFormat?: "string" | "timeObject", // Standardmäßig "string"

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

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"timepicker"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umrandung. Standardmäßig *false*
- `css` - (optional) fügt einem Steuerelement Style-Klassen hinzu
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand des Timepicker-Steuerelements fest
- `controls` - (optional) legt fest, ob ein Timepicker mit den Schaltflächen Schließen und Speichern ausgestattet ist. Standardmäßig *false*
- `icon` - (optional) die CSS-Klasse eines Icons aus der verwendeten Icon-Schriftart
- `placeholder` - (optional) ein Hinweis für das Eingabefeld
- `timeFormat` - (optional) legt fest, welches Uhrzeitformat aktiviert ist: das 12-Stunden- oder das 24-Stunden-Format. Setzen Sie die Eigenschaft entsprechend auf *12* oder *24*. Standardmäßig *24*
- `valueFormat` - (optional) legt das Format des Werts fest, das bei der Arbeit mit den Events des Timepicker-Steuerelements angewendet wird: `"string"` | `"timeObject"`. Standardmäßig `"string"`
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
            - `control` - das [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/)-Formularsteuerelement
            - `editor` - das Objekt von Diagram Editor
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-timepicker-events/)
- `$handler` - (optional) - eine Callback-Funktion, die die Behandlung von Aktionen beim Auslösen der `change`- und `input`-Events des [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/)-Formularsteuerelements und des `change`-Events der DataCollection ermöglicht. Wird mit folgendem Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt von Diagram Editor
        - `control` - das Objekt des [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/)-Formularsteuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der neue Wert des [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/)-Formularsteuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/)-Formularsteuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in der DataCollection ermöglicht. Wird mit folgendem Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt von Diagram Editor
        - `control` - das Objekt des [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/)-Formularsteuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Timepicker](https://docs.dhtmlx.com/suite/form/timepicker/)-Formularsteuerelements zurück. Wird mit folgendem Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

## Beispiel {#example}

~~~jsx {8-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    {
                        type: "timepicker",
                        key: "time",
                        label: "Select time",
                        controls: true
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "time": "14:00" },
    { "id": "shape_3", "parent": "shape_1", "time": "18:30" }
]);
~~~
