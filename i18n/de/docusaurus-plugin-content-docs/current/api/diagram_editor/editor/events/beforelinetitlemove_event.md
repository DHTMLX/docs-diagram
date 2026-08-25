---
sidebar_label: beforeLineTitleMove-Event
title: beforeLineTitleMove-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeLineTitleMove-Event des Editors. Durchsuchen Sie Entwickler-Leitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeLineTitleMove

### Beschreibung {#description}

@short: Wird ausgelöst, bevor ein Textelement einer Linie verschoben wird

### Verwendung {#usage}

~~~jsx
"beforeLineTitleMove": ({
    event: PointerEvent,
    lineId: string | number,
    titleId: string | number,
    coords: obj
}) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit einem Objekt aufgerufen, das die folgenden Parameter enthält:

  - `event` - ein Event-Objekt
  - `lineId` - die ID einer Linie
  - `titleId` - die ID eines Textelements einer Linie
  - `coords` - ein Objekt mit den Koordinaten `x` und `y` der Position des Textelements vor der Verschiebung, wobei:
    - `x` - die horizontale Position des Textelements, von links nach rechts verlaufend
    - `y` - die vertikale Position des Textelements, von oben nach unten verlaufend

### Rückgabewert {#returns}

Der Callback gibt `false` zurück, um zu verhindern, dass das Textelement einer Linie verschoben wird; andernfalls `true`

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
editor.events.on("beforeLineTitleMove", ({ titleId, coords }) => {
    console.log(`
        LineTitle ${titleId} is at the position:
            x: ${coords.x}
            y: ${coords.y}
    `);
    return true;
});
~~~

**Changelog**:

- Die Callback-Funktion nimmt seit v6.0 ein Objekt als Parameter entgegen
