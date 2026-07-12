---
sidebar_label: shapeDblClick
title: shapeDblClick-Event
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das shapeDblClick-Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# shapeDblClick

### Beschreibung {#description}

@short: Wird beim Doppelklicken auf eine Form ausgelöst

### Verwendung {#usage}

~~~jsx
shapeDblClick: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält die folgenden Parameter:

- `id` - (erforderlich) die ID der Form
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
diagram.events.on("shapeDblClick", (id) => {
    console.log('An item "' + diagram.data.getItem(id).text + '"double-clicked');
});
~~~

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
