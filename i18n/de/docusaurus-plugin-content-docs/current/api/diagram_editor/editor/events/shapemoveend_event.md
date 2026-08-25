---
sidebar_label: shapeMoveEnd-Event
title: shapeMoveEnd-Event des Editors
description: Sie können mehr über das shapeMoveEnd-Event des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# shapeMoveEnd

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem eine Form verschoben wurde

:::note
Das Event wird unabhängig von der Anzahl der ausgewählten Elemente nur für das Zielelement ausgelöst. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"shapeMoveEnd": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent
}) => void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID eines Elements
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `coords` - ein Objekt mit den `x`- und `y`-Koordinaten der Form-Position nach der Verschiebung, wobei:
    - `x` - die horizontale Position der Form, von links nach rechts
    - `y` - die vertikale Position der Form, von oben nach unten
  - `event` - ein Event-Objekt

:::info
Um die internen Diagram-Editor-Events zu verarbeiten, können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-13}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("shapeMoveEnd", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion nimmt seit v6.0 ein Objekt als Parameter entgegen
