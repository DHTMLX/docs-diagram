---
sidebar_label: Konfiguration
title: Diagram-Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die Diagram-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Diagram-Konfiguration {#diagram-configuration}

DHTMLX Diagram bietet eine Vielzahl von Konfigurationsoptionen. Sie können die Skalierung von Diagram ändern, den Standardtyp von Formen und Linien festlegen, Abstände zwischen Formen einstellen, die Auswahl aktivieren und eine Symbolleiste mit Icons für die Formen einrichten.

### Festlegen des Diagram-Modus {#setting-the-diagram-mode}

Sie können zwischen den folgenden Diagram-Modi wählen: `"default"`, `"org"`, `"mindmap"`, `"pert"`. Eine ausführliche Beschreibung finden Sie im Artikel [Diagram-Übersicht](/). Den gewünschten Typ können Sie über die Konfigurationsoption [type](api/diagram/type_property.md) wie folgt festlegen:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // `type: "org"` | `type: "mindmap"` | `type: "pert"`
});
diagram.data.parse(data);
~~~

### Festlegen des Standard-Formtyps {#setting-the-default-shape-type}

Über das Attribut [`defaultShapeType`](api/diagram/defaultshapetype_property.md) des Diagram-Konfigurationsobjekts können Sie den Standardtyp für alle Formen festlegen:

~~~jsx {3}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // or type: "org", or type: "mindmap"
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

Dieser Wert wird angewendet, wenn das Konfigurationsobjekt der Form die Eigenschaft `type` nicht enthält.

Die Standardtypen der Formen sind:

- `"rectangle"` - für Diagram im Standardmodus
- `"card"`  - für Diagram im Standardmodus oder im Organigramm-Modus
- `"topic"` - für Diagram im Mindmap-Modus
- `"task"` - für Diagram im PERT-Modus

## Festlegen des Standard-Linientyps {#setting-the-default-line-type}

Über den Parameter `lineType` der Eigenschaft [`lineConfig`](api/diagram/lineconfig_property.md) des Diagram-Konfigurationsobjekts können Sie einen gemeinsamen Typ für alle Verbindungslinien von Diagram festlegen:

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineType: "dash" // "dash" | "line"
    }
});
diagram.data.parse(data);
~~~

Dieser Wert wird angewendet, wenn das Linienobjekt die Eigenschaft `type` nicht enthält.

## Festlegen der Standardkonfiguration einer Form {#setting-the-default-configuration-of-a-shape}

So müssen Sie beim Vorbereiten der Daten für das Laden in Diagram nicht mit einem großen Datensatz arbeiten. Sie können die Standardkonfiguration für alle Formen und Linien der benötigten Typen festlegen und dadurch die Anzahl der Einträge in Ihrem Code reduzieren.

Verwenden Sie dazu die Eigenschaft [`defaults`](api/diagram/defaults_property.md) des Diagram-Konfigurationsobjekts:

<iframe src="https://snippet.dhtmlx.com/7bn52dl1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Das Objekt `defaults` enthält eine Reihe von `key:value`-Paaren, wobei der *key* der Typ einer Form oder Linie ist und der *value* die entsprechende Standardkonfiguration der Form oder Linie darstellt.

:::note
Die Attribute `type` und `id` können in der Standardkonfiguration einer Form/Linie nicht definiert werden
:::

Sehen Sie sich die vollständige Liste der Konfigurationseigenschaften einer [Form](shapes/configuration_properties.md) und einer [Linie](lines/configuration_properties.md) an.

## Anordnen von Formen im Mindmap-Modus von Diagram {#arranging-shapes-in-the-mindmap-mode-of-diagram}

Im Mindmap-Modus von Diagram wird die Anordnung der untergeordneten Formen relativ zur Wurzelform automatisch durch den Hauptalgorithmus festgelegt.
Um die Standardrichtung der untergeordneten Formen zu ändern, verwenden Sie bei der Initialisierung von Diagram die Konfigurationseigenschaft [`typeConfig`](api/diagram/typeconfig_property.md).

:::note
Die Konfigurationseigenschaft `typeConfig` ist im Diagram Editor nicht verfügbar
:::

Mit dieser Eigenschaft können Sie:

- [die Richtung für alle untergeordneten Formen gleichzeitig festlegen](#setting-direction-for-all-child-shapes)
- [eine individuelle Richtung für bestimmte untergeordnete Formen angeben](#setting-direction-for-individual-child-shape)

### Festlegen der Richtung für alle untergeordneten Formen {#setting-direction-for-all-child-shapes}

Verwenden Sie das Attribut `direction` der Eigenschaft [`typeConfig`](api/diagram/typeconfig_property.md), um die untergeordneten Formen rechts/links von der Wurzelform anzuordnen:

<iframe src="https://snippet.dhtmlx.com/pzllujx3?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Festlegen der Richtung für eine einzelne untergeordnete Form {#setting-direction-for-individual-child-shape}

Über das Attribut `side` der Eigenschaft [`typeConfig`](api/diagram/typeconfig_property.md) können Sie die verbindliche Richtung für bestimmte untergeordnete Formen festlegen. Das Attribut ist ein Objekt, das eine Reihe von `key:value`-Paaren enthält, wobei *key* die Richtung der Formen (left, right) und *value* ein Array mit den IDs der Formen ist.

<iframe src="https://snippet.dhtmlx.com/atto9ckg?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Andere untergeordnete Formen, die nicht in der Option side festgelegt sind, werden automatisch gemäß dem Hauptalgorithmus angeordnet.

## Festlegen des Datumsformats im PERT-Modus von Diagram {#setting-date-format-in-the-pert-mode-of-diagram}

Im PERT-Modus von Diagram können Sie das gewünschte Format für die Anzeige von Datumsangaben in Formen des Typs `task` festlegen. Verwenden Sie dazu das Attribut `dateFormat` der Eigenschaft [`typeConfig`](api/diagram/typeconfig_property.md):

~~~jsx {3-5}
const diagram = new dhx.Diagram("diagram_container", {
    type: "pert",
    typeConfig: {
        dateFormat: "%d/%m/%Y"
    }
});
~~~

## Positionierung von Diagram und Formen {#positioning-diagram-and-shapes}

Über das Attribut [`margin`](api/diagram/margin_property.md) des Diagram-Konfigurationsobjekts können Sie die Position von Diagram auf einer Seite festlegen und Abstände für Formen einstellen:

<iframe src="https://snippet.dhtmlx.com/bwe9vm6i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Konfigurieren der automatischen Platzierung für Formen {#configuring-autoplacement-for-shapes}

Mit der DHTMLX Diagram-Bibliothek können Sie Einstellungen konfigurieren, um verbundene Formen von Diagram automatisch in einer hierarchischen Struktur anzuordnen. Sie können die Eigenschaft [`autoplacement`](api/diagram/autoplacement_property.md) im Konfigurationsobjekt von Diagram angeben und den Modus für das Verbinden von Formen sowie den Abstand zwischen nicht verbundenen Diagram-Instanzen konfigurieren:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100,
        placeMode: "radial",
        itemPadding: 10,
        levelPadding: 10
    }
});

diagram.data.parse(data);

diagram.autoPlace();
~~~

Die Eigenschaft kann die folgenden Optionen enthalten:

- `mode` - (*string*) optional, der Modus für das Verbinden von Formen, `"direct"` (Standard) oder `"edges"`
- `graphPadding` - (*number*) optional, legt den Abstand zwischen nicht verbundenen Diagram-Instanzen fest, Standardwert *200*
- `placeMode` - (*string*) optional, legt den Platzierungsmodus der Formen fest, `"orthogonal"` (Standard) oder `"radial"`
- `itemPadding` - (*number*) optional, minimaler Abstand zwischen Elementen (Mindestwert *1*), Standardwert *20*
- `levelPadding` - (*number*) optional, minimaler Abstand zwischen Hierarchieebenen (Mindestwert *1*), Standardwert *20*

:::note
Die automatische Platzierung wird erst angewendet, nachdem die Methode [`autoPlace()`](api/diagram/autoplace_method.md) aufgerufen wurde. Sie funktioniert nur im Standardmodus von Diagram und nur für Formen. Die automatische Platzierung funktioniert nicht, wenn Sie Gruppen oder Swimlanes verwenden.
:::

![Radiale automatische Platzierung mit Abstandsoptionen](/img/radial_autoplacement.png)

**Verwandtes Beispiel**: [Diagram. Standardmodus. Radiale automatische Platzierung mit Abstandsoptionen](https://snippet.dhtmlx.com/huut0l1s)

## Anpassen der Diagram-Skalierung {#adjusting-the-diagram-scale}

Bei Bedarf können Sie Diagram skalieren, damit es zu Ihrer Anwendung passt. Dies können Sie mithilfe der Option [`scale`](api/diagram/scale_property.md) tun.
Standardmäßig ist der Wert auf 1 gesetzt. Um in Diagram hineinzuzoomen, setzen Sie die Option entsprechend auf einen Wert größer als 1, und um herauszuzoomen, auf einen Wert kleiner als 1.

<iframe src="https://snippet.dhtmlx.com/9h89c3gl?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Festlegen der Symbolleiste für Formen {#setting-toolbar-for-shapes}

Mit DHTMLX Diagram können Sie eine Symbolleiste mit Icons für Diagram-Formen festlegen, um die Interaktion mit ihnen zu vereinfachen. Sie können die Formen-Symbolleiste über die Option [`toolbar`](api/diagram/toolbar_property.md) des Diagram-Konfigurationsobjekts aktivieren:

<iframe src="https://snippet.dhtmlx.com/4if395hd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Aktivieren der Elementauswahl {#enabling-items-selection}

Über das Attribut [`select`](api/diagram/select_property.md) des Diagram-Konfigurationsobjekts können Sie die Auswahl von Elementen in Diagram aktivieren. Nachdem Sie die Auswahl in Diagram aktiviert haben, können Sie die Selection-Objekt-API verwenden, um [mit der Elementauswahl zu arbeiten](guides/manipulating_items.md#selecting-items).

:::note
[Der vordefinierte Satz von Events](/api/selection/#events) des Selection-Objekts kann Ihnen helfen, die Verarbeitung des Diagram-Verhaltens beim Auswählen/Abwählen von Elementen zu definieren
:::

<iframe src="https://snippet.dhtmlx.com/jyoxn5h7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
