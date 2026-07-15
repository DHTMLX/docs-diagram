---
sidebar_label: Event-Handling
title: Event-Handling
description: Sie können mehr über das Event-Handling in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Event-Handling

## Event-Listener anhängen {#attaching-event-listeners}

Sie können jedem verfügbaren Event einen beliebigen benutzerdefinierten Handler hinzufügen. Verwenden Sie dazu die Methode `diagram.events.on()` mit den folgenden Parametern:

- `name` - (*string*) der Name des Events
- `handler` - (*function*) die Handler-Funktion

~~~jsx
diagram.events.on("ShapeClick", (id) => {
    alert("You've just clicked an item with id="+id);
});
~~~

Sie können mehrere Handler an dasselbe Event anhängen, und alle werden ausgeführt. Wenn einige der Handler *false* zurückgeben, werden die zugehörigen Operationen blockiert. Event-Handler werden in der Reihenfolge verarbeitet, in der sie angehängt wurden.

## Event-Listener trennen {#detaching-event-listeners}

Um Events zu trennen, verwenden Sie die Methode `diagram.events.detach()`:

~~~jsx
diagram.events.on("CustomEvent", args);

diagram.events.detach("CustomEvent");
~~~

## Events aufrufen {#calling-events}

Um Events aufzurufen, verwenden Sie die Methode `diagram.events.fire()`.

~~~jsx
diagram.events.fire("CustomEvent", args);
// wobei args ein Array von Argumenten ist
~~~

Normalerweise werden Events automatisch aufgerufen, und Sie müssen diese Methode nicht verwenden.

## Liste der unterstützten Events {#list-of-supported-events}

### Diagram-Events

Sehen Sie sich die vollständige Liste der Diagram-API-Events in der [API-Referenz](api/diagram/api_overview.md#diagram-events) an.

### Editor-Events

Die Liste der Diagram-Editor-API-Events finden Sie im [API-Abschnitt](api/diagram_editor/editor/events/overview.md).

:::note
Zusätzlich zu den Events des Diagram-Editors können Sie auch [Events des Diagram-Objekts](api/diagram/api_overview.md#diagram-events) verwenden, während Sie in der Editor-Ansicht arbeiten. Zum Beispiel:
:::

~~~jsx {6-8}
const editor = new dhx.DiagramEditor("editor_container", {
    controls: { autoLayout: false }
});
editor.parse(data);

editor.diagram.events.on("ShapeClick", (id) => {
    alert("You've just clicked an item with id=" + id);
});
~~~

Diese Methode können Sie auch verwenden, wenn Sie die unten aufgeführten Events anwenden möchten.

### CellManager-Events

Sehen Sie sich die vollständige Liste der CellManager-API-Events in der [API-Referenz](/api/cell_manager/#events) an.

### DataCollection-Events

Sehen Sie sich die vollständige Liste der DataCollection-API-Events in der [API-Referenz](/api/data_collection/#events) an.

### InlineEditor-Events

Sehen Sie sich die vollständige Liste der InlineEditor-API-Events in der [API-Referenz](/api/inline_editor/#events) an.

### Selection-Events

Sehen Sie sich die vollständige Liste der Selection-API-Events in der [API-Referenz](/api/selection/#events) an.
