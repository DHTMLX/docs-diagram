---
sidebar_label: beforeAdd-Event
title: beforeAdd-Event von Data Collection
description: In der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram erfahren Sie mehr über das beforeAdd-Event von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeAdd

### Beschreibung {#description}

@short: Wird vor dem Hinzufügen eines Elements ausgelöst

### Verwendung {#usage}

~~~jsx
beforeAdd: (newItem: object) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events erhält den folgenden Parameter:

- `newItem` - (erforderlich) das Objekt eines hinzugefügten Elements

### Rückgabewert {#returns}

Geben Sie `false` zurück, um zu verhindern, dass ein Element zu einer Data Collection hinzugefügt wird; andernfalls `true`

### Beispiel {#example}

~~~jsx {9-13}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Handler an das Event anhängen
diagram.events.on("beforeAdd", (newItem) => {
    if (some_check)
        return false;
    return true;
});
~~~
