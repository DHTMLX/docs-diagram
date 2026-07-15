---
sidebar_label: afterItemRotate-Event
title: afterItemRotate-Event des Editors
description: Erfahren Sie mehr über das afterItemRotate-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterItemRotate

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem ein Element gedreht wurde

### Verwendung {#usage}

~~~jsx
"afterItemRotate": ({
    id: string | number,
    angle: number
}) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

- `id` - die ID des gedrehten Elements
- `angle` - der neue Drehwinkel des Elements in Grad

### Beispiel {#example}

~~~jsx
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("afterItemRotate", ({ id, angle }) => {
    console.log(`The item ${id} has been rotated by the angle: ${angle}`);
});
~~~

**Changelog**:

- Das Event wurde in v6.1 hinzugefügt

**Verwandte API**:

- [`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md)
- [`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verwalten des Verschiebens, Drehens und der Größenänderung von Shapes über Events](https://snippet.dhtmlx.com/qldjbbm7)