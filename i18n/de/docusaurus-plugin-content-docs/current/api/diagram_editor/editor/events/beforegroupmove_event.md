---
sidebar_label: beforeGroupMove-Event
title: beforeGroupMove-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeGroupMove-Event des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeGroupMove

### Beschreibung {#description}

@short: Wird ausgelöst, bevor eine Gruppe oder Swimlane verschoben wird

:::note
Das Event wird unabhängig von der Anzahl der ausgewählten Elemente nur für das Zielelement ausgelöst. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"beforeGroupMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => boolean | void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID eines Elements
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `coords` - ein Objekt mit den Koordinaten `x` und `y` der Position der Gruppe oder Swimlane vor der Verschiebung, wobei:
    - `x` - die horizontale Position der Gruppe/Swimlane, von links nach rechts
    - `y` - die vertikale Position der Gruppe/Swimlane, von oben nach unten
  - `event` - ein Event-Objekt

### Rückgabewert {#returns}

Die Callback-Funktion gibt `false` zurück, um zu verhindern, dass die Gruppe oder Swimlane verschoben wird; andernfalls `true`

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
editor.events.on("beforeGroupMove", ({ id, coords }) => {
    console.log(`
        Group ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion akzeptiert seit v6.0 ein Objekt als Parameter
