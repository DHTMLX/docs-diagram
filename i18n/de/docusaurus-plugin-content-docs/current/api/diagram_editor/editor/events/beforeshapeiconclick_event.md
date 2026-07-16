---
sidebar_label: beforeShapeIconClick-Event
title: beforeShapeIconClick-Event des Editors
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das beforeShapeIconClick-Event des Editors. Durchsuchen Sie Entwickler-Leitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeShapeIconClick

### Beschreibung {#description}

@short: Wird ausgelöst, bevor auf ein Steuerelement in der elementspezifischen Symbolleiste geklickt wird

### Verwendung {#usage}

~~~jsx
"beforeShapeIconClick": (
    iconId: string,
    shape: object
) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit den folgenden Parametern aufgerufen:

- `iconId` - der Typ oder die ID des Symbolleisten-Steuerelements
- `shape` - ein Objekt mit der Konfiguration des Elements

### Rückgabewert {#returns}

Der Callback gibt `false` zurück, um zu verhindern, dass auf das Symbolleisten-Steuerelement geklickt wird; andernfalls `true`

:::info
Für die Verarbeitung interner Diagram Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-12}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Einen Handler an das Event anhängen
editor.events.on("beforeShapeIconClick", (iconId, shape) => {
    console.log(`
        You will click the ${iconId} toolbar control of the shape ${shape.id}
    `);
    return true;
});
~~~

**Changelog**: Hinzugefügt in v3.1
