---
sidebar_label: afterItemResize-Event
title: afterItemResize-Event des Editors
description: Erfahren Sie mehr über das afterItemResize-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterItemResize

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Größe eines Elements geändert wurde

### Verwendung {#usage}

~~~jsx
"afterItemResize": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

- `id` - die ID des Elements, dessen Größe geändert wurde
- `width` - die neue Breite des Elements
- `height` - die neue Höhe des Elements
- `x` - die neue X-Koordinate des Elements
- `y` - die neue Y-Koordinate des Elements
- `dir` - die Richtung des Größenänderungsvorgangs:
	- `"n"` - Norden
    - `"ne"` - Nordosten
    - `"e"` - Osten
    - `"se"` - Südosten
    - `"s"` - Süden
    - `"sw"` - Südwesten
    - `"w"` - Westen
    - `"nw"` - Nordwesten

### Beispiel {#example}

~~~jsx
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("afterItemResize", ({ id, width, height }) => {
    console.log(`
        The item ${id} has been resized:
            width: ${width}
            height: ${height}
    `);
});
~~~

**Changelog**:

- Das Event wurde in v6.1 hinzugefügt

**Verwandte API**:

- [`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md)
- [`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verwalten des Verschiebens, Drehens und der Größenänderung von Shapes über Events](https://snippet.dhtmlx.com/qldjbbm7)