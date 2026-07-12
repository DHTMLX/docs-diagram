---
sidebar_label: afterItemMove-Event
title: afterItemMove-Event des Editors
description: Erfahren Sie mehr über das afterItemMove-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterItemMove

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Element um einen Rasterschritt verschoben wird

:::note
Das Event funktioniert nicht mit dem `line`-Objekt.

Das Event wird unabhängig von der Anzahl der ausgewählten Elemente nur für das Zielelement ausgelöst. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"afterItemMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

- `id` - die ID des Elements
- `batch` - ein Array mit den IDs der verschobenen Elemente
- `coords` - ein Objekt mit den Koordinaten `x` und `y` der Elementposition nach der Verschiebung, wobei:
    - `x` - die horizontale Position des Elements, von links nach rechts
    - `y` - die vertikale Position des Elements, von oben nach unten
- `event` - ein Event-Objekt

:::info
Zur Verarbeitung der internen Diagram-Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-13}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("afterItemMove", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion nimmt seit v6.0 ein Objekt als Parameter entgegen

**Verwandte API**:

- [`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md)
- [`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verwalten des Verschiebens, Drehens und der Größenänderung von Shapes über Events](https://snippet.dhtmlx.com/qldjbbm7)