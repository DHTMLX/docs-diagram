---
sidebar_label: beforeShapeMove-Event
title: beforeShapeMove-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeShapeMove-Event des Editors. Durchsuchen Sie Entwickler-Leitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeShapeMove

### Beschreibung {#description}

@short: Wird ausgelöst, bevor ein Shape verschoben wird

:::note
Das Event wird unabhängig von der Anzahl der ausgewählten Elemente nur für das Zielelement ausgelöst. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"beforeShapeMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID eines Shapes
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `coords` -  ein Objekt mit den Koordinaten `x` und `y` der Position des Shapes vor der Verschiebung, wobei:
    - `x` - die horizontale Position des Shapes, von links nach rechts verlaufend
    - `y` - die vertikale Position des Shapes, von oben nach unten verlaufend
  - `event` - ein Event-Objekt

### Rückgabewert {#returns}

Der Callback gibt `false` zurück, um zu verhindern, dass das Shape verschoben wird; andernfalls `true`

:::info
Für die Verarbeitung interner Diagram Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-14}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Einen Handler an das Event anhängen
editor.events.on("beforeShapeMove", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion nimmt seit v6.0 ein Objekt als Parameter entgegen
- Die Parameter `id` und `coords` wurden in v4.0 hinzugefügt
