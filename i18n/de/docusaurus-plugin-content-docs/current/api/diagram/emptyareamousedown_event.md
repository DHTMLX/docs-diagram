---
sidebar_label: emptyAreaMouseDown-Event
title: emptyAreaMouseDown-Event
description: Erfahren Sie mehr über das emptyAreaMouseDown-Event in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# emptyAreaMouseDown

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Taste eines Zeigegeräts gedrückt wird, während sich der Zeiger über einer leeren Fläche im aktuellen Diagram-Bereich befindet

### Verwendung {#usage}

~~~jsx
emptyAreaMouseDown: (event: MouseEvent) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert den folgenden Parameter:

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
diagram.events.on("emptyAreaMouseDown", (e) => {
    console.log("emptyAreaMouseDown");
});
~~~

**Changelog:** Hinzugefügt in v4.1

**Verwandter Artikel:** [Event-Handling](guides/event_handling.md)
