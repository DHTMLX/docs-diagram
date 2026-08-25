---
sidebar_label: Header common
title: Editbar Complex Controls - Header common
description: Informieren Sie sich in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek über das Steuerelement Header common der Editbar. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Header common

@short: Das komplexe Steuerelement zum Ändern der Sichtbarkeit, Farbe und Höhe der Gruppenkopfzeile

<img
  src={useBaseUrl('/img/editbar-complex-controls/headercommon.png')}
  alt="Header common control" width='300'
/>

:::info
Das Steuerelement **Header common** ist nur für die Elemente `group` und `swimlane` im *default*-Modus des Diagram-Editors verfügbar.
:::

## Verwendung {#usage}

~~~jsx
{
    type: "headerCommon",

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

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"headerCommon"`
- `hidden` - (optional) legt fest, ob das Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob das Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite des Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe des Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand für den Inhalt innerhalb der Steuerelementgruppe fest. Standardmäßig *"0 16px"*
- `label` - (optional) gibt eine Beschriftung für das Steuerelement an
- `labelAlignment` - (optional) legt die Position der Beschriftung fest. Standardmäßig `"left"`
- `align` - (optional) legt die Ausrichtung der Steuerelemente innerhalb der Steuerelementgruppe fest. Standardmäßig `"between"`
- `compact` - (optional) legt den kompakten Modus fest, entfernt Abstände und Rahmen. Standardmäßig *false*

### Service-Eigenschaften {#service-properties}

- `$properties` - (optional) ermöglicht das Überschreiben von Werten der [Basissteuerelemente](api/diagram_editor/editbar/basic_controls_overview.md) innerhalb eines komplexen Steuerelements. Sie können die folgenden Elemente des Steuerelements **Header common** basierend auf den Basissteuerelementen konfigurieren:
    - `enable` - ([toggle](api/diagram_editor/editbar/basic_controls/toggle.md)) schaltet die Sichtbarkeit der Gruppenkopfzeile um
    - `fill` - ([colorpicker](api/diagram_editor/editbar/basic_controls/colorpicker.md)) legt die Hintergrundfarbe der Gruppenkopfzeile fest
    - `height` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt die Höhe der Gruppenkopfzeile fest (px)

## Beispiel {#example}

~~~jsx {6-14}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "headerCommon",
                        label: "Header common",
                        $properties: {
                            fill: { key: ["header", "fill"] }
                        }
                    }
                ]
            }
        }
    }
});
~~~
