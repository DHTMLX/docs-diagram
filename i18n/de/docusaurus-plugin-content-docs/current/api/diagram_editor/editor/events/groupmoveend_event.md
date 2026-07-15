---
sidebar_label: groupMoveEnd-Event
title: groupMoveEnd-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das groupMoveEnd-Event des Editors. Durchsuchen Sie Entwickler-Leitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# groupMoveEnd

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem eine Gruppe oder Swimlane verschoben wurde

:::note
Das Event wird unabhängig von der Anzahl der ausgewählten Elemente nur für das Zielelement ausgelöst. Die IDs der gezogenen Elemente werden im Parameter `batch` der Callback-Funktion bereitgestellt.
:::

### Verwendung {#usage}

~~~jsx
"groupMoveEnd": ({
    id: string | number,
    batch: (string | number)[],
    coords: object,
    event: PointerEvent,
}) => void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `id` - die ID eines Elements
  - `batch` - ein Array mit den IDs der verschobenen Elemente
  - `coords` - ein Objekt mit den Koordinaten `x` und `y` der Position der Gruppe oder Swimlane nach der Verschiebung, wobei:
    - `x` - die horizontale Position der Gruppe/Swimlane, von links nach rechts verlaufend
    - `y` - die vertikale Position der Gruppe/Swimlane, von oben nach unten verlaufend
  - `event` - ein Event-Objekt

:::info
Für die Verarbeitung interner Diagram Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-13}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Einen Handler an das Event anhängen
editor.events.on("groupMoveEnd", ({ id, coords }) => {
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
