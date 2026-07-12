---
sidebar_label: lineTitleClick
title: lineTitleClick-Event
description: Erfahren Sie mehr über das Event lineTitleClick in der Dokumentation der JavaScript-Diagram-Bibliothek von DHTMLX. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# lineTitleClick

### Beschreibung {#description}

@short: Wird ausgelöst, wenn auf ein Textelement einer Linie geklickt wird

### Verwendung {#usage}

~~~jsx
lineTitleClick: (
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

### Verwendung {#usage-1}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler an das Event anhängen
diagram.events.on("lineTitleClick", (lineId, titleId, event) => {
    console.log("lineTitleClick");
});
~~~

**Changelog**: Hinzugefügt in v4.1

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
