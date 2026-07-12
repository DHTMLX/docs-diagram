---
sidebar_label: beforeEditorEditing
title: beforeEditorEditing-Event
description: Erfahren Sie mehr über das beforeEditorEditing-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeEditorEditing

### Beschreibung {#description}

@short: Wird ausgelöst, bevor der Textwert eines Elements über den Inline-Editor bearbeitet wird

### Verwendung {#usage}

~~~jsx
beforeEditorEditing: (
    value: string,
    currentValue: string,
    id: string | number,
    key: string,
    subId?: string
) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet die folgenden Parameter:

- `value` - (erforderlich) der neue Wert des Elements
- `currentValue` - (erforderlich) der alte Wert des Elements
- `id` - (erforderlich) die ID des Elements
- `key` - (erforderlich) der Name der zu bearbeitenden Eigenschaft
- `subId` - (optional) die ID eines Subheaders einer Swimlane oder eines Textelements einer Linie

### Rückgabewert {#returns}

Geben Sie `false` zurück, um das Speichern von Änderungen nach der Bearbeitung eines Elements über den Inline-Editor zu verhindern, andernfalls `true`

### Beispiel {#example}

~~~jsx {9-12}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// Einen Handler an das Event anhängen
diagram.events.on("beforeEditorEditing", (value, id, key, subId) => {
    console.log(value, id, key, subId);
    return true;
});
~~~

**Changelog**:

- Der Parameter `subHeaderId` wurde in v4.1 in `subId` geändert
- Hinzugefügt in v4.0
