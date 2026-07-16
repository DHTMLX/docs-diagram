---
sidebar_label: autoPlace()-Methode
title: autoPlace-Methode
description: Erfahren Sie mehr über die autoPlace-Methode in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# autoPlace()

:::info
Die Methode `autoPlace()` funktioniert nur im Standardmodus des Diagramms und nur für Formen
:::

### Beschreibung {#description}

@short: Ordnet verbundene Diagrammformen automatisch in einer hierarchischen Struktur an

### Verwendung {#usage}

~~~ts
autoPlace(config?: object): void;
~~~

### Parameter {#parameters}

- `config` - (optional) ein Objekt mit Konfigurationseinstellungen für die automatische Platzierung. Wenn nicht angegeben, werden die Standardeinstellungen angewendet. Hier können Sie folgende Parameter festlegen:
    - `mode` - (optional) der Modus zum Verbinden von Formen, `"direct"` (Standard) oder `"edges"`
    - `graphPadding` - (optional) legt den Abstand zwischen nicht verbundenen Diagrammen fest, standardmäßig *200*
    - `placeMode` - (optional) legt den Platzierungsmodus der Formen fest, `"orthogonal"` (Standard) oder `"radial"`
    - `itemPadding` - (optional) minimaler Abstand zwischen Elementen (der Mindestwert ist *1*), standardmäßig *20*
    - `levelPadding` - (optional) minimaler Abstand zwischen Hierarchieebenen (der Mindestwert ist *1*), standardmäßig *20*

### Beispiel {#example}

~~~jsx {4-7}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
    mode: "edges",
    placeMode: "radial"
});
~~~

## Verbindungsmodi der Formen {#modes-of-connecting-shapes}

### "direct"-Modus {#direct-mode}

Verbindungslinien ohne Pfeile werden "von Mitte zu Mitte" ausgerichtet; sie sind gerade und diagonal.

![](/img/direct_mode.png)

### "edges"-Modus {#edges-mode}

Verbindungslinien werden "von Seite zu Seite" ausgerichtet.

:::note
Wenn `fromSide` und `toSide` für einen Link festgelegt sind, behält der Autoplatzierungsalgorithmus diese Werte bei, verwendet sie jedoch nicht bei der Berechnung der Platzierung. Die entscheidenden Eigenschaften, die Links definieren, sind `from` und `to`, während `fromSide` und `toSide` automatisch vom Algorithmus berechnet werden.
:::

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
- Die Eigenschaft `autoplacement` wurde in v3.0 hinzugefügt

**Verwandter Artikel**: [Formen automatisch anordnen](guides/manipulating_items.md#arranging-shapes-automatically)

**Verwandte Beispiele**:
- [Diagram. Standardmodus. Radiale automatische Platzierung mit Abstandsoptionen](https://snippet.dhtmlx.com/huut0l1s)
- [Diagram. Standardmodus. Automatische Platzierung](https://snippet.dhtmlx.com/f3uekgjw)
