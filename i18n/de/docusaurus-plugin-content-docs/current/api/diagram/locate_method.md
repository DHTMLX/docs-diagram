---
sidebar_label: locate()
title: locate-Methode
description: Erfahren Sie mehr über die Methode locate in der Dokumentation der JavaScript-Diagram-Bibliothek von DHTMLX. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# locate()

### Beschreibung {#description}

@short: Ruft die ID eines Elements aus dem angegebenen HTML-Event oder -Tag ab

### Verwendung {#usage}

~~~jsx
locate(event: object): any;
~~~

### Parameter {#parameters}

- `event` - (erforderlich) ein natives Event-Objekt

### Rückgabewert {#returns}

Die Methode gibt die ID der Form zurück, auf die sich das Event/Tag bezieht

### Beispiel {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

const id = diagram.locate(event);
~~~
