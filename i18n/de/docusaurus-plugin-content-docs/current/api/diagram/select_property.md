---
sidebar_label: select-Eigenschaft
title: select-Eigenschaft
description: Erfahren Sie mehr über die select-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# select

### Beschreibung {#description}

@short: Optional. Aktiviert die Auswahl im Diagramm

### Verwendung {#usage}

~~~jsx
select?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
select: false
~~~

### Beispiel {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
~~~

**Verwandte Artikel**:

- [Elementauswahl aktivieren](guides/diagram/configuration.md#enabling-items-selection)
- [Elemente auswählen](guides/manipulating_items.md#selecting-items)
