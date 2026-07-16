---
sidebar_label: beforeItemCatch-Event
title: beforeItemCatch-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeItemCatch-Event des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeItemCatch

### Beschreibung {#description}

@short: Wird ausgelöst, bevor ein Element erfasst wird

:::info
Das Event funktioniert nur in den Modi **Organigramm** und `mindmap` von Diagram, wobei die Eigenschaft `itemsDraggable` auf `true` gesetzt sein muss.
:::

### Verwendung {#usage}

~~~jsx
"beforeItemCatch": ({
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

Die Callback-Funktion gibt `false` zurück, um zu verhindern, dass das Element erfasst wird; andernfalls `true`

:::info
Für die Verarbeitung interner Diagram-Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-20}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("beforeItemCatch", ({ id, targetId }) => {
  if (targetId === "2.1"){
    console.log(`
      Item ${id} won't be be caught by the item "2.1"
    `);
    return false;
  }
  else{
    console.log(`
      Item ${id} will be caught by the item ${targetId}
    `);
    return true;
  }
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion akzeptiert seit v6.0 ein Objekt als Parameter
