---
sidebar_label: Size
title: Komplexe Steuerelemente der Editbar - Size
description: Sie können das Size-Steuerelement der Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-tägige Testversion der DHTMLX Suite herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Size

@short: Das komplexe Steuerelement zur Verwaltung von Breite und Höhe der Diagram-Elemente

<img
  src={useBaseUrl('/img/editbar-complex-controls/size.png')}
  alt="Size control" width='300'
/>

:::info
Das **Size**-Steuerelement ist nur für die Elemente `shape`, `group` und `swimlane` des Diagram-Editors verfügbar.
:::

## Verwendung {#usage}

~~~jsx
{
    type: "size",

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

### Basiseigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"size"`
- `hidden` - (optional) legt fest, ob das Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob das Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite des Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe des Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand für den Inhalt innerhalb der Steuerelementgruppe fest. Standardmäßig *"0 16px"*
- `label` - (optional) gibt eine Beschriftung für das Steuerelement an
- `labelAlignment` - (optional) legt die Position der Beschriftung fest. Standardmäßig `"left"`
- `align` - (optional) legt die Ausrichtung der Steuerelemente innerhalb der Steuerelementgruppe fest. Standardmäßig `"start"`
- `compact` - (optional) gibt den kompakten Modus an, bei dem Abstände und Rahmen entfernt werden. Standardmäßig *false*

### Service-Eigenschaften {#service-properties}

- `$properties` - (optional) ermöglicht das Überschreiben von Werten der [Basissteuerelemente](api/diagram_editor/editbar/basic_controls_overview.md) innerhalb eines komplexen Steuerelements. Sie können die folgenden Elemente des **Size**-Steuerelements auf Grundlage der Basissteuerelemente konfigurieren:
    - `width` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt die Breite des Diagram-Elements fest (px)
    - `height` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt die Höhe des Diagram-Elements fest (px)

## Beispiel {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "size",
                        label: "Shape size"
                    }
                ]
            }
        }
    }
});
~~~
