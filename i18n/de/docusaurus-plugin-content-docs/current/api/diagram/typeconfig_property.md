---
sidebar_label: typeConfig
title: typeConfig-Eigenschaft
description: Erfahren Sie mehr über die typeConfig-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# typeConfig

:::info
Die Eigenschaft funktioniert im Editor nicht
:::

### Beschreibung {#description}

@short: Optional. Ein Objekt, das Konfigurationseinstellungen für Diagram im Mindmap- und PERT-Modus bereitstellt

Für Diagram im Mindmap-Modus legt die Eigenschaft `typeConfig` die Ausrichtung der Formen fest. Wird die Eigenschaft nicht angewendet, werden die untergeordneten Formen automatisch gemäß dem Hauptalgorithmus angeordnet.

Für Diagram im PERT-Modus ermöglicht die Eigenschaft `typeConfig` die Festlegung des Formats für die Darstellung von Daten in den Aufgabenformen.

### Verwendung {#usage}

- für den Mindmap-Modus

~~~jsx
typeConfig?: {
    direction?: "left" | "right";
}

// oder
typeConfig?: {
    side?: {
        left?: string[],
        right?: string[]
    }
}
~~~

- für den PERT-Modus

~~~jsx
typeConfig?: {
    dateFormat?: string; // %d-%m-%Y standardmäßig
}
~~~

### Parameter {#parameters}

Das Objekt `typeConfig` kann einen der folgenden Parameter enthalten:

- für den Mindmap-Modus:
    - `direction` - (optional) legt die Ausrichtung des Graphen fest:
      - `"left"` - platziert die untergeordneten Formen des Graphen links von der Root-Form
      - `"right"` - platziert die untergeordneten Formen des Graphen rechts von der Root-Form
    - `side` - (optional) ein Objekt, das die verbindliche Ausrichtung für die angegebenen untergeordneten Formen festlegt. Das Objekt enthält eine Reihe von *Schlüssel:Wert*-Paaren, wobei *Schlüssel* die Ausrichtung der Formen (left, right) und *Wert* ein Array mit den IDs der Formen ist
- für den PERT-Modus:
    - `dateFormat` - (optional) legt das Format für die Darstellung von Daten in den Formen des Typs `task` fest. Wirkt sich auf die Darstellung von Daten in der Benutzeroberfläche aus

:::tip
Sie können entweder das Attribut `direction` oder das Attribut `side` für Diagram im Mindmap-Modus verwenden. Verwenden Sie nicht beide gleichzeitig!
:::

### Beispiel {#example}

- für den Mindmap-Modus:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap",
    typeConfig: {
        direction: "right"
    }
});
~~~

oder

~~~jsx {3-8}
const diagram = new dhx.Diagram("diagram_container", {
    type: "mindmap",
    typeConfig: {
        side: {
            left: ["2", "3"],
            right: ["4", "5"]
        }
    }
});
~~~

Beachten Sie, dass die übrigen untergeordneten Formen, die nicht in der Option `side` festgelegt sind, automatisch gemäß dem Hauptalgorithmus angeordnet werden.

- für den PERT-Modus:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

**Changelog:**

- Die Eigenschaft `dateFormat` für den PERT-Modus wurde in v6.1 hinzugefügt
- Hinzugefügt in v3.1.

**Verwandter Artikel:** [Anordnung von Formen im Mindmap-Modus von Diagram](guides/diagram/configuration.md#arranging-shapes-in-the-mindmap-mode-of-diagram)

**Verwandte Beispiele:**

- [Diagram. Mindmap-Modus. Ausrichtung ("left" | "right")](https://snippet.dhtmlx.com/pzllujx3)
- [Diagram. Mindmap-Modus. Benutzerdefinierte Seiten](https://snippet.dhtmlx.com/atto9ckg)
- [Diagram und Gantt. PERT-Diagramm. Vollständige Integration](https://snippet.dhtmlx.com/gcnx4a9h)
