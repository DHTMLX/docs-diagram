---
sidebar_label: Spacer
title: Editbar Basissteuerelemente - Spacer
description: Entdecken Sie das Spacer-Steuerelement der Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Spacer

@short: Das Basissteuerelement zum Anordnen und Ausrichten von Steuerelementen auf der Editbar, indem es Platz einnimmt.

## Verwendung {#usage}

~~~jsx
{
    type: "spacer"
}
~~~

## Beschreibung {#description}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"spacer"`

## Beispiel {#example}

~~~jsx {10,12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            show: true,
            properties: {
                $shape: [
                    { type: "input", key: "name", label: "Task name" },
                    { type: "input", key: "id", label: "ID", readOnly: true },
                    { type: "spacer" },
                    { type: "button", text: "Send", full: true },
                    { type: "spacer" }
                ]
            }
        }
    }
});
~~~
