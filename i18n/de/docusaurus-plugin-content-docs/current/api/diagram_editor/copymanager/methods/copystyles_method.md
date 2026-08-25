---
sidebar_label: copyStyles()
title: copyStyles-Methode von Copy Manager
description: Erfahren Sie mehr über die copyStyles-Methode des Copy Manager in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# copyStyles()

### Beschreibung {#description}

@short: Kopiert die Stile des angegebenen Elements oder des ersten Elements aus der Auswahlliste

### Verwendung {#usage}

~~~jsx
copyStyles(id?: string | number): void;
~~~

### Parameter {#parameters}

- `id`- (optional) die ID eines für das Kopieren von Stilen ausgewählten Elements

### Beispiel {#example}

-  Rufen Sie die Methode ohne Argumente auf, um die Stile des *ersten Elements aus der Auswahlliste* zu kopieren

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
});
// ...
editor.model.copyStyles(); // kopiert die Stile des ersten Elements aus der Auswahlliste
~~~

- Übergeben Sie der Methode die ID eines Elements, um dessen Stile zu kopieren

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
});
// ...
editor.model.copyStyles("1"); // kopiert die Stile des angegebenen Elements
~~~

**Changelog**: Hinzugefügt in v6.0
