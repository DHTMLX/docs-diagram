---
sidebar_label: Editbar-API-Übersicht
title: Editbar-API-Übersicht
description: Eine Editbar-Übersicht finden Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Editbar-API-Übersicht {#editbar-api-overview}

[Editbar](guides/diagram_editor/editbar.md) ist ein Teil des Diagram Editors, der Steuerelemente für die Verwaltung von Diagram-Elementen (Formen, Linien, Gruppen usw.) enthält. Verwenden Sie die Eigenschaft `editbar` des Konfigurationsobjekts [`view`](api/diagram_editor/editor/config/view_property.md), um die Editbar anzuzeigen, auszublenden und zu konfigurieren. Es gibt zwei Möglichkeiten der Initialisierung, aus denen Sie wählen können:

- Erstellen der Standard-Editbar mit der Einstellung `editbar:true`:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: true // Anzeigen der Standard-Editbar
    }
});
~~~

- Konfigurieren der Editbar, indem sie als Objekt mit [einer Reihe von Eigenschaften](/category/editbar-properties/) angegeben wird:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // Konfigurieren der Editbar über ein Objekt
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

Sehen Sie sich den [entsprechenden API-Abschnitt](/category/editbar-properties/) an, um die verfügbaren Eigenschaften der Editbar zu erkunden.
