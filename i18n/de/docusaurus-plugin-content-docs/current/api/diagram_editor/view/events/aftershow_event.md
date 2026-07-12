---
sidebar_label: afterShow-Event
title: afterShow-Event von View
description: Erfahren Sie mehr über das afterShow-Event von View in der Diagram-Editor-Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# afterShow {#aftershow}

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Toolbar-, Editbar- oder Shapebar-View angezeigt wurde

### Verwendung {#usage}

~~~jsx
"afterShow": (view: "toolbar" | "shapebar" | "editbar") => void;
~~~

### Parameter {#parameters}

Der Callback des `afterShow`-Events wird mit folgendem Parameter aufgerufen:

- `view` - (erforderlich) eine View, die angezeigt wurde. Weitere Informationen finden Sie in der Eigenschaft [`view`](api/diagram_editor/editor/config/view_property.md).

:::info
Um die internen Events von Diagram Editor zu verarbeiten, können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {9-12}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: false
    }
});

// Handler an das Event anhängen
editor.view.events.on("afterShow", (view) => {
    console.log("The " + view + " view of Diagram Editor was displayed");
});
~~~

**Changelog**: Hinzugefügt in v6.0
