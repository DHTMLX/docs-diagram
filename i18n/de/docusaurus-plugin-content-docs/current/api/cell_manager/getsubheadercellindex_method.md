---
sidebar_label: getSubHeaderCellIndex()
title: getSubHeaderCellIndex-Methode von Cell Manager
description: Erfahren Sie mehr über die getSubHeaderCellIndex-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getSubHeaderCellIndex()

### Beschreibung {#description}

@short: Gibt den Index der Zelle des Swimlanes anhand der Subheader-ID zurück

### Verwendung {#usage}

~~~jsx
getSubHeaderCellIndex(subheaderId: string): number;
~~~

### Parameter {#parameters}

- `subheaderId` - (erforderlich) die ID des Subheaders eines Swimlanes

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
diagram.cellManager.getSubHeaderCellIndex("sub01"); // -> 0
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
