---
sidebar_label: getRoot()
title: getRoot-Methode der Data Collection
description: Sie erfahren mehr über die getRoot-Methode der Data Collection in der Dokumentation der JavaScript-Bibliothek DHTMLX Diagram. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# getRoot()

### Beschreibung {#description}

@short: Gibt die ID des Root-Elements anhand der ID seines untergeordneten Elements zurück

### Verwendung {#usage}

~~~jsx
getRoot(id: string | number): string | number;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die ID des untergeordneten Elements

### Rückgabewert {#returns}

Die Methode gibt die ID des Root-Elements zurück. Das Root-Element ist das erste Element einer Baumstruktur

### Beispiel {#example}

~~~jsx {6}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

diagram.data.getRoot("id_1.1.1"); // -> "id_1"
~~~

**Changelog**: Hinzugefügt in v4.0
