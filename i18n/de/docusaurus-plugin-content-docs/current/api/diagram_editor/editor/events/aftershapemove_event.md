---
sidebar_label: afterShapeMove-Event
title: afterShapeMove-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das afterShapeMove-Event des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterShapeMove

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Form um einen Rasterschritt verschoben wird

:::note
Das Event wird unabhängig von der Anzahl der ausgewählten Elemente nur für das Zielelement ausgelöst. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"afterShapeMove": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent,
}) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID einer Form
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `coords` - ein Objekt mit den Koordinaten `x` und `y` der Formposition nach der Verschiebung, wobei:
    - `x` - die horizontale Position der Form, von links nach rechts
    - `y` - die vertikale Position der Form, von oben nach unten
  - `event` - ein Event-Objekt

:::info
Für die Verarbeitung interner Diagram-Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-13}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler an das Event anhängen
editor.events.on("afterShapeMove", ({ id, coords }) => {
    console.log(`
        Shape ${id} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Changelog**:

- Der Parameter `batch` wurde in v6.0 hinzugefügt
- Die Callback-Funktion akzeptiert seit v6.0 ein Objekt als Parameter
- Die Parameter `id` und `coords` wurden in v4.0 hinzugefügt
