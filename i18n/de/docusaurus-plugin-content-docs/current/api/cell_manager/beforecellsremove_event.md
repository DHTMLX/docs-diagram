---
sidebar_label: beforeCellsRemove
title: beforeCellsRemove-Event von Cell Manager
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeCellsRemove-Event von Cell Manager. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeCellsRemove

### Beschreibung {#description}

@short: Wird ausgelöst, bevor Zellen der Swimlane entfernt werden

### Verwendung {#usage}

~~~jsx
beforeCellsRemove: (swimlaneId: string | number) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet den folgenden Parameter:

- `swimlaneId` - (erforderlich) die ID des Elements

### Rückgabewert {#returns}

Geben Sie `false` zurück, um das Entfernen der Zellen zu verhindern, andernfalls `true`

### Beispiel {#example}

~~~jsx {9-12}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// einen Handler an das Event anhängen
diagram.events.on("beforeCellsRemove", (swimlaneId) => {
    console.log(swimlaneId);
    return true;
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
