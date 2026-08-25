---
sidebar_label: autoplacement-Eigenschaft
title: autoplacement-Eigenschaft
description: Erfahren Sie mehr über die autoplacement-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# autoplacement

### Beschreibung {#description}

@short: Optional. Ein Objekt mit Konfigurationseinstellungen für die automatische Platzierung von Formen

:::info
Die Eigenschaft `autoplacement` funktioniert nur im Standardmodus des Diagramms und nur für Formen. Sie funktioniert nicht, wenn Sie Gruppen oder Swimlanes verwenden.

Die automatische Platzierung wird erst angewendet, nachdem die Methode [`autoPlace()`](api/diagram/autoplace_method.md) angewendet wurde.
:::

### Verwendung {#usage}

~~~ts
autoplacement?: {
    mode?: "direct" | "edges", // standardmäßig "direct"
    graphPadding?: number, // standardmäßig 200
    placeMode?: "orthogonal" | "radial", // standardmäßig "orthogonal"
    itemPadding?: number, // standardmäßig 20
    levelPadding?: number // standardmäßig 20
};
~~~

### Parameter {#parameters}

Das Objekt `autoplacement` verfügt über die folgenden Parameter:

- `mode` - (optional) der Modus zum Verbinden von Formen, `"direct"` (Standard) oder `"edges"`
- `graphPadding` - (optional) legt den Abstand zwischen zwei oder mehr nicht verbundenen Diagrammen fest, standardmäßig *200*
- `placeMode` - (optional) legt den Platzierungsmodus der Formen fest, `"orthogonal"` (Standard) oder `"radial"`
- `itemPadding` - (optional) minimaler Abstand zwischen Elementen (der Mindestwert ist *1*), standardmäßig *20*
- `levelPadding` - (optional) minimaler Abstand zwischen Hierarchieebenen (der Mindestwert ist *1*), standardmäßig *20*

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
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        placeMode: "radial",
        mode: "direct",
        itemPadding: 10,
        levelPadding: 10,
        graphPadding: 100
    }
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

## Verbindungsmodi der Formen {#modes-of-connecting-shapes}

### "direct"-Modus {#direct-mode}

Verbindungslinien ohne Pfeile werden "von Mitte zu Mitte" ausgerichtet. Sie sind gerade und diagonal.

![](/img/direct_mode.png)

### "edges"-Modus {#edges-mode}

Verbindungslinien werden "von Seite zu Seite" ausgerichtet.

:::info
Um den Linien Pfeile hinzuzufügen, geben Sie `forwardArrow: "filled"` oder `backArrow: "filled"` in der Konfiguration eines [Linienobjekts](lines/configuration_properties.md) an.
:::

Die Verbindungslinien im `"edges"`-Modus können sein:

- entweder gerade (wenn Sie die Eigenschaft `connectType: "straight"` eines [Linienobjekts](lines/configuration_properties.md) festlegen)

![](/img/edges_straight_mode.png)

- oder 90-Grad-gebogen (wenn Sie die Eigenschaft `connectType: "elbow"` eines [Linienobjekts](lines/configuration_properties.md) festlegen)

![](/img/edges_mode.png)

## Platzierungsmodi der Formen {#modes-of-placement-of-shapes}

### "orthogonal"-Modus {#orthogonal-mode}

Formen werden entlang vertikaler und horizontaler Linien angeordnet

- `"orthogonal"`-Anordnung mit Linien im `"direct"`-Modus

![](/img/direct_ortogonal.png)

- `"orthogonal"`-Anordnung mit Linien im `"edges"`-Modus

![](/img/edges_ortogonal.png)

### "radial"-Modus {#radial-mode}

Formen werden auf gedachten Kreisen relativ zur zentralen Form angeordnet, d. h. der Form mit den meisten Verbindungen

- `"radial"`-Anordnung mit Linien im `"direct"`-Modus

![](/img/direct_radial.png)

- `"radial"`-Anordnung mit Linien im `"edges"`-Modus

![](/img/edges_radial.png)

**Changelog**:

- Die Parameter `itemPadding` und `levelPadding` wurden in v6.1.3 hinzugefügt
- Der Parameter `placeMode` wurde in v5.0 hinzugefügt

**Verwandte Artikel**:

- [Automatische Platzierung für Formen konfigurieren](guides/diagram/configuration.md#configuring-autoplacement-for-shapes)
- [Formen automatisch anordnen](guides/manipulating_items.md#arranging-shapes-automatically)

**Verwandte Beispiele**:

- [Diagram. Standardmodus. Radiale automatische Platzierung mit Abstandsoptionen](https://snippet.dhtmlx.com/huut0l1s)
- [Diagram. Standardmodus. Anordnen eines generierten radialen Datensatzes mit automatischer Platzierung](https://snippet.dhtmlx.com/rwsime82)
