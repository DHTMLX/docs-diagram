---
sidebar_label: afterItemCatch-Event
title: afterItemCatch-Event des Editors
description: Erfahren Sie mehr über das afterItemCatch-Event des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterItemCatch

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem ein Element erfasst wurde

:::info
Das Event funktioniert nur in den Modi **Organigramm** und `mindmap` von Diagram; die Eigenschaft `itemsDraggable` muss auf `true` gesetzt sein.
:::

### Verwendung {#usage}

~~~jsx
"afterItemCatch": ({
    id: string | number,
    targetId: string | number,
    batch: (string | number)[],
    event: PointerEvent
}) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID des verschobenen Elements
  - `targetId` - die ID des Zielelements
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `event` - ein Event-Objekt

### Beispiel {#example}

~~~jsx {6-11}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("afterItemCatch", ({ id, targetId }) => {
    console.log(`
        item ${id} is caught by the item ${targetId}
    `);
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion nimmt seit v6.0 ein Objekt als Parameter entgegen
