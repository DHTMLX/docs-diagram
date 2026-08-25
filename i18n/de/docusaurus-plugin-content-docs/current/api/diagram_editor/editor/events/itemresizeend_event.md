---
sidebar_label: itemResizeEnd-Event
title: itemResizeEnd-Event des Editors
description: Erfahren Sie mehr über das itemResizeEnd-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# itemResizeEnd

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem der Größenänderungsvorgang eines Elements abgeschlossen wurde (wenn der Benutzer die Maustaste loslässt)

### Verwendung {#usage}

~~~jsx
"itemResizeEnd": ({
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

- `id` - die ID des in der Größe geänderten Elements
- `width` - die endgültige Breite des Elements
- `height` - die endgültige Höhe des Elements
- `x` - die endgültige X-Koordinate des Elements
- `y` - die endgültige Y-Koordinate des Elements
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
editor.events.on("itemResizeEnd", ({ id, width, height }) => {
    console.log(`
        The item ${id} finished resizing:
            the final width: ${width}
            the final height: ${height}
    `);
    // Hier können Sie die neuen Abmessungen des Elements auf dem Server speichern
});
~~~

**Changelog**:

- Das Event wurde in v6.1 hinzugefügt

**Verwandte API**:

- [`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md)
- [`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verwalten des Verschiebens, Drehens und der Größenänderung von Formen über Events](https://snippet.dhtmlx.com/qldjbbm7)