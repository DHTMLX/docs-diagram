---
sidebar_label: Linien
title: Linien
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über Linien. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Linien

## Übersicht {#overview}

Das Erscheinungsbild der Linien, die Formen verbinden, wird durch den Modus bestimmt, in dem Sie ein Diagramm initialisieren: [Standard](#lines-in-the-default-mode), [Organigramm](#lines-in-the-org-chart-mode), [Mindmap](#lines-in-the-mindmap-mode) oder [PERT](#links-in-the-pert-mode).

### Linien im Standardmodus {#lines-in-the-default-mode}

Im Standardmodus von Diagram können verschiedene Formen durch ["straight" (standardmäßig) oder "elbow"](lines/configuration_properties.md)-Linien in der erforderlichen Reihenfolge verbunden werden, um ein Schema eines bestimmten Prozesses zu erstellen.

Um einer Linie im Standardmodus von Diagram/Diagram Editor Text hinzuzufügen, verwenden Sie die Eigenschaft `text` des Objekts [lineTitle](/line_titles/).

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### Linien im Organigramm-Modus {#lines-in-the-org-chart-mode}

Der Organigramm-Modus von Diagram stellt ein Organigramm dar, das eine Reihe von Formen enthält, die durch ["elbow"-Linien](lines/configuration_properties.md) in hierarchischer Reihenfolge verbunden sind.

<iframe src="https://snippet.dhtmlx.com/98tzmzpg?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

Sie können die vertikale Richtung der Verbindung von Formen für die übergeordnete Form über das Konfigurationsattribut `dir: "vertical"` des Formobjekts festlegen.

### Linien im Mindmap-Modus {#lines-in-the-mindmap-mode}

Der Mindmap-Modus von Diagram dient zur Darstellung einer weiteren Art von hierarchischem Diagramm. Die Formen werden durch ["curved"-Linien](lines/configuration_properties.md) verbunden und um eine zentrale Form herum angeordnet.

<iframe src="https://snippet.dhtmlx.com/lo1vm0e8?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

Der Modus ist nützlich, wenn Sie ein zentrales Thema oder eine zentrale Idee darstellen möchten, die von den Zweigen der Unterthemen umgeben ist.

Die Anordnung der untergeordneten Formen relativ zur Wurzelform wird automatisch durch den Hauptalgorithmus festgelegt.
Um die Standardrichtung der untergeordneten Formen zu ändern, verwenden Sie die Konfigurationseigenschaft [`typeConfig`](api/diagram/typeconfig_property.md) bei der Initialisierung des Diagramms.

### Links im PERT-Modus {#links-in-the-pert-mode}

Der PERT-Modus von Diagram dient zur Darstellung von Sequenzen aus Aufgaben und Projekten sowie der Verbindungen zwischen ihnen. Formen der Typen `"task"`, `"milestone"` und `"project"` werden durch [`"links"`-Verbinder](lines/configuration_properties.md#properties-specific-for-links-in-the-pert-mode) verbunden.

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>


## Festlegen von Verbindungen zwischen Formen {#setting-connections-between-shapes}

Um Formen in Diagram zu verbinden, können Sie eine der folgenden zwei Methoden verwenden:

- **Verwendung von Linienobjekten**

Sie müssen separate Objekte angeben, die die Logik der Formverbindung beschreiben. Zum Beispiel:

~~~jsx
const data = [
    // Formen
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager" },
    { id: "3", text: "Technical Director" },
    { id: "4", text: "Manager" },
    { id: "5", text: "Technical Director" },
    // Verbinder
    { "id": "1-2", "from": "1", "to": "2", "type": "dash" },
    { "id": "1-3", "from": "1", "to": "3", "type": "dash" },
    { "id": "1-4", "from": "1", "to": "4", "type": "line" },
    { "id": "1-5", "from": "1", "to": "5", "type": "line" }
];
~~~

Die Eigenschaft `type` im Linienobjekt ermöglicht es Ihnen, für jede Linie einen individuellen Typ festzulegen.

:::note
Siehe [die vollständige Liste der Konfigurationseigenschaften eines Linienobjekts](lines/configuration_properties.md).
:::

- **Verwendung des Attributs `"parent"`**

:::note
Diese Methode funktioniert nicht im Standardmodus von Diagram/Diagram Editor.
:::

Sie können die Eigenschaft `parent` im Konfigurationsobjekt der Form angeben und die ID der übergeordneten Form als Wert festlegen:

~~~jsx
const data = [
    // Formen
    { id: "1", text: "Chairman & CEO" },
    { id: "2", text: "Manager", parent: "1" },
    { id: "3", text: "Technical Director", parent: "1" },
    { id: "4", text: "Manager", parent: "1" },
    { id: "5", text: "Technical Director", parent: "1" }
];
~~~

In diesem Fall haben alle Verbinder denselben Typ.

### Festlegen des Standard-Linientyps {#setting-the-default-line-type}

Sie können über den Parameter `lineType` der Eigenschaft [`lineConfig`](api/diagram/lineconfig_property.md) des Diagram-Konfigurationsobjekts einen gemeinsamen Typ für alle Verbindungslinien des Diagramms festlegen:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

Der Wert des Parameters `lineType` wird angewendet, wenn das [Linienobjekt](lines/configuration_properties.md) die Eigenschaft `type` nicht enthält.

### Festlegen des Verbindungstyps der Linie {#setting-the-connection-type-of-the-line}

Sie können den Verbindungstyp für die Linien des Diagramms über den Parameter `connectType` der Eigenschaft [`lineConfig`](api/diagram/lineconfig_property.md) des Diagram-Konfigurationsobjekts festlegen. Folgende Typen stehen zur Verfügung:

- `"elbow"` (der Standardtyp für den Standard- und den Organigramm-Modus von Diagram)
- `"straight"`
- `"curved"` (der Standardtyp für den Mindmap-Modus von Diagram). Beachten Sie, dass der Verbindungslinientyp `"curved"` nur im Mindmap-Modus von Diagram verwendet wird

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        connectType: "straight" // "elbow" | "straight" für den Standardmodus
    }
});
diagram.data.parse(data);
~~~

Der Wert des Parameters `connectType` wird angewendet, wenn das [Linienobjekt](lines/configuration_properties.md) die Eigenschaft `connectType` nicht enthält.
