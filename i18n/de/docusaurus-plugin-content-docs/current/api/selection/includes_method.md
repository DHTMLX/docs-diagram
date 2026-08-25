---
sidebar_label: includes()
title: includes-Methode von Selection
description: Erfahren Sie mehr über die includes-Methode von Selection in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# includes()

### Beschreibung {#description}

@short: Prüft, ob sich ein Element in der Auswahlliste befindet

### Verwendung {#usage}

~~~jsx
includes({
    id: string | number
}): boolean;
~~~

### Parameter {#parameters}

Die Methode akzeptiert als Argument ein Objekt mit den folgenden Parametern:

- `id` - (erforderlich) die ID des zu prüfenden Elements

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn sich das Element in der Auswahlliste befindet, andernfalls `false`

### Beispiel {#example}

~~~jsx {9-10}
// Ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // gibt true zurück
diagram.selection.includes({ id: "4" }) // gibt false zurück
~~~

**Changelog**: Hinzugefügt in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)

**Verwandtes Beispiel**: [Diagram. Selection. Elementauswahl](https://snippet.dhtmlx.com/jyoxn5h7)
