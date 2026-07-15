---
sidebar_label: itemMoveEnd-Event
title: itemMoveEnd-Event des Editors
description: Erfahren Sie mehr über das itemMoveEnd-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# itemMoveEnd

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem ein Element verschoben wurde

:::note
Das Event funktioniert nicht mit dem `line`-Objekt.

Das Event wird nur für das Zielelement ausgelöst, unabhängig von der Anzahl der ausgewählten Elemente. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"itemMoveEnd": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID eines Elements
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `coords` - ein Objekt mit den Koordinaten `x` und `y` der Elementposition nach der Verschiebung, wobei:
    - `x` - die horizontale Position des Elements, von links nach rechts
    - `y` - die vertikale Position des Elements, von oben nach unten
  - `event` - ein Event-Objekt

### Beispiel {#example}

~~~jsx {6-13}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("itemMoveEnd", ({ id, coords }) => {
    console.log(`
        Item ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion akzeptiert seit v6.0 ein Objekt als Parameter

**Verwandte API**:

- [`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md)
- [`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md)

**Verwandtes Beispiel**:

- [Diagram Editor. Verwalten des Verschiebens, Drehens und der Größenänderung von Formen über Events](https://snippet.dhtmlx.com/qldjbbm7)

