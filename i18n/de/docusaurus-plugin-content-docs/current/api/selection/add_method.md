---
sidebar_label: add()
title: add-Methode von Selection
description: Erfahren Sie mehr über die add-Methode von Selection in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# add()

### Beschreibung {#description}

@short: Fügt das angegebene Element in die Auswahlliste ein

### Verwendung {#usage}

~~~jsx
add({
    id: string | number,
    join?: boolean,
    batch?: (string | number)[]
}): boolean;
~~~

### Parameter {#parameters}

Die Methode nimmt als Argument ein Objekt mit den folgenden Parametern entgegen:

- `id` - (erforderlich) die ID eines Elements
- `join` - (optional) der Modus zum Hinzufügen des ausgewählten Elements zur Auswahlliste. Wenn der Parameter auf *false* gesetzt ist oder nicht übergeben wird, werden die zuvor zur Auswahlliste hinzugefügten Elemente zurückgesetzt
- `batch` - (optional) die Liste der auszuwählenden Elemente (falls im Voraus bekannt)

### Rückgabewert {#returns}

Die Methode gibt Folgendes zurück:

- `true`, wenn sich das Element nicht in der Auswahlliste befand und erfolgreich hinzugefügt wurde
- `false`, wenn das Element aus irgendeinem Grund nicht zur Auswahlliste hinzugefügt wurde, z. B. weil es bereits zur Auswahlliste hinzugefügt worden war

### Beispiel {#example}

~~~jsx {8,11-12,15-16}
// ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> gibt true zurück, wenn das Element ausgewählt wurde
console.log(diagram.selection.getIds()); // -> ["1"]

// fügt das Element mit der id:"2" zu den bereits ausgewählten Elementen hinzu
diagram.selection.add({ id: "2", join: true });
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// entfernt die zuvor ausgewählten Elemente und fügt das Element mit der id:"3" hinzu
diagram.selection.add({ id: "3" });
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

**Changelog**: Aktualisiert in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)

**Verwandtes Beispiel**: [Diagram. Selection. Elementauswahl](https://snippet.dhtmlx.com/jyoxn5h7)
