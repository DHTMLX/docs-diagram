---
sidebar_label: Grid step
title: Komplexe Editbar-Steuerelemente - Grid step
description: Das Grid step-Steuerelement der Editbar können Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Grid step

@short: Das komplexe Steuerelement zum Anzeigen und Ändern der Rasterschrittweite des Diagram-Editors

<img
  src={useBaseUrl('/img/editbar-complex-controls/gridstep.png')}
  alt="Gridstep control" width='300'
/>

## Verwendung {#usage}

~~~jsx
{
    type: "gridStep",

    hidden?: boolean, // Standardmäßig false
    disabled?: boolean, // Standardmäßig false

    css?: string,
    width?: string | number | "content", // Standardmäßig "content"
    height?: string | number | "content", // Standardmäßig "content"
    padding?: string | number, // Standardmäßig "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // Standardmäßig "left"
    readOnly?: boolean, // Standardmäßig false
    wrap?: boolean // Standardmäßig true
}
~~~

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"gridStep"`
- `hidden` - (optional) legt fest, ob das Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob das Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite des Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe des Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand für den Inhalt innerhalb der Steuerelementgruppe fest. Standardmäßig *"0 16px"*
- `label` - (optional) legt eine Beschriftung für das Steuerelement fest
- `labelAlignment` - (optional) legt die Position der Beschriftung fest. Standardmäßig `"left"`
- `readOnly` - (optional) legt den Nur-Lese-Modus für das Steuerelement fest. Standardmäßig *false*
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umrandung. Standardmäßig *true*

## Beispiel {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $default: [
                    {
                        type: "gridStep",
                        readOnly: true
                    }
                ]
            }
        }
    }
});
~~~
