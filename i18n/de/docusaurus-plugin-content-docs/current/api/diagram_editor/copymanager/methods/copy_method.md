---
sidebar_label: copy()
title: copy-Methode von Copy Manager
description: Erfahren Sie mehr über die copy-Methode des Copy Manager in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# copy()

### Beschreibung {#description}

@short: Kopiert ausgewählte Elemente oder durch IDs angegebene Elemente

:::note
Die Methode `copy()` funktioniert nur, wenn der Diagram Editor im Modus `default` initialisiert wurde.
:::

### Verwendung {#usage}

~~~jsx
copy(ids?: (string | number)[]): void;
~~~

### Parameter {#parameters}

- `ids` - (optional) ein Array (eine Liste) der IDs der zu kopierenden Elemente

### Beispiel {#example}

- Rufen Sie die Methode ohne Argumente auf, um Elemente aus der Auswahlliste zu kopieren

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // nur default
});
// ...
editor.model.copy(); // kopiert ausgewählte Elemente
~~~

- Übergeben Sie der Methode einige IDs, um die entsprechenden Elemente zu kopieren

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // nur default
});
// ...
editor.model.copy(["1", "2"]); // kopiert die angegebenen Elemente
~~~

**Changelog**: Hinzugefügt in v6.0
