---
sidebar_label: afterLineTitleMove-Event
title: afterLineTitleMove-Event des Editors
description: Erfahren Sie mehr über das afterLineTitleMove-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterLineTitleMove

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Textelement einer Linie um einen Rasterschritt verschoben wird

### Verwendung {#usage}

~~~jsx
"afterLineTitleMove": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: object
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
Zur Verarbeitung der internen Diagram-Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-13}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("afterLineTitleMove", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
});
~~~

**Changelog**: Die Callback-Funktion nimmt seit v6.0 ein Objekt als Parameter entgegen
