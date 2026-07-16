---
sidebar_label: afterRemove-Event
title: afterRemove-Event von Data Collection
description: In der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram erfahren Sie mehr über das afterRemove-Event von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterRemove

### Beschreibung {#description}

@short: Wird nach dem Entfernen eines Elements aus einer Data Collection ausgelöst

### Verwendung {#usage}

~~~jsx
afterRemove: (removedItem: object) => void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält den folgenden Parameter:

- `removedItem` - (erforderlich) das Objekt eines entfernten Elements

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler an das Event anhängen
diagram.events.on("afterRemove", (newItem) => {
    console.log("afterRemove "+ item);
});
~~~
