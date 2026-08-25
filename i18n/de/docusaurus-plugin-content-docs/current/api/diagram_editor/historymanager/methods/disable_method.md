---
sidebar_label: disable()
title: disable-Methode von HistoryManager
description: Informationen zur disable-Methode von HistoryManager finden Sie in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# disable() {#disable}

### Beschreibung {#description}

@short: Blockiert HistoryManager

### Verwendung {#usage}

~~~jsx
disable(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
// ...
editor.history.disable();
~~~

:::note
Beachten Sie, dass Sie nach dem Deaktivieren des History Manager nicht mehr über Tastenkombinationen mit dem Verlauf arbeiten können.
:::

**Changelog**: Hinzugefügt in v4.1
