---
sidebar_label: defaults
title: defaults-Eigenschaft des Editors
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die defaults-Eigenschaft des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# defaults

### Beschreibung {#description}

@short: Optional. Ein Objekt, das die Standardkonfiguration einer Form oder einer Linie festlegt

### Verwendung {#usage}

~~~jsx
defaults?: {
    [type: string]: object
};
~~~

### Parameter {#parameters}

Das Objekt `defaults` kann eine Reihe von `key:value`-Paaren enthalten, wobei *key* der Typ einer Form oder Linie ist und *value* eine Reihe von Konfigurationseinstellungen der entsprechenden [Form](shapes/configuration_properties.md) oder [Linie](lines/configuration_properties.md) ist.

:::note
Die Attribute `type` und `id` können in der Standardkonfiguration einer Form/Linie nicht definiert werden.
:::

### Beispiel {#example}

~~~jsx {24}
const defaults = {
    // Die Standardeinstellungen für alle Formen des Typs "rectangle"
    rectangle: {
        fill: "#CEEFE1",
        stroke: "#0AB169",
        strokeWidth: 2,
        width: 140,
        height: 140,
        text: "Default text"
    },
    // Die Standardeinstellungen für alle Linien des Typs "line"
    line: {
        strokeWidth: 3,
        stroke: "#245CE0"
    },
    // Die Standardeinstellungen für alle Linien des Typs "dash"
    dash: {
        strokeWidth: 3,
        stroke: "#245CE0"
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    defaults
});
~~~

:::info
Nachdem Sie die Standardeinstellungen für die Form/Linie einzelner Typen festgelegt haben, können Sie diese Eigenschaften beim [Vorbereiten eines Datensatzes](guides/loading_data.md#preparing-data-to-load) für die Formen/Linien dieser Typen entweder weglassen oder ihre Werte neu definieren.
:::

**Changelog**: Die Möglichkeit, die Standardkonfiguration für Linien festzulegen, wurde in v4.2 hinzugefügt

**Verwandte Artikel**:

- [Festlegen der Standardkonfiguration einer Form](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- [Festlegen der Vorschau von Formen](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)

**Verwandtes Beispiel**: [Diagram editor. Festlegen des Standard-Linientyps (Connector). Versuchen Sie, Form A mit Form B zu verbinden](https://snippet.dhtmlx.com/22abzn5m)
