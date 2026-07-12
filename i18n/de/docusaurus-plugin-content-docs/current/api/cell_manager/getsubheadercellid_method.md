---
sidebar_label: getSubHeaderCellId()
title: getSubHeaderCellId-Methode von Cell Manager
description: Erfahren Sie mehr über die getSubHeaderCellId-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getSubHeaderCellId()

### Beschreibung {#description}

@short: Gibt die ID der Zelle des Swimlanes anhand der Subheader-ID zurück

### Verwendung {#usage}

~~~jsx
getSubHeaderCellId(subheaderId: string): string | number;
~~~

### Parameter {#parameters}

- `subheaderId` - (erforderlich) die ID des Subheaders eines Swimlanes

### Rückgabewert {#returns}

Die Methode gibt die ID der Zelle zurück

### Beispiel {#example}

~~~jsx
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main"); 

// gets the id of the cell
diagram.cellManager.getSubHeaderCellId("sub01"); // -> "r01"
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
