---
sidebar_label: lineDblClick-Event
title: lineDblClick-Event
description: Erfahren Sie mehr über das lineDblClick-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwickler-Guides und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# lineDblClick

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Linie doppelt angeklickt wird

### Verwendung {#usage}

~~~jsx
lineDblClick: (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert die folgenden Parameter:

- `id` - (erforderlich) die ID einer Verbindungslinie
- `event` - (erforderlich) ein natives HTML-Event-Objekt

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler an das Event anhängen
diagram.events.on("lineDblClick", (id, event) => {
    console.log(id, event);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
