---
sidebar_label: Position
title: Editbar Complex Controls - Position
description: Informieren Sie sich in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek über das Steuerelement Position der Editbar. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Position

@short: Das komplexe Steuerelement zum Konfigurieren des Versatzes der Form vom vordefinierten Algorithmus auf der X- und Y-Achse

<img
  src={useBaseUrl('/img/editbar-complex-controls/position.png')}
  alt="Position control" width='300'
/>

:::info
Das Steuerelement **Position** ist nur für das Element `shape` in den Modi *org* oder *mindmap* des Diagram-Editors verfügbar.
:::

## Verwendung {#usage}

~~~jsx
{
    type: "position",

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

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"position"`
- `hidden` - (optional) legt fest, ob das Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob das Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite des Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe des Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand für den Inhalt innerhalb der Steuerelementgruppe fest. Standardmäßig *"0 16px"*
- `label` - (optional) gibt eine Beschriftung für das Steuerelement an
- `labelAlignment` - (optional) legt die Position der Beschriftung fest. Standardmäßig `"left"`
- `align` - (optional) legt die Ausrichtung der Steuerelemente innerhalb der Steuerelementgruppe fest. Standardmäßig `"start"`
- `compact` - (optional) legt den kompakten Modus fest, entfernt Abstände und Rahmen. Standardmäßig *false*

### Service-Eigenschaften {#service-properties}

- `$properties` - (optional) ermöglicht das Überschreiben von Werten der [Basissteuerelemente](api/diagram_editor/editbar/basic_controls_overview.md)) innerhalb eines komplexen Steuerelements. Sie können die folgenden Elemente des Steuerelements **Position** basierend auf den Basissteuerelementen konfigurieren:
    - `dx` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt den Versatz der Form vom vordefinierten Algorithmus auf der X-Achse fest
    - `dy` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) legt den Versatz der Form vom vordefinierten Algorithmus auf der Y-Achse fest

## Beispiel {#example}

~~~jsx {6-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "position",
                        $properties: {
                            dx: { disabled: true }
                        }
                    }
                ]
            }
        }
    }
});
~~~
