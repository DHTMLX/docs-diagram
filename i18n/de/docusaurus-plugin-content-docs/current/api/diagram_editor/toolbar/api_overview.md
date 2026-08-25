---
sidebar_label: Toolbar-API-Übersicht
title: Toolbar-API-Übersicht
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek finden Sie eine Toolbar-Übersicht. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Toolbar-API-Übersicht {#toolbar-api-overview}

[Toolbar](guides/diagram_editor/toolbar.md) ist Teil des Diagram Editor und hilft Nutzern, den Bearbeitungsprozess zu steuern. Verwenden Sie die Eigenschaft `toolbar` des Konfigurationsobjekts [`view`](api/diagram_editor/editor/config/view_property.md), um die Toolbar anzuzeigen, auszublenden und zu konfigurieren. Es gibt zwei Initialisierungsmöglichkeiten, aus denen Sie wählen können:

- Erstellen der Standard-Toolbar mit der Einstellung `toolbar:true`:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true // Anzeigen der Standard-Toolbar
    }
});
~~~

- Konfigurieren der Toolbar durch Angabe als Objekt mit [einer Reihe von Eigenschaften](/category/toolbar-properties/):

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // Konfigurieren der Toolbar über ein Objekt
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

Sehen Sie sich die zugehörigen API-Abschnitte an, um die verfügbaren Methoden, Eigenschaften und Events der Toolbar kennenzulernen.

## Toolbar-Methoden {#toolbar-methods}

- [Liste der Toolbar-Methoden](api/diagram_editor/toolbar/methods/overview.md)

## Toolbar-Eigenschaften {#toolbar-properties}

- [Liste der Toolbar-Eigenschaften](/category/toolbar-properties/)

## Toolbar-Events {#toolbar-events}

- [Liste der Toolbar-Events](api/diagram_editor/toolbar/events/overview.md)
