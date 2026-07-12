---
sidebar_label: afterAdd-Event
title: afterAdd-Event von Data Collection
description: In der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram erfahren Sie mehr über das afterAdd-Event von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterAdd

### Beschreibung {#description}

@short: Wird nach dem Hinzufügen eines Elements ausgelöst

### Verwendung {#usage}

~~~jsx
afterAdd: (newItem: object) => void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält den folgenden Parameter:

- `newItem` - (erforderlich) das Objekt eines hinzugefügten Elements

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler an das Event anhängen
diagram.events.on("afterAdd", (newItem) => {
    console.log("A new item is added");
});
~~~

Das Event kann verwendet werden, um Standardwerte oder eine Standardformatierung für die Daten des Elements bereitzustellen
