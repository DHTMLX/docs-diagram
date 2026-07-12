---
sidebar_label: pasteStyles()
title: pasteStyles-Methode von Copy Manager
description: Erfahren Sie mehr über die pasteStyles-Methode des Copy Manager in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# pasteStyles()

### Beschreibung {#description}

@short: Wendet kopierte Stile auf die Liste der ausgewählten Elemente oder auf durch IDs angegebene Elemente an

### Verwendung {#usage}

~~~jsx
pasteStyles(ids?: (string | number)[]): void;
~~~

### Parameter {#parameters}

- `ids` - (optional) ein Array der IDs von Elementen, auf die die kopierten Stile angewendet werden sollen

### Beispiel {#example}

- Rufen Sie die Methode ohne Argumente auf, um die Stile auf die Elemente aus der Auswahlliste anzuwenden

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.model.copyStyles(); // kopiert die Stile des ersten Elements aus der Auswahlliste
editor.model.pasteStyles(); // wendet die kopierten Stile auf die Elemente aus der Auswahlliste an
~~~

- Übergeben Sie der Methode die IDs bestimmter Elemente, um die kopierten Stile auf sie anzuwenden

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.model.copyStyles("2"); // kopiert die Stile des angegebenen Elements
editor.model.pasteStyles(["1", "2", "3"]); // wendet die kopierten Stile auf die angegebenen Elemente an
~~~

**Changelog**: Hinzugefügt in v6.0
