---
sidebar_label: afterEditorClose
title: afterEditorClose-Event
description: Erfahren Sie mehr über das afterEditorClose-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterEditorClose

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem der Inline-Editor des Elements geschlossen wurde

### Verwendung {#usage}

~~~jsx
afterEditorClose: (
    id: string | number,
    key: string,
    subId?: string
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet die folgenden Parameter:

- `id` - (erforderlich) die ID eines Elements
- `key` - (erforderlich) der Name der bearbeiteten Eigenschaft
- `subId` - (optional) die ID eines Subheaders einer Swimlane oder eines Textelements einer Linie

### Beispiel {#example}

~~~jsx {9-11}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Einen Handler an das Event anhängen
diagram.events.on("afterEditorClose", (id, key, subId) => {
    console.log(id, key, subId);
});
~~~

**Changelog**:

- Der Parameter `subHeaderId` wurde in v4.1 in `subId` geändert
- Hinzugefügt in v4.0
