---
sidebar_label: defaultLinkType-Eigenschaft
title: defaultLinkType-Eigenschaft
description: Erfahren Sie mehr über die defaultLinkType-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# defaultLinkType

### Beschreibung {#description}

@short: Optional. Der Standardtyp einer Verbindungslinie

Der Wert wird angewendet, wenn das Linienobjekt die Eigenschaft `"type"` nicht enthält

### Verwendung {#usage}

~~~jsx
defaultLinkType?: "line" | "dash";
~~~

### Standardkonfiguration {#default-config}

~~~jsx
defaultLinkType: "line"
~~~

### Beispiel {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType: "dash"
});
~~~

**Verwandter Artikel**: [Verbindungen zwischen Formen festlegen](/lines/#setting-connections-between-shapes)
