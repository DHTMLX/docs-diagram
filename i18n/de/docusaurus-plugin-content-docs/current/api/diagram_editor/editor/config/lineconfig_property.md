---
sidebar_label: lineConfig-Eigenschaft
title: lineConfig-Eigenschaft
description: Sie können mehr über die lineConfig-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# lineConfig

### Beschreibung {#description}

@short: Optional. Ein Objekt mit der Standardkonfiguration für die Connector-Linien

:::info
Die Einstellungen `lineType`, `lineDirection` und `arrowsHidden` werden auf die neuen Connector-Linien angewendet, die über den Editor hinzugefügt werden.
:::

### Verwendung {#usage}

~~~jsx
lineConfig?: {
    lineType?: "dash" | "line",
    lineDirection?: "backArrow" | "forwardArrow",
    arrowsHidden?: boolean,
    lineGap?: number,
    connectType?: "elbow" | "straight" | "curved" // der Typ "curved" wird nur im Mindmap-Modus verwendet
};
~~~

### Parameter {#parameters}

Das Objekt `lineConfig` enthält die folgenden Parameter:

- `lineType` - (optional) der Standardtyp der neuen Connector-Linien. Der Wert wird angewendet, wenn das Linienobjekt nicht die Eigenschaft `"type"` enthält
- `lineDirection` - (optional) die Richtung der neuen Connector-Linien
- `arrowsHidden` - (optional) legt fest, ob die Pfeile der neuen Connector-Linien ausgeblendet werden sollen
- `lineGap` - (optional) legt den Abstand zur rechtwinkligen Biegung einer Connector-Linie fest
- `connectType` - (optional) legt den Verbindungstyp der Linien fest: `"elbow"` | `"straight"` | `"curved"` (der Typ `"curved"` wird nur im Mindmap-Diagram-Modus verwendet). Der Wert wird angewendet, wenn das Linienobjekt nicht die Eigenschaft `"connectType"` enthält

:::note
Die Parameter `lineDirection`, `arrowsHidden` und `lineGap` funktionieren nur im Standardmodus des Editors (*type: `"default"`*)
:::

### Standardkonfiguration {#default-config}

~~~jsx
lineConfig: {
    lineType:"line",
    lineDirection: "forwardArrow",
    arrowsHidden: false,
    lineGap: 10
}
~~~

Der Parameter `connectType` hat folgende Standardwerte:

- `"elbow"` - für den Standardmodus und den Organigramm-Modus
- `"curved"` - für den Mindmap-Modus (dieser Typ wird nur im Mindmap-Modus verwendet)

### Beispiel {#example}

~~~jsx {2-9}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineType: "dash",
        lineDirection: "backArrow",
        arrowsHidden: true,
        lineGap: 50,
        connectType: "straight"
    },
    // weitere Konfigurationsparameter
});
~~~

Das Ergebnis der Anwendung der Eigenschaft `lineGap` wird im folgenden Bild dargestellt:

![](/img/linegap_config.png)

**Changelog:**

- Der Parameter `connectType` wurde in v6.1 hinzugefügt
- Der Parameter `lineGap` wurde in v5.0 hinzugefügt (siehe den [Migrationsartikel](migration.md#42---50))
- Hinzugefügt in v4.2

**Verwandtes Beispiel:** [Diagram editor. Festlegen des Standard-Linientyps (Connector). Verbinden Sie Form A mit Form B](https://snippet.dhtmlx.com/22abzn5m)
