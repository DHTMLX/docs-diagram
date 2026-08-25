---
sidebar_label: destructor()
title: destructor-Methode des Editors
description: Erfahren Sie mehr über die destructor-Methode in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# destructor()

### Beschreibung {#description}

@short: Entfernt eine Diagram-Editor-Instanz und gibt belegte Ressourcen frei

### Verwendung {#usage}

~~~jsx
destructor(): void;
~~~

### Beispiel {#example}

~~~jsx {6}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);

editor.destructor();
~~~

**Changelog**: Hinzugefügt in v6.0
