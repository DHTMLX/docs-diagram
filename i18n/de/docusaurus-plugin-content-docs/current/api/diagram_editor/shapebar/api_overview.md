---
sidebar_label: Shapebar-API-Übersicht
title: Shapebar-API-Übersicht
description: Sie können sich einen Überblick über Shapebar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek verschaffen. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# Shapebar-API-Übersicht {#shapebar-api-overview}

[Shapebar](guides/diagram_editor/shapebar.md) ist ein Teil des Diagram Editor, der Vorschauen von Diagram-Elementen (Shapes, Groups und Swimlanes) rendert. Verwenden Sie die Eigenschaft `shapebar` des Konfigurationsobjekts [`view`](api/diagram_editor/editor/config/view_property.md), um die Shapebar anzuzeigen, auszublenden und zu konfigurieren. Es gibt zwei Initialisierungsmöglichkeiten zur Auswahl:

- Erstellen der Standard-Shapebar mithilfe der Einstellung `shapebar:true`:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true // Anzeige der Standard-Shapebar
    }
});
~~~

- Konfigurieren der Shapebar durch Angabe als Objekt mit [einer Reihe von Eigenschaften](/category/shapebar-properties/):

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // Konfigurieren der Shapebar über ein Objekt
        shapebar: {
            css: "custom_css",
            show: true,
            width: 300,
            preview: {
               scale: 0.65,
               gap: 8
            },
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

Sehen Sie sich den [zugehörigen API-Abschnitt](/category/shapebar-properties/) an, um die verfügbaren Eigenschaften der Shapebar zu erkunden.
