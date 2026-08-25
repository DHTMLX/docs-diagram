---
sidebar_label: itemTarget-Event
title: itemTarget-Event des Editors
description: Erfahren Sie mehr über das itemTarget-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# itemTarget

### Beschreibung {#description}

@short: Wird ausgelöst, wenn das verschobene Element über dem Zielelement schwebt

:::info
Das Event funktioniert nur in den Modi **Org-Chart** und `mindmap` von Diagram, wobei die Eigenschaft `itemsDraggable` auf `true` gesetzt sein muss.

Das Event funktioniert nicht mit dem *übergeordneten Element eines verschobenen Elements* und mit einem *verschobenen Element, das die Eigenschaft `giveItem: false` hat*.
:::

### Verwendung {#usage}

~~~jsx
"itemTarget": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => boolean | void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID des verschobenen Elements
  - `targetId` - die ID des Zielelements
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `event` - ein Event-Objekt

### Rückgabewert {#returns}

Die Callback-Funktion gibt `false` zurück, um zu verhindern, dass ein Element über dem Zielelement schwebt; andernfalls `true`

:::info
Zur Verarbeitung der internen Events von Diagram Editor können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-11}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("itemTarget", ({ id, targetId }) => {
    console.log(`
          Item ${id} is hovering over the item ${targetId}
      `);
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion akzeptiert seit v6.0 ein Objekt als Parameter
