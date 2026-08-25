---
sidebar_label: scroll-Event
title: scroll-Event
description: Erfahren Sie mehr über das scroll-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# scroll

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Diagramm gescrollt wird

### Verwendung {#usage}

~~~jsx
scroll: (position: object) => void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet den folgenden Parameter:

- `position` - (erforderlich) die Position des Scrollens. Das Objekt enthält die x- und y-Koordinaten der aktuellen Scroll-Position, z. B.: `{x: 67, y: 130}`

### Beispiel {#example}

~~~jsx {10-12}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    scroll: true
});
// Daten laden
diagram.data.parse(data);

// Einen Handler an das Event anhängen
diagram.events.on("scroll", () => {
    console.log("The diagram has been scrolled")
});
~~~

**Verwandte Artikel**:

- [Diagram scrollen](guides/diagram/scrolling_diagram.md)
- [Event-Handling](guides/event_handling.md)
