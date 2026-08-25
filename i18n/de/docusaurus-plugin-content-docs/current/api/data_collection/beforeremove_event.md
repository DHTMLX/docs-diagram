---
sidebar_label: beforeRemove-Event
title: beforeRemove-Event von Data Collection
description: In der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram erfahren Sie mehr über das beforeRemove-Event von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeRemove

### Beschreibung {#description}

@short: Wird nach dem Entfernen eines Elements aus einer Data Collection ausgelöst

### Verwendung {#usage}

~~~jsx
beforeRemove: (removedItem: any) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält den folgenden Parameter:

- `removedItem` - (erforderlich)  das Objekt eines zu entfernenden Elements

### Rückgabewert {#returns}

Geben Sie `false` zurück, um das Entfernen eines Elements aus einer Data Collection zu blockieren; andernfalls `true`.

### Beispiel {#example}

~~~jsx {9-12}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler an das Event anhängen
diagram.events.on("beforeRemove", (newItem) => {
    console.log("beforeRemove "+ item);
    return true;
});
~~~
