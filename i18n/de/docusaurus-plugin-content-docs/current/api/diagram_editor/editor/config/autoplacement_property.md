---
sidebar_label: autoplacement
title: autoplacement-Eigenschaft des Editors
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die autoplacement-Eigenschaft des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# autoplacement

### Beschreibung {#description}

@short: Optional. Ein Objekt mit Konfigurationseinstellungen für die automatische Platzierung von Formen

:::info
Die Eigenschaft `autoplacement` funktioniert nur im Standardmodus des Editors und nur für Formen. Sie funktioniert nicht, wenn Sie Gruppen oder Swimlanes verwenden.
:::

### Verwendung {#usage}

~~~ts
autoplacement?: {
    mode?: "direct" | "edges", // Standardmäßig "direct"
    graphPadding?: number, // Standardmäßig 200
    placeMode?: "orthogonal" | "radial", // Standardmäßig "orthogonal"
    itemPadding?: number, // Standardmäßig 20
    levelPadding?: number // Standardmäßig 20
};
~~~

### Parameter {#parameters}

Das Objekt `autoplacement` verfügt über die folgenden Parameter:

- `mode` – (optional) der Modus zum Verbinden von Formen, `"direct"` (Standardwert) oder `"edges"`
- `graphPadding` – (optional) legt den Abstand zwischen nicht verbundenen Diagrammen fest, Standardwert *200*
- `placeMode` – (optional) legt den Platzierungsmodus der Formen fest, `"orthogonal"` (Standardwert) oder `"radial"`
- `itemPadding` – (optional) minimaler Abstand zwischen Elementen (Mindestwert ist *1*), Standardwert *20*
- `levelPadding` – (optional) minimaler Abstand zwischen Hierarchieebenen (Mindestwert ist *1*), Standardwert *20*

### Standardkonfiguration {#default-config}

~~~jsx
autoplacement: {
    mode: "direct",
    graphPadding: 200,
    placeMode: "orthogonal",
    itemPadding: 20,
    levelPadding: 20
}
~~~

### Beispiel {#example}

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    autoplacement: {
        placeMode: "radial",
        mode: "direct",
        itemPadding: 10,
        levelPadding: 10,
        graphPadding: 100
    }
});

editor.parse(data);
~~~

## Modi der Verbindung von Formen {#modes-of-connecting-shapes}

### "direct"-Modus {#direct-mode}

Verbindungslinien ohne Pfeile werden „von Mitte zu Mitte" ausgerichtet. Sie sind gerade und diagonal.

![](/img/direct_mode.png)

### "edges"-Modus {#edges-mode}

Verbindungslinien werden „von Seite zu Seite" ausgerichtet.

:::info
Um den Linien Pfeile hinzuzufügen, geben Sie `forwardArrow: "filled"` oder `backArrow: "filled"` in der Konfiguration eines [Linienobjekts](lines/configuration_properties.md) an.
:::

Die Verbindungslinien im Modus `"edges"` können sein:

- entweder gerade (wenn Sie die Eigenschaft `connectType: "straight"` eines [Linienobjekts](lines/configuration_properties.md) festlegen)

![](/img/edges_straight_mode.png)

- oder um 90 Grad gekrümmt (wenn Sie die Eigenschaft `connectType: "elbow"` eines [Linienobjekts](lines/configuration_properties.md) festlegen)

![](/img/edges_mode.png)

## Modi der Platzierung von Formen {#modes-of-placement-of-shapes}

### "orthogonal"-Modus {#orthogonal-mode}

Formen werden entlang vertikaler und horizontaler Linien angeordnet

- `"orthogonal"`-Anordnung mit Linien im Modus `"direct"`

![](/img/direct_ortogonal.png)

- `"orthogonal"`-Anordnung mit Linien im Modus `"edges"`

![](/img/edges_ortogonal.png)

### "radial"-Modus {#radial-mode}

Formen werden auf imaginären Kreisen relativ zur zentralen Form angeordnet, d. h. zur Form mit den meisten Verbindungen

- `"radial"`-Anordnung mit Linien im Modus `"direct"`

![](/img/direct_radial.png)

- `"radial"`-Anordnung mit Linien im Modus `"edges"`

![](/img/edges_radial.png)

**Changelog**:

- Die Parameter `itemPadding` und `levelPadding` wurden in v6.1.3 hinzugefügt
- Der Parameter `placeMode` wurde in v5.0 hinzugefügt
- Die Eigenschaft `autoplacement` wurde in v3.0 hinzugefügt

**Verwandtes Beispiel**: [Diagram editor. Standardmodus. Radialer Auto-Layout-Algorithmus](https://snippet.dhtmlx.com/f0cespbk)
