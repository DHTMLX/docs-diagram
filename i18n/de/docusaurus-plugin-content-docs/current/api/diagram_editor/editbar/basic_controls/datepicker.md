---
sidebar_label: Datepicker
title: Editbar Grundlegende Steuerelemente - Datepicker
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek können Sie das Datepicker-Steuerelement der Editbar erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Datepicker

@short: Das grundlegende Steuerelement zur Auswahl eines Datums.

![Datepicker control](/img/editbar-basic-controls/datepicker.png)

## Verwendung {#usage}

~~~jsx
{
    type: "datepicker",
    key?: string | string[],
    wrap?: boolean, // standardmäßig false

    css?: string,
    disabled?: boolean, // standardmäßig false
    hidden?: boolean, // standardmäßig false
    height?: string | number | "content", // standardmäßig "content"
    width?: string | number | "content", // standardmäßig "content"
    padding?: string | number,

    date?: Date | string,
    dateFormat?: string, // standardmäßig "%d/%m/%y"
    disabledDates?: (date: Date) => boolean,
    icon?: string,
    mark?: (date: Date) => string,
    mode?: "calendar" | "month" | "year", // standardmäßig "calendar"
    placeholder?: string,
    thisMonthOnly?: boolean, // standardmäßig false
    timeFormat?: 24 | 12, // standardmäßig 24
    timePicker?: boolean, // standardmäßig false
    valueFormat?: "string" | "Date", // standardmäßig "string"
    weekNumbers?: boolean, // standardmäßig false
    weekStart?: "saturday" | "sunday" | "monday", // standardmäßig "sunday"

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

- `type` - (erforderlich) der Typ eines Steuerelements. Legen Sie ihn auf `"datepicker"` fest
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umhüllung. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Datepicker-Steuerelements fest
- `date` - (optional) legt das Datum fest, das beim Erstellen des Kalenders geöffnet wird
- `dateFormat` - (optional) legt das Format der Datumsangaben im Kalender fest. Standardmäßig *"%d/%m/%y"*. Das Datumsformat muss Trennzeichen (Leerzeichen oder Symbol) enthalten, andernfalls wird ein Fehler ausgelöst
- `disabledDates` - (optional) ermöglicht das Deaktivieren bestimmter Datumsintervalle, die Beschriftungen der Tage werden abgeblendet
- `icon` - (optional) die CSS-Klasse eines Icons aus der verwendeten Icon-Schriftart
- `mark` - (optional) ermöglicht das Hinzufügen einer CSS-Klasse zu bestimmten Tagen
- `mode` - (optional) legt den Anzeigemodus eines Kalenders fest: `"calendar"` | `"month"` | `"year"`. Standardmäßig `"calendar"`
- `placeholder` - (optional) ein Hinweis für die Eingabe
- `thisMonthOnly` - (optional) blendet Daten der vorherigen/nächsten Monate relativ zum aktuell angezeigten Monat aus
- `timeFormat` - (optional) legt das Zeitformat eines Timepickers fest, 12-Stunden oder 24-Stunden: *12* | *24*. Standardmäßig *24*
- `timePicker` - (optional) fügt dem Kalender einen Timepicker hinzu. Standardmäßig *false*
- `valueFormat` - (optional) legt das Format des Werts fest, der beim Abrufen des aktuellen Werts des Steuerelements zurückgegeben wird: `"string"` | `"Date"`. Standardmäßig `"string"`
- `weekNumbers` - (optional) legt fest, ob die Wochennummern angezeigt werden, standardmäßig *false*
- `weekStart` - (optional) legt den ersten Tag der Woche fest: `"saturday"` | `"monday"` | `"sunday"`. Standardmäßig `"sunday"`
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
            - `control` - das [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-datepicker-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen der Events `change` und `input` eines Form-Steuerelements sowie des Events `change` von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form-Steuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der neue Wert des [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form-Steuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Datepicker](https://docs.dhtmlx.com/suite/form/calendar/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Dienst-Eigenschaften

## Beispiel {#example}

~~~jsx {7-21}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "datepicker",
                        key: "date_start",
                        label: "Date start",
                        wrap: true,
                    },
                    {
                        type: "datepicker",
                        key: "date_end",
                        label: "Date end",
                        wrap: true,
                        valueFormat: "Date",
                        timePicker: true,
                        weekStart: "monday"
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "date_start": "25/03/24", "date_end": new Date },
    { "id": "shape_3", "parent": "shape_1", "date_start": "25/03/24", "date_end": new Date }
]);
~~~
