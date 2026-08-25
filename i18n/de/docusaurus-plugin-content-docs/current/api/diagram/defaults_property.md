---
sidebar_label: defaults-Eigenschaft
title: defaults-Eigenschaft
description: Erfahren Sie mehr über die defaults-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# defaults

### Beschreibung {#description}

@short: Optional. Ein Objekt, das die Standardkonfiguration einer Form oder Linie festlegt

### Verwendung {#usage}

~~~jsx
defaults?: {
    [type: string]: object
};
~~~

### Parameter {#parameters}

Die Eigenschaft `defaults` ist ein Objekt, das eine Reihe von `key:value`-Paaren enthält, wobei *key* ein Typ einer Form oder Linie ist und *value* ein Objekt mit einer Reihe von Konfigurationseinstellungen der entsprechenden [Form](shapes/configuration_properties.md) oder [Linie](lines/configuration_properties.md) ist.

:::note
Sie können `type` und `id` nicht in der Standardkonfiguration einer Form/Linie definieren
:::

### Beispiel {#example}

~~~jsx {24}
const defaults = {
    // die Standardeinstellungen für alle Formen des Typs "rectangle"
    rectangle: {
        fill: "#CEEFE1",
        stroke: "#0AB169",
        strokeWidth: 2,
        width: 140,
        height: 140,
        text: "Default text"
    },
    // die Standardeinstellungen für alle Linien des Typs "line"
    line: {
        strokeWidth: 3,
        stroke: "#245CE0"
    },
    // die Standardeinstellungen für alle Linien des Typs "dash"
    dash: {
        strokeWidth: 3,
        stroke: "#245CE0"
    }
};

const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    defaults
});
~~~

:::note
Nachdem Sie die Standardeinstellungen für die Formen/Linien einzelner Typen definiert haben, können Sie diese Eigenschaften entweder weglassen oder ihre Werte beim [Vorbereiten eines Datensatzes](guides/loading_data.md#preparing-data-to-load) für die Formen/Linien dieser Typen neu definieren.
:::

**Changelog**: Die Möglichkeit, die Standardkonfiguration für Linien festzulegen, wurde in v4.2 hinzugefügt

**Verwandte Artikel**:

- [Standardkonfiguration einer Form festlegen](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape)
- [Vorschau von Formen festlegen](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)
