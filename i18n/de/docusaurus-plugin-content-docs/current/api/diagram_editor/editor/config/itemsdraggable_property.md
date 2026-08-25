---
sidebar_label: itemsDraggable-Eigenschaft
title: itemsDraggable-Eigenschaft des Editors
description: Sie können mehr über die itemsDraggable-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# itemsDraggable

:::info
Die Eigenschaft funktioniert nur in den Modi Organigramm und Mindmap. Das verschobene Element wird zusammen mit allen untergeordneten Elementen gezogen.
:::

### Beschreibung {#description}

@short: Optional. Aktiviert/deaktiviert das Ziehen eines Elements von einem übergeordneten Element zu einem anderen

### Verwendung {#usage}

~~~jsx
itemsDraggable?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
itemsDraggable: true
~~~

### Beispiel {#example}

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "org", //  org" or "mindmap"
    itemsDraggable: false
});
~~~

**Changelog:** Hinzugefügt in v4.1
