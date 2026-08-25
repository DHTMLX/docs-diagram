---
sidebar_label: afterShapeIconClick-Event
title: afterShapeIconClick-Event des Editors
description: Erfahren Sie mehr über das afterShapeIconClick-Event des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterShapeIconClick

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem ein Steuerelement in der elementspezifischen Symbolleiste angeklickt wurde

### Verwendung {#usage}

~~~jsx
"afterShapeIconClick": (
    iconId: string,
    shape: object
) => void;
~~~

### Parameter {#parameters}

Die Callback-Funktion des Events wird mit den folgenden Parametern aufgerufen:

- `iconId` - der Typ oder die ID des Symbolleisten-Steuerelements
- `shape` - ein Objekt mit der Konfiguration des Elements

:::info
Zur Verarbeitung der internen Diagram-Editor-Events können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {6-11}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container");
// Daten laden
editor.parse(data);

// Handler für das Event hinzufügen
editor.events.on("afterShapeIconClick", (iconId, shape) => {
    console.log(`
        You've clicked the ${iconId} toolbar control of the shape ${shape.id}
    `);
});
~~~

**Changelog**: Hinzugefügt in v3.1
