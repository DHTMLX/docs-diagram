---
sidebar_label: lineTitleMoveEnd-Event
title: lineTitleMoveEnd-Event des Editors
description: Erfahren Sie mehr über das lineTitleMoveEnd-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# lineTitleMoveEnd

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem ein Textelement einer Linie verschoben wurde

### Verwendung {#usage}

~~~jsx
"lineTitleMoveEnd": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: obj
}) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `event` - ein Event-Objekt
  - `lineId` - die ID einer Linie
  - `titleId` - die ID eines Textelements einer Linie
  - `coords` - ein Objekt mit den Koordinaten `x` und `y` der Position des Textelements nach der Verschiebung, wobei:
    - `x` - die horizontale Position des Textelements, von links nach rechts
    - `y` - die vertikale Position des Textelements, von oben nach unten

:::info
Zur Verarbeitung der internen Events von Diagram Editor können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-13}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("lineTitleMoveEnd", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Changelog**: Die Callback-Funktion akzeptiert seit v6.0 ein Objekt als Parameter