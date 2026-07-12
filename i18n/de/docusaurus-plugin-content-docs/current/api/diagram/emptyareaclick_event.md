---
sidebar_label: emptyAreaClick-Event
title: emptyAreaClick-Event
description: Erfahren Sie mehr über das emptyAreaClick-Event in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# emptyAreaClick

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine leere Fläche im aktuellen Diagram-Bereich angeklickt wird

### Verwendung {#usage}

~~~jsx
emptyAreaClick: (event: MouseEvent) => void;
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
diagram.events.on("emptyAreaClick", () => {
    console.log("An empty space has been clicked");
});
~~~

**Verwandter Artikel:** [Event-Handling](guides/event_handling.md)
