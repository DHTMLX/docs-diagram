---
sidebar_label: move()
title: move-Methode von Cell Manager
description: Erfahren Sie mehr über die move-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# move()

:::info
Die Methode `move()` wird automatisch vom System validiert. Die Zelle wird nicht verschoben, wenn dies gemäß der Struktur des Swimlanes nicht möglich ist.
:::

### Beschreibung {#description}

@short: Verschiebt Zellen des Swimlanes als Zeilen oder Spalten

### Verwendung {#usage}

~~~jsx
move(
    cellIndex: number, 
    dir: string // "up" | "down" | "left" | "right"
): void;
~~~

### Parameter {#parameters}

- `cellIndex` - (erforderlich) der Startindex einer Zelle in einem Layout. Die Zählung des Index beginnt bei 0
- `dir` - (erforderlich) die Richtung der Aktion: `"up"` | `"down"` | `"left"` | `"right"`

### Beispiel {#example}

~~~jsx
// Initialisierung des Diagramms
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationsoptionen
});
diagram.data.parse(data);

diagram.cellManager.setSwimlane("main"); // setzt das aktive Swimlane

diagram.cellManager.move(0, "down"); // verschiebt Zellen als Zeilen
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
