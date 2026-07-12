---
sidebar_label: Border
title: Komplexe Editbar-Steuerelemente - Border
description: Das Border-Steuerelement der Editbar können Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Border

@short: Das komplexe Steuerelement zum Anzeigen und Ändern der Rahmen eines Diagram-Elements

<img
  src={useBaseUrl('/img/editbar-complex-controls/border.png')}
  alt="Border control" width='300'
/>

:::info
Das **Border**-Steuerelement ist für das Element `lineTitle` nicht verfügbar.
:::

## Verwendung {#usage}

~~~jsx
{
    type: "border",

    hidden?: boolean, // Standardmäßig false
    disabled?: boolean, // Standardmäßig false

    css?: string,
    width?: string | number | "content", // Standardmäßig "content"
    height?: string | number | "content", // Standardmäßig "content"
    padding?: string | number, // Standardmäßig "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // Standardmäßig "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // Standardmäßig "between"
    compact?: boolean, // Standardmäßig false

    // Service-Eigenschaften
    $properties?: object
}
~~~

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"border"`
- `hidden` - (optional) legt fest, ob das Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob das Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite des Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe des Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand für den Inhalt innerhalb der Steuerelementgruppe fest. Standardmäßig *"0 16px"*
- `label` - (optional) legt eine Beschriftung für das Steuerelement fest
- `labelAlignment` - (optional) legt die Position der Beschriftung fest. Standardmäßig `"left"`
- `align` - (optional) legt die Ausrichtung der Steuerelemente innerhalb der Steuerelementgruppe fest. Standardmäßig `"between"`
- `compact` - (optional) legt den kompakten Modus fest, entfernt Abstände und Rahmen. Standardmäßig *false*

### Service-Eigenschaften {#service-properties}

- `$properties` - (optional) ermöglicht das Überschreiben von Werten der [Basissteuerelemente](api/diagram_editor/editbar/basic_controls_overview.md) innerhalb eines komplexen Steuerelements. Sie können die folgenden Elemente des **Border**-Steuerelements auf Basis der Basissteuerelemente konfigurieren:
    - `stroke` - ([colorpicker](api/diagram_editor/editbar/basic_controls/colorpicker.md)) legt die Rahmenfarbe fest
    - `strokeType` - ([combo](api/diagram_editor/editbar/basic_controls/combo.md)) legt den Rahmentyp fest
    - `strokeWidth` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt die Rahmenbreite fest

## Beispiel {#example}

~~~jsx {7-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    {
                        type: "border",
                        label: "Border style",
                        $properties: {
                            strokeType: { hidden: true }
                        }
                    }
                ]
            }
        }
    }
});
~~~
