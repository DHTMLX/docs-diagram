---
sidebar_label: Arrange
title: Komplexe Editbar-Steuerelemente - Arrange
description: Das Arrange-Steuerelement der Editbar können Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Arrange

@short: Das komplexe Steuerelement zum Bearbeiten der Eigenschaften Breite, Höhe, Rotationswinkel sowie x und y eines Diagram-Elements

<img
  src={useBaseUrl('/img/editbar-complex-controls/arrange.png')}
  alt="Arrange control" width='300'
/>

:::info
Das **Arrange**-Steuerelement ist für alle Elemente (mit Ausnahme der Elemente `line` und `lineTitle`) im *default*-Modus des Diagram-Editors verfügbar.
:::

## Verwendung {#usage}

~~~jsx
{
    type: "arrange",

    hidden?: boolean, // Standardmäßig false
    disabled?: boolean, // Standardmäßig false

    css?: string,
    width?: string | number | "content", // Standardmäßig "content"
    height?: string | number | "content", // Standardmäßig "content"
    padding?: string | number, // Standardmäßig "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // Standardmäßig "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // Standardmäßig "start"
    compact?: boolean, // Standardmäßig false

    // Service-Eigenschaften
    $properties?: object
}
~~~

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"arrange"`
- `hidden` - (optional) legt fest, ob das Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob das Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite des Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe des Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand für den Inhalt innerhalb der Steuerelementgruppe fest. Standardmäßig *"0 16px"*
- `label` - (optional) legt eine Beschriftung für das Steuerelement fest
- `labelAlignment` - (optional) legt die Position der Steuerelement-Beschriftung fest. Standardmäßig `"left"`
- `align` - (optional) legt die Ausrichtung der Steuerelemente innerhalb der Steuerelementgruppe fest. Standardmäßig `"start"`
- `compact` - (optional) legt den kompakten Modus fest, entfernt Abstände und Rahmen. Standardmäßig *false*

### Service-Eigenschaften {#service-properties}

- `$properties` - (optional) ermöglicht das Überschreiben von Werten der [Basissteuerelemente](api/diagram_editor/editbar/basic_controls_overview.md) innerhalb eines komplexen Steuerelements. Sie können die folgenden Elemente des **Arrange**-Steuerelements auf Basis der Basissteuerelemente konfigurieren:
    - `x` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt die Position des Diagram-Elements auf der x-Achse fest
    - `y` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt die Position des Diagram-Elements auf der y-Achse fest
    - `width` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt die Breite des Diagram-Elements fest (px)
    - `height` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt die Höhe des Diagram-Elements fest (px)
    - `angle` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt den Rotationswinkel des Diagram-Elements fest

## Beispiel {#example}

~~~jsx {7-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    {
                        type: "arrange",
                        disabled: true,
                        $properties: {
                            angle: { hidden: true } // Konfiguration des Basissteuerelements "input"
                        }
                    }
                ]
            }
        }
    }
});
~~~
