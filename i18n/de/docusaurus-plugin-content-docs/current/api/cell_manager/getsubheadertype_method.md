---
sidebar_label: getSubHeaderType()
title: getSubHeaderType-Methode von Cell Manager
description: Erfahren Sie mehr über die getSubHeaderType-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getSubHeaderType()

### Beschreibung {#description}

@short: Gibt den Typ des Subheaders des Swimlanes anhand seiner ID zurück

### Verwendung {#usage}

~~~jsx
getSubHeaderType(subheaderId: string): "row" | "col" | undefined;
~~~

### Parameter {#parameters}

- `subheaderId` - (erforderlich) die ID des Subheaders des Swimlanes

### Rückgabewert {#returns}

Die Methode gibt den Typ des Subheaders des Swimlanes zurück: `"row"` | `"col"` | undefined

### Beispiel {#example}

~~~jsx
// initialization of the diagram
const diagram = new dhx.Diagram("diagram_container", {
    // config options
});
diagram.data.parse(data);

// sets active swimlane
diagram.cellManager.setSwimlane("main"); 

// gets the type of direction
diagram.cellManager.getSubHeaderType("sub01"); // -> "row"
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
