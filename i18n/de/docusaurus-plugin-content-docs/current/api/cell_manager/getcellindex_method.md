---
sidebar_label: getCellIndex()
title: getCellIndex-Methode von Cell Manager
description: Erfahren Sie mehr über die getCellIndex-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getCellIndex()

### Beschreibung {#description}

@short: Gibt den Index der Zelle des Swimlanes anhand der ID zurück

### Verwendung {#usage}

~~~jsx
getCellIndex(
    cellId: string | number, 
    type: string // "row" | "col"
): number | undefined;
~~~

### Parameter {#parameters}

- `cellId` - (erforderlich) die ID einer Zelle
- `type` - (erforderlich) der Richtungstyp zum Zählen des Index: `"row"` | `"col"`

### Rückgabewert {#returns}

Die Methode gibt den Index der Zelle zurück. Die Zählung des Index beginnt bei 0

### Beispiel {#example}

~~~jsx
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main"); 

// gets the index of the cell
diagram.cellManager.getCellIndex("r01", "row"); // -> 0
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
