---
sidebar_label: destructor()-Methode
title: destructor-Methode
description: Erfahren Sie mehr über die destructor-Methode in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---
# destructor()

### Beschreibung {#description}

@short: Entfernt eine Diagram-Instanz und gibt belegte Ressourcen frei

### Verwendung {#usage}

~~~jsx
destructor(): void;
~~~

### Beispiel {#example}

~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.destructor();
~~~

**Changelog**: Hinzugefügt in v3.0
