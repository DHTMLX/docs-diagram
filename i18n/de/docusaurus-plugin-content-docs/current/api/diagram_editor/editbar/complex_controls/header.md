---
sidebar_label: Header
title: Komplexe Editbar-Steuerelemente - Header
description: Das Header-Steuerelement der Editbar können Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Header

@short: Das komplexe Steuerelement zum Anzeigen und Ändern der Kopfzeile von `"group"`- und `"swimlane"`-Elementen des Diagram-Editors

<img
  src={useBaseUrl('/img/editbar-complex-controls/header.png')}
  alt="Header control" width='300'
/>

:::info
Das **Header**-Steuerelement ist nur für die Elemente `group` und `swimlane` im *default*-Modus des Diagram-Editors verfügbar.
:::

## Verwendung {#usage}

~~~jsx
{
    type: "header",

    hidden?: boolean, // Standardmäßig false
    disabled?: boolean, // Standardmäßig false

    css?: string,
    width?: string | number | "content", // Standardmäßig "content"
    height?: string | number | "content", // Standardmäßig "content"
    padding?: string | number, // Standardmäßig "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // Standardmäßig "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // Standardmäßig "start"
    compact?: boolean // Standardmäßig false
}
~~~

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"header"`
- `hidden` - (optional) legt fest, ob das Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob das Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite des Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe des Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand für den Inhalt innerhalb der Steuerelementgruppe fest. Standardmäßig *"0 16px"*
- `label` - (optional) legt eine Beschriftung für das Steuerelement fest
- `labelAlignment` - (optional) legt die Position der Beschriftung fest. Standardmäßig `"left"`
- `align` - (optional) legt die Ausrichtung der Steuerelemente innerhalb der Steuerelementgruppe fest. Standardmäßig `"start"`
- `compact` - (optional) legt den kompakten Modus fest, entfernt Abstände und Rahmen. Standardmäßig *false*

## Beispiel {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "header",
                        label: "Group header style"
                    }
                ]
            }
        }
    }
});
~~~
