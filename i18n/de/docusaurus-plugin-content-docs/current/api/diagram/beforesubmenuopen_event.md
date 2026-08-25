---
sidebar_label: beforeSubmenuOpen-Event
title: beforeSubmenuOpen-Event
description: Erfahren Sie mehr über das beforeSubmenuOpen-Event in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# beforeSubmenuOpen

### Beschreibung {#description}

@short: Wird ausgelöst, bevor das Menü der Unterkopfzeile geöffnet wird

### Verwendung {#usage}

~~~jsx
beforeSubmenuOpen: (
    id: string | number,
    event: MouseEvent,
    subHeaderId?: string
) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des Events verwendet die folgenden Parameter:

- `id` - (erforderlich) die ID einer Swimlane
- `event` - (erforderlich) ein natives HTML-Event-Objekt
- `subHeaderId` - (optional) die ID einer Unterkopfzeile einer Swimlane

### Rückgabewert {#returns}

Geben Sie `false` zurück, um das Öffnen der Unterkopfzeile zu blockieren; andernfalls `true`

### Beispiel {#example}

~~~jsx {9-12}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
// Daten laden
diagram.data.parse(data);

// einen Handler an das Event anhängen
diagram.events.on("beforeSubmenuOpen", (id, event, subheaderId) => {
    console.log(id, event, subheaderId);
    return true;
});
~~~

**Changelog**: Hinzugefügt in v4.0

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)
