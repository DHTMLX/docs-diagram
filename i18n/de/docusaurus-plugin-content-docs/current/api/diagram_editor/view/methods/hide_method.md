---
sidebar_label: hide()
title: hide-Methode von View
description: Sie können mehr über die hide-Methode von View in der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# hide() {#hide}

### Beschreibung {#description}

@short: Blendet die Toolbar-, Editbar- und Shapebar-Ansichten von Diagram Editor aus.

:::info
Wenn Sie die Ansichten `Toolbar`, `Editbar` und `Shapebar` einzeln ausblenden möchten, rufen Sie die Methode `hide()` mit dem entsprechenden Parameter auf. Um alle diese Elemente auszublenden, rufen Sie die Methode `hide()` ohne Parameter auf.
:::

### Verwendung {#usage}

~~~jsx
hide(view?: "toolbar" | "shapebar" | "editbar"): void;
~~~

### Parameter {#parameters}

- `toolbar` - (optional) blendet die Toolbar aus
- `shapebar` - (optional) blendet die Shapebar aus
- `editbar` - (optional) blendet die Editbar aus

### Beispiel {#example}

~~~jsx {5-6,8-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});

// Blendet die Shapebar-Ansicht aus
editor.view.hide("shapebar");

// Blendet Shapebar, Editbar und Toolbar aus
editor.view.hide();
~~~

**Changelog**: Hinzugefügt in v6.0
