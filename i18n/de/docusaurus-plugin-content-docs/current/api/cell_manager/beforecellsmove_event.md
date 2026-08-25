---
sidebar_label: beforeCellsMove
title: beforeCellsMove-Event von Cell Manager
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeCellsMove-Event von Cell Manager. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeCellsMove

### Beschreibung {#description}

@short: Wird ausgelöst, bevor Zellen der Swimlane verschoben werden

### Verwendung {#usage}

~~~jsx
beforeCellsMove: (swimlaneId: string | number) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet den folgenden Parameter:

- `swimlaneId` - (erforderlich) die ID des Elements

### Rückgabewert {#returns}

Geben Sie `false` zurück, um das Verschieben der Zellen zu verhindern, andernfalls `true`

### Beispiel {#example}

~~~jsx {9-12}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// einen Handler an das Event anhängen
diagram.events.on("beforeCellsMove", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
