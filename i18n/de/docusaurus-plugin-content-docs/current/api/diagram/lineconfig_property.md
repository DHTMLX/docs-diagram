---
sidebar_label: lineConfig-Eigenschaft
title: lineConfig-Eigenschaft
description: Erfahren Sie mehr über die lineConfig-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwickler-Guides und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# lineConfig

### Beschreibung {#description}

@short: Optional. Ein Objekt mit der Standardkonfiguration für die Verbindungslinien

### Verwendung {#usage}

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // der Typ "curved" wird nur im Mindmap-Modus verwendet
};
~~~

### Parameter {#parameters}

Das Objekt `lineConfig` enthält die folgenden Parameter:

- `lineType` - (optional) der Standardtyp einer Verbindungslinie. Der Wert wird angewendet, wenn das Linienobjekt die Eigenschaft `"type"` nicht enthält
- `lineGap` - (optional) legt den Abstand zur rechtwinkligen Biegung einer Verbindungslinie fest
- `connectType` - (optional) legt den Verbindungstyp der Linien fest: `"elbow"` | `"straight"` | `"curved"` (der Typ `"curved"` wird nur im Mindmap-Diagram-Modus verwendet). Der Wert wird angewendet, wenn das Linienobjekt die Eigenschaft `"connectType"` nicht enthält

:::info
Die Werte der Einstellungen `lineType` und `connectType` werden angewendet, wenn das Linienobjekt keine identischen Einstellungen enthält.
:::

### Standardkonfiguration {#default-config}

~~~jsx
lineConfig: {
    lineType: "line",
    lineGap: 10
}
~~~

Der Parameter `connectType` hat die folgenden Standardwerte:

- `"elbow"` - für die Diagram-Modi Standard und Organigramm
- `"curved"` - für den Mindmap-Diagram-Modus (dieser Typ wird nur im Mindmap-Diagram-Modus verwendet)

### Beispiel {#example}

~~~jsx {2-7}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineGap: 50,
        connectType: "straight"
    },
    // weitere Konfigurationsparameter
});
~~~

Das Ergebnis der Anwendung der Eigenschaft `lineGap` ist im folgenden Bild dargestellt:

![](/img/linegap_config.png)

**Verwandtes Beispiel**: [Diagram. Standardmodus. Aktivitätsdiagramm](https://snippet.dhtmlx.com/a9t2z2dt)

**Changelog**:

- Der Parameter `connectType` wurde in v6.1 hinzugefügt
- Der Parameter `lineGap` wurde in v5.0 hinzugefügt (siehe den [Migrationsartikel](migration.md#42---50))
- Hinzugefügt in v4.2

**Verwandter Artikel**: [Verbindungen zwischen Formen festlegen](/lines/#setting-connections-between-shapes)
