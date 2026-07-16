---
sidebar_label: validation()
title: validation-Methode von Cell Manager
description: Erfahren Sie mehr über die validation-Methode von Cell Manager in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# validation()

### Beschreibung {#description}

@short: Validiert Zellen des Swimlanes nach Richtung und Aktionstyp

### Verwendung {#usage}

~~~jsx
validation(
    cellIndex: number, 
    dir: string, // "up" | "down" | "left" | "right"
    action: string // "move" | "remove" | "add"
): boolean;
~~~

### Parameter {#parameters}

- `cellIndex` - (erforderlich) der Startindex einer Zelle in einem Layout. Die Zählung des Index beginnt bei 0
- `dir` - (erforderlich) die Richtung der Aktion: `"up"` | `"down"` | `"left"` | `"right"`
- `action` - (erforderlich) der Typ der Aktion: `"move"` | `"remove"` | `"add"`

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn die Zelle validiert wurde, andernfalls `false`

### Beispiel {#example}

~~~jsx
// Initialisierung des Diagramms
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationsoptionen
});
diagram.data.parse(data);

// setzt das aktive Swimlane
diagram.cellManager.setSwimlane("main");

// prüft, ob die Zelle mit Index 0 nach unten verschoben werden kann
diagram.cellManager.validation(0, "down", "move"); // -> true
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Swimlanes konfigurieren](/swimlanes/)
