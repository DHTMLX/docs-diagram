---
sidebar_label: load-Event
title: load-Event von Data Collection
description: Erfahren Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek mehr über das load-Event von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# load

### Beschreibung {#description}

@short: Wird ausgelöst, wenn Daten in das Diagramm geladen werden

### Verwendung {#usage}

~~~jsx
load: () => void;
~~~

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler an das Event anhängen
diagram.events.on("load", () => {
    // etwas Logik hier
});
~~~
