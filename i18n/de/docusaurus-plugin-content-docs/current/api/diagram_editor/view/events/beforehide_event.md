---
sidebar_label: beforeHide-Event
title: beforeHide-Event von View
description: Erfahren Sie mehr über das beforeHide-Event von View in der Diagram-Editor-Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# beforeHide {#beforehide}

### Beschreibung {#description}

@short: Wird ausgelöst, bevor die Toolbar-, Editbar- oder Shapebar-View ausgeblendet wird

### Verwendung {#usage}

~~~jsx
"beforeHide": (view: "toolbar" | "shapebar" | "editbar") => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `beforeHide`-Events wird mit folgendem Parameter aufgerufen:

- `view` - (erforderlich) eine View, die ausgeblendet werden soll. Weitere Informationen finden Sie in der Eigenschaft [`view`](api/diagram_editor/editor/config/view_property.md).

:::info
Um die internen Events von Diagram Editor zu verarbeiten, können Sie die Methode `on()` verwenden.
:::

### Beispiel {#example}

~~~jsx {9-12}
// Diagram Editor initialisieren
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true
    }
});

// Handler an das Event anhängen
editor.view.events.on("beforeHide", (view) => {
    console.log("The " + view + " view of Diagram Editor will be hidden");
});
~~~

**Changelog**: Hinzugefügt in v6.0
