---
sidebar_label: itemRotateEnd-Event
title: itemRotateEnd-Event des Editors
description: Erfahren Sie mehr über das itemRotateEnd-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# itemRotateEnd

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem der Drehvorgang eines Elements abgeschlossen wurde (wenn der Benutzer die Maustaste loslässt)

### Verwendung {#usage}

~~~jsx
"itemRotateEnd": ({
    id: string | number,
    angle: number
}) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

- `id` - die ID des gedrehten Elements
- `angle` - der endgültige Drehwinkel des Elements in Grad

### Beispiel {#example}

~~~jsx
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("itemRotateEnd", ({ id, angle }) => {
    console.log(`The item ${id} finished rotating, the final angle: ${angle}`);
    // Hier können Sie den neuen Drehwinkel des Elements auf dem Server speichern
});
~~~

**Changelog**:

- Das Event wurde in v6.1 hinzugefügt

**Verwandte API**:

- [`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md)
- [`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verwalten des Verschiebens, Drehens und der Größenänderung von Formen über Events](https://snippet.dhtmlx.com/qldjbbm7)