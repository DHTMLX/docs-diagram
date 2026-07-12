---
sidebar_label: beforeItemRotate-Event
title: beforeItemRotate-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeItemRotate-Event des Editors. Durchsuchen Sie Entwickler-Leitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeItemRotate

### Beschreibung {#description}

@short: Wird ausgelöst, bevor ein Element gedreht wird

### Verwendung {#usage}

~~~jsx
"beforeItemRotate": ({
    id: string | number,
    angle: number
}) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

- `id` - die ID des Elements, das gedreht wird
- `angle` - der neue Rotationswinkel des Elements in Grad

### Rückgabewert {#returns}

Der Callback gibt `false` zurück, um zu verhindern, dass das Element gedreht wird; andernfalls `true`.

### Beispiel {#example}

~~~jsx
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Einen Handler an das Event anhängen
editor.events.on("beforeItemRotate", ({ id, angle }) => {
    if (angle > 90 && angle < 270) {
        console.log(`Preventing rotation of the item ${id} by this angle.`);
        return false; // Rotation verhindern
    }
    console.log(`Rotating the item ${id} by the angle: ${angle}`);
});
~~~

**Changelog**:

- Das Event wurde in v6.1 hinzugefügt

**Verwandte API**:

- [`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md)
- [`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verschieben, Drehen und Größenänderung von Shapes über Events verwalten](https://snippet.dhtmlx.com/qldjbbm7)