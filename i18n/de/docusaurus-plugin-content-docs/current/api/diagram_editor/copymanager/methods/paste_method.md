---
sidebar_label: paste()
title: paste-Methode von Copy Manager
description: Erfahren Sie mehr über die paste-Methode des Copy Manager in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# paste()

### Beschreibung {#description}

@short: Erstellt neue Elemente, die mit den durch die Methode "copy()" übergebenen Elementen identisch sind

:::note
Die Methode `paste()` funktioniert nur, wenn der Diagram Editor im Modus `default` initialisiert wurde.
:::

### Verwendung {#usage}

~~~jsx
paste(): void;
~~~

### Beispiel {#example}

~~~jsx {5-6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // nur default
});
// ...
editor.model.copy(); // kopiert die ausgewählten Elemente
editor.model.paste() // fügt neue Elemente ein
~~~

**Changelog**: Hinzugefügt in v6.0
