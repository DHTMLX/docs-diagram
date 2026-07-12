---
sidebar_label: afterGroupMove-Event
title: afterGroupMove-Event des Editors
description: Erfahren Sie mehr über das afterGroupMove-Event des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterGroupMove

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Gruppe oder Swimlane um einen Rasterschritt verschoben wird

:::note
Das Event wird nur für das Zielelement ausgelöst, unabhängig von der Anzahl der ausgewählten Elemente. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"afterGroupMove": ({
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
  - `coords` - ein Objekt mit den Koordinaten `x` und `y` der Position der Gruppe oder Swimlane nach der Verschiebung, wobei:
    - `x` - die horizontale Position der Gruppe/Swimlane, von links nach rechts
    - `y` - die vertikale Position der Gruppe/Swimlane, von oben nach unten
  - `event` - ein Event-Objekt

:::info
Um die internen Events des Diagram Editors zu verarbeiten, können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-13}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("afterGroupMove", ({ id, coords }) => {
    console.log(`
        Group ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion nimmt seit v6.0 ein Objekt als Parameter entgegen
