---
sidebar_label: lineTitleMouseDown
title: lineTitleMouseDown-Event
description: Erfahren Sie mehr über das Event lineTitleMouseDown in der Dokumentation der JavaScript-Diagram-Bibliothek von DHTMLX. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# lineTitleMouseDown

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Taste eines Zeigegeräts gedrückt wird, während sich der Zeiger über einem Textelement einer Linie befindet

### Verwendung {#usage}

~~~jsx
lineTitleMouseDown: (
    lineId: string | number,
    titleId: string | number,
    event: MouseEvent
) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events akzeptiert folgende Parameter:

- `lineId` - (erforderlich) die ID einer Linie
- `titleId` - (erforderlich) die ID eines Textelements einer Linie
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
diagram.events.on("lineTitleMouseDown", (lineId, titleId, event) => {
    console.log("lineTitleMouseDown");
});
~~~

**Changelog**: Hinzugefügt in v4.1

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
