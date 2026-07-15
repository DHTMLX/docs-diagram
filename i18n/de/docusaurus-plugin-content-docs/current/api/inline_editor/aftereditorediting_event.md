---
sidebar_label: afterEditorEditing
title: afterEditorEditing-Event
description: Erfahren Sie mehr über das afterEditorEditing-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# afterEditorEditing

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem der Textwert eines Elements über den Inline-Editor bearbeitet wurde

### Verwendung {#usage}

~~~jsx
afterEditorEditing: (
    value: string,
    id: string | number,
    key: string,
    subId?: string
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet die folgenden Parameter:

- `value` - (erforderlich) der neue Wert des Elements
- `id`- (erforderlich) die ID des Elements
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
diagram.events.on("afterEditorEditing", (value, id, key, subId) => {
    console.log(value, id, key, subId);
});
~~~

**Changelog**:

- Der Parameter `subHeaderId` wurde in v4.1 in `subId` geändert
- Hinzugefügt in v4.0
