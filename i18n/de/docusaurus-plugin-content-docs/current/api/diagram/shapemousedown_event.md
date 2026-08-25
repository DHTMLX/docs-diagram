---
sidebar_label: shapeMouseDown
title: shapeMouseDown-Event
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das shapeMouseDown-Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# shapeMouseDown

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Taste eines Zeigegeräts gedrückt wird, während sich der Zeiger über einer Form befindet

### Verwendung {#usage}

~~~jsx
shapeMouseDown: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält die folgenden Parameter:

- `id` - (erforderlich) die ID einer Form
- `event` - (erforderlich) ein natives HTML-Event-Objekt

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Einen Handler für das Event hinzufügen
diagram.events.on("shapeMouseDown", (id) => {
    console.log('An item "' + diagram.data.getItem(id).text + '"will be clicked');
});
~~~

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
