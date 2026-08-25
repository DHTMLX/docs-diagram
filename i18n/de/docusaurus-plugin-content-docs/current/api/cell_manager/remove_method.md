---
sidebar_label: remove()
title: remove-Methode von Cell Manager
description: Erfahren Sie mehr über die remove-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# remove()

:::info
Die Methode `remove()` wird automatisch vom System validiert. Die Zelle wird nicht entfernt, wenn dies gemäß der Struktur des Swimlanes nicht möglich ist.
:::

### Beschreibung {#description}

@short: Entfernt Zellen des Swimlanes als Zeilen oder Spalten

### Verwendung {#usage}

~~~jsx
remove(
    cellIndex: number, 
    type: string // "row" | "col"
): void;
~~~

### Parameter {#parameters}

- `cellIndex` - (erforderlich) der Startindex einer Zelle in einem Layout. Die Zählung des Index beginnt bei 0
- `type` - (erforderlich) der Richtungstyp zum Zählen des Index

### Beispiel {#example}

~~~jsx
// Initialisierung des Diagramms
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationsoptionen
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // setzt das aktive Swimlane

diagram.cellManager.remove(0, "row"); // entfernt Zellen als Zeilen
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
