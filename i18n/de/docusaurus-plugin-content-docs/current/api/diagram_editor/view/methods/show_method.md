---
sidebar_label: show()
title: show-Methode von View
description: Sie können mehr über die show-Methode von View in der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# show() {#show}

### Beschreibung {#description}

@short: Zeigt die Toolbar-, Editbar- und Shapebar-Ansichten von Diagram Editor an

:::info
Wenn Sie die Ansichten `Toolbar`, `Editbar` oder `Shapebar` einzeln einblenden möchten, rufen Sie die Methode `show()` mit dem entsprechenden Parameter auf. Um alle diese Elemente einzublenden, rufen Sie die Methode `show()` ohne Parameter auf.
:::

### Verwendung {#usage}

~~~jsx
show(view?: "toolbar" | "shapebar" | "editbar"): void;
~~~

### Parameter {#parameters}

- `toolbar` - (optional) zeigt die Toolbar an
- `shapebar` - (optional) zeigt die Shapebar an
- `editbar` - (optional) zeigt die Editbar an

### Beispiel {#example}

~~~jsx {5-6,8-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

// Zeigt die Shapebar-Ansicht an
editor.view.show("shapebar");

// Zeigt Shapebar, Editbar und Toolbar an
editor.view.show();
~~~

**Changelog**: Hinzugefügt in v6.0
