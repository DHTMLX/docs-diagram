---
sidebar_label: beforeItemMove-Event
title: beforeItemMove-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeItemMove-Event des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeItemMove

### Beschreibung {#description}

@short: Wird ausgelöst, bevor ein Element verschoben wird

:::note
Das Event funktioniert nicht mit dem Objekt `line`.

Das Event wird unabhängig von der Anzahl der ausgewählten Elemente nur für das Zielelement ausgelöst. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"beforeItemMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent,
}) => boolean | void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID eines Elements
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `coords` - ein Objekt mit den Koordinaten `x` und `y` der Elementposition vor der Verschiebung, wobei:
    - `x` - die horizontale Position des Elements, von links nach rechts
    - `y` - die vertikale Position des Elements, von oben nach unten
  - `event` - ein Event-Objekt

### Rückgabewert {#returns}

Die Callback-Funktion gibt `false` zurück, um zu verhindern, dass das Element verschoben wird; andernfalls `true`

:::info
Für die Verarbeitung interner Diagram-Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-14}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("beforeItemMove", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion akzeptiert seit v6.0 ein Objekt als Parameter

**Verwandte API**:

- [`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md)
- [`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verschieben, Drehen und Größenändern von Formen per Events verwalten](https://snippet.dhtmlx.com/qldjbbm7)
