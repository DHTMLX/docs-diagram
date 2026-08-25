---
sidebar_label: isVisible()
title: isVisible-Methode von View
description: Sie können mehr über die isVisible-Methode von View in der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# isVisible() {#isvisible}

### Beschreibung {#description}

@short: Prüft, ob die Toolbar-, Editbar- oder Shapebar-Ansicht von Diagram Editor sichtbar ist.

### Verwendung {#usage}

~~~jsx
isVisible(view: "toolbar" | "shapebar" | "editbar"): boolean;
~~~

### Parameter {#parameters}

- `toolbar` - (erforderlich) prüft, ob die Toolbar sichtbar ist
- `shapebar` - (erforderlich) prüft, ob die Shapebar sichtbar ist
- `editbar` - (erforderlich) prüft, ob die Editbar sichtbar ist

### Beispiel {#example}

~~~jsx {9-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: false,
        toolbar: true
    }
});

// Prüft die Sichtbarkeit von Toolbar und Shapebar
editor.view.isVisible("shapebar"); // gibt false zurück
editor.view.isVisible("toolbar"); // gibt true zurück
~~~

**Changelog**: Hinzugefügt in v6.0
