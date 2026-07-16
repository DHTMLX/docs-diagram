---
sidebar_label: showItem()
title: showItem-Methode
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die showItem-Methode. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# showItem()

### Beschreibung {#description}

@short: Passt den Bildlauf an, um das Zielelement sichtbar zu machen

### Verwendung {#usage}

~~~jsx
showItem(id: string | number): void;
~~~

### Parameter {#parameters}

- `id` - (erforderlich) die **ID** des Zielelements

### Beispiel {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.showItem(123);
~~~

**Verwandte Beispiele**:

- [Diagram. Form-Suche](https://snippet.dhtmlx.com/d7kvzq4r)
- [Diagram. Inhalt scrollen](https://snippet.dhtmlx.com/f970hbym)
