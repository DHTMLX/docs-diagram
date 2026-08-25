---
sidebar_label: Slider
title: Editbar Basissteuerelemente - Slider
description: Entdecken Sie das Slider-Steuerelement der Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Slider

@short: Das Basissteuerelement zur Auswahl eines numerischen Werts, indem ein Regler entlang einer Linie mit einer festen Anzahl an Optionen bewegt wird.

![Slider-Steuerelement](/img/editbar-basic-controls/slider.png)

## Verwendung {#usage}

~~~jsx
{
    type: "slider",
    key?: string | string[],
    wrap?: boolean, // Standardmäßig false

    disabled?: boolean, // Standardmäßig false
    hidden?: boolean, // Standardmäßig false
    css?: string,
    padding?: string | number,
    height?: string | number | "content", // Standardmäßig "content"
    width?: string | number | "content", // Standardmäßig "content"

    inverse?: boolean, // Standardmäßig false
    majorTick?: number,
    max?: number, // Standardmäßig 100
    min?: number, // Standardmäßig 0
    mode?: "vertical" | "horizontal", // Standardmäßig "horizontal"
    range?: boolean, // Standardmäßig false
    step?: number, // Standardmäßig 1
    tick?: number,
    tickTemplate?: (position: number) => string,
    tooltip?: boolean, // Standardmäßig true

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

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"slider"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umrandung. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `css` - (optional) fügt einem Steuerelement Style-Klassen hinzu
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Slider-Steuerelements fest
- `inverse` - (optional) aktiviert/deaktiviert den inversen Slider-Modus. Standardmäßig *false*
- `majorTick` - (optional) legt das Intervall für die Anzeige numerischer Werte auf der Slider-Skala fest
- `max` - (optional) der Maximalwert des Sliders. Standardmäßig *100*
- `min` - (optional) der Minimalwert des Sliders. Standardmäßig *0*
- `mode` - (optional) die Ausrichtung der Slider-Skala. Standardmäßig `"horizontal"`
- `range` - (optional) aktiviert/deaktiviert die Auswahl eines Wertebereichs auf dem Slider. Standardmäßig *false*
- `step` - (optional) der Schritt, um den der Slider-Regler bewegt wird. Standardmäßig *1*
- `tick` - (optional) legt das Schrittintervall für die Anzeige der Slider-Skala fest
- `tickTemplate` - (optional) legt eine Vorlage für die Anzeige von Werten auf der Skala fest
- `tooltip` - (optional) aktiviert Hinweismeldungen mit Tick-Werten beim Überfahren des Slider-Reglers mit der Maus. Standardmäßig *true*

### Service-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend davon abraten, die Service-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen neu zu definieren, da dies zu Fehlfunktionen führen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt hat die folgenden Eigenschaften:
    - `eventName`  - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Slider](https://docs.dhtmlx.com/suite/form/slider/)-Formularsteuerelement
            - `editor` - das Objekt von Diagram Editor
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-slider-events/)
- `$handler` - (optional) - eine Callback-Funktion, die die Behandlung von Aktionen beim Auslösen des `change`-Events des [Slider](https://docs.dhtmlx.com/suite/form/slider/)-Formularsteuerelements und des `change`-Events der DataCollection ermöglicht. Wird mit folgendem Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt von Diagram Editor
        - `control` - das Objekt des [Slider](https://docs.dhtmlx.com/suite/form/slider/)-Formularsteuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der neue Wert des [Slider](https://docs.dhtmlx.com/suite/form/slider/)-Formularsteuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [Slider](https://docs.dhtmlx.com/suite/form/slider/)-Formularsteuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in der DataCollection ermöglicht. Wird mit folgendem Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt von Diagram Editor
        - `control` - das Objekt des [Slider](https://docs.dhtmlx.com/suite/form/slider/)-Formularsteuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Slider](https://docs.dhtmlx.com/suite/form/slider/)-Formularsteuerelements zurück. Wird mit folgendem Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

## Beispiel {#example}

~~~jsx {7-18}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $lineTitle: [
                    {
                        type: "slider",
                        key: "distance",
                        label: "Distance",
                        wrap: true,
                        min: 0,
                        max: 100,
                        step: 1,
                        tick: 5,
                        majorTick: 10,
                        tickTemplate: value => value
                    },
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1", "type": "rectangle", "text": "shape" },
    { "id": "shape_2","type": "rectangle", "text": "shape", "x": 400 },
    { "id": "line", "type": "line", "from": "shape_1", "to": "shape_2" },
    { "type": "lineTitle", "parent": "line", "text": "Title", "distance": 50 }
]);
~~~
