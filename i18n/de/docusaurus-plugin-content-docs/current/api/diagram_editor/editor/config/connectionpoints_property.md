---
sidebar_label: connectionPoints
title: connectionPoints-Eigenschaft des Editors
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die connectionPoints-Eigenschaft des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# connectionPoints

### Beschreibung {#description}

@short: Optional. Aktiviert/deaktiviert die Möglichkeit, Formen über Verbindungssteuerelemente zu verbinden

:::info
Die Eigenschaft `connectionPoints` funktioniert nur im Modus `default`.
:::

### Verwendung {#usage}

~~~jsx
connectionPoints?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
connectionPoints: true
~~~

### Beispiel {#example}

~~~jsx {3}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // nur "default"
    connectionPoints: false, // Standardmäßig true
    // weitere Konfigurationen
});
~~~

**Changelog**: Hinzugefügt in v6.0
