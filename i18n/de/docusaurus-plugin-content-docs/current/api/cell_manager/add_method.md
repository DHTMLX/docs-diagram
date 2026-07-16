---
sidebar_label: add()
title: add-Methode von Cell Manager
description: Erfahren Sie mehr über die add-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# add()

:::info
Die Methode `add()` wird automatisch vom System validiert. Die Zelle wird nicht hinzugefügt, wenn dies gemäß der Struktur der Swimlane nicht möglich ist.
:::

### Beschreibung {#description}

@short: Fügt einer Swimlane Zellen als Zeilen oder Spalten hinzu

### Verwendung {#usage}

~~~jsx
add(
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

diagram.cellManager.setSwimlane("main"); // legt die aktive Swimlane fest

diagram.cellManager.add(0, "down"); // fügt Zellen als Zeilen hinzu
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
