---
sidebar_label: beforeItemResize-Event
title: beforeItemResize-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeItemResize-Event des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeItemResize

### Beschreibung {#description}

@short: Wird ausgelöst, bevor die Größe eines Elements geändert wird

### Verwendung {#usage}

~~~jsx
"beforeItemResize": ({
    id: string | number,
    width: number,
    height: number,
    x: number,
    y: number,
    dir: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "ne"
}) => boolean | void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

- `id` - die ID des Elements, dessen Größe geändert wird
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

### Rückgabewert {#returns}

Die Callback-Funktion gibt `false` zurück, um zu verhindern, dass die Größe des Elements geändert wird; andernfalls `true`.

### Beispiel {#example}

~~~jsx
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("beforeItemResize", ({ id, width, height }) => {
    if (width < 50 || height < 50) {
        console.log(`Preventing resize of item ${id} because it's too small.`);
        return false; // Größenänderung verhindern
    }
    console.log(`Resizing the item ${id} to the width: ${width}, height: ${height}`);
});
~~~

**Changelog**:

- Das Event wurde in v6.1 hinzugefügt

**Verwandte API**:

- [`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md)
- [`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verschieben, Drehen und Größenändern von Formen per Events verwalten](https://snippet.dhtmlx.com/qldjbbm7)