---
sidebar_label: remove()
title: remove-Methode von Selection
description: Erfahren Sie mehr über die remove-Methode von Selection in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# remove()

### Beschreibung {#description}

@short: Entfernt das angegebene Element oder, wenn die Methode ohne Argumente aufgerufen wird, alle Elemente aus der Auswahlliste

### Verwendung {#usage}

~~~jsx
remove({
    id: string | number
}): boolean;

//oder

remove(): boolean;
~~~

### Parameter {#parameters}

Die Methode kann als Argument ein Objekt mit dem folgenden Parameter akzeptieren:

- `id` - (erforderlich) die ID des Elements, das aus der Auswahlliste entfernt werden soll

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn die Abwahl eines Elements oder das Leeren der Liste erfolgreich war

### Beispiel {#example}

~~~jsx {9}
// Ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> gibt true zurück, wenn das Element abgewählt wurde
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

Wenn die Methode ohne Argumente aufgerufen wird, leert sie die Auswahlliste:

~~~jsx {9-10}
// Ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten werden geladen
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// Entfernt alle Elemente aus der Auswahlliste
diagram.selection.remove();
console.log(diagram.selection.getIds()); // -> []
~~~

**Changelog**: Aktualisiert in v6.0

**Verwandte Artikel**:

- [diagram.config.select](api/diagram/select_property.md)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)

**Verwandtes Beispiel**: [Diagram. Selection. Elementauswahl](https://snippet.dhtmlx.com/jyoxn5h7)
