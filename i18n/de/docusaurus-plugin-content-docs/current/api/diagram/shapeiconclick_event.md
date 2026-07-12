---
sidebar_label: shapeIconClick
title: shapeIconClick-Event
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über das shapeIconClick-Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# shapeIconClick

### Beschreibung {#description}

@short: Wird beim Klicken auf ein Symbol der Form-Symbolleiste ausgelöst

### Verwendung {#usage}

~~~jsx
"shapeIconClick": (
    id: string | number,
    event: MouseEvent
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events wird mit den folgenden Parametern aufgerufen:

- `id` - die ID des Symbols
- `event` - ein natives HTML-Event-Objekt

### Beispiel {#example}

~~~jsx {23-39}
// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container", {
    select: true,
    // Eine Symbolleiste mit Schaltflächen für Elemente einrichten
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>"
        },
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>"
        }
    ]
});
// Daten laden
diagram.data.parse(data);

diagram.events.on("shapeIconClick", function (action) {
    const selectedId = diagram.selection.getItem().id;
    switch(action) {
        case "download":
            diagram.export.pdf();
            break;
        case "remove":
            diagram.data.remove(selectedId);
            break;
        case "add":
            diagram.data.add({
                text: "New shape",
                parent: selectedId,
            });
            break;
    }
});
~~~

**Verwandter Artikel**: [Event-Handling](guides/event_handling.md)

**Verwandtes Beispiel**: [Diagram. Konfiguration. Form-Symbolleiste](https://snippet.dhtmlx.com/4if395hd)
