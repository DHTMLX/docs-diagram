---
sidebar_label: Text style
title: Komplexe Steuerelemente der Editbar - Text style
description: Sie können das Text style-Steuerelement der Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-tägige Testversion der DHTMLX Suite herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Text style

@short: Das komplexe Steuerelement zur Verwaltung des Textstils innerhalb der Diagram-Elemente

<img
  src={useBaseUrl('/img/editbar-complex-controls/textstyle.png')}
  alt="Text style control" width='300'
/>

## Verwendung {#usage}

~~~jsx
{
    type: "textStyle",

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

### Basiseigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"textStyle"`
- `hidden` - (optional) legt fest, ob das Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob das Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite des Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe des Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand für den Inhalt innerhalb der Steuerelementgruppe fest. Standardmäßig *"0 16px"*
- `label` - (optional) gibt eine Beschriftung für das Steuerelement an
- `labelAlignment` - (optional) legt die Position der Beschriftung fest. Standardmäßig `"left"`
- `align` - (optional) legt die Ausrichtung der Steuerelemente innerhalb der Steuerelementgruppe fest. Standardmäßig `"between"`
- `compact` - (optional) gibt den kompakten Modus an, bei dem Abstände und Rahmen entfernt werden. Standardmäßig *false*

### Service-Eigenschaften {#service-properties}

- `$properties` - (optional) ermöglicht das Überschreiben von Werten der [Basissteuerelemente](api/diagram_editor/editbar/basic_controls_overview.md) innerhalb eines komplexen Steuerelements. Sie können die folgenden Elemente des **Text style**-Steuerelements auf Grundlage der Basissteuerelemente konfigurieren:
    - `fontSize` - ([combo](api/diagram_editor/editbar/basic_controls/combo.md)) legt die Schriftgröße fest
    - `lineHeight` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt den Zeilenabstand fest
    - `fontColor` - ([colorpicker](api/diagram_editor/editbar/basic_controls/colorpicker.md)) legt die Schriftfarbe fest
    - `fontWeight` - ([toggle](api/diagram_editor/editbar/basic_controls/toggle.md)) legt die Schriftstärke fest
    - `fontStyle` - ([toggle](api/diagram_editor/editbar/basic_controls/toggle.md)) legt den Schriftstil fest

## Beispiel {#example}

~~~jsx {6-22}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "textStyle",
                        label: "Text style",
                        $properties: {
                            fontSize: {
                                value: 20,
                                options: [
                                    { id: 10, value: "10px" },
                                    { id: 20, value: "20px" },
                                    { id: 30, value: "30px" },
                                    { id: 40, value: "40px" }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~
