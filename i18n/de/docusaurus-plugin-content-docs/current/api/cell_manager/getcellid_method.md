---
sidebar_label: getCellId()
title: getCellId-Methode von Cell Manager
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die getCellId-Methode von Cell Manager. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getCellId()

### Beschreibung {#description}

@short: Gibt die ID der Zelle der Swimlane anhand des Index zurück

### Verwendung {#usage}

~~~jsx
getCellId(
    cellIndex: number, 
    type: string // "row" | "col"
): string | number | undefined;
~~~

### Parameter {#parameters}

- `cellIndex` - (erforderlich) der Startindex einer Zelle in einem Layout. Die Zählung des Index beginnt bei 0
- `type` - (erforderlich) der Richtungstyp zum Zählen des Index: `"row"` | `"col"`

### Rückgabewert {#returns}

Die Methode gibt die ID der Zelle zurück

### Beispiel {#example}

~~~jsx
// Initialisierung des Diagramms
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationsoptionen
});
diagram.data.parse(data);

// legt die aktive Swimlane fest
diagram.cellManager.setSwimlane("main"); 

// ruft die ID der Zelle ab
diagram.cellManager.getCellId(0, "row"); // -> "r01"
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
