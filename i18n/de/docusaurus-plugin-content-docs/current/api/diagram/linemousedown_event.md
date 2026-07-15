---
sidebar_label: lineMouseDown-Event
title: lineMouseDown-Event
description: Erfahren Sie mehr über das lineMouseDown-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwickler-Guides und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# lineMouseDown

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Taste eines Zeigegeräts gedrückt wird, während sich der Zeiger über einer Verbindungslinie befindet

### Verwendung {#usage}

~~~jsx
lineMouseDown: (
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
diagram.events.on("lineMouseDown", (id, event) => {
    console.log(id, event);
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
