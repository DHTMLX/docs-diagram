---
sidebar_label: Grundlegende Formensätze
title: Grundlegende Formensätze
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die grundlegenden Formensätze. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Grundlegende Formensätze

Die DHTMLX-Diagram-Bibliothek bietet Ihnen Formensätze, mit denen Sie Ihr Diagramm erstellen können. Jeder Diagram-Modus – [Standard](#shapes-in-the-default-mode), [Organigramm](#shapes-in-the-org-chart-mode), [Mindmap](#shapes-in-the-mindmap-mode) und [PERT](#shapes-in-the-pert-mode) – verfügt über einen *Basissatz* von Formtypen.

:::tip
Sie können eine Form eines beliebigen Typs in ein Diagramm einfügen, das in einem beliebigen Modus initialisiert wurde. Verwenden Sie den Namen der gewünschten Form als Wert des Attributs `type` innerhalb des Formobjekts, während Sie [einen Datensatz zum Laden in das Diagramm vorbereiten](guides/loading_data.md#preparing-data-to-load).
:::

Siehe [die vollständige Liste der Konfigurationseigenschaften eines Formobjekts](shapes/configuration_properties.md).

## Formen im Standardmodus {#shapes-in-the-default-mode}

Im `default`-Modus von Diagram umfasst der Basissatz **Flussdiagramm**-Formen. Sehen Sie sich die verfügbaren Typen von Flussdiagramm-Formen an:

![](/img/flowshapes_types.png)

Außerdem gibt es das Element `"text"`, das einfachen Text darstellt, der in einem Diagramm als Form verwendet und mit anderen Formen verbunden werden kann.

![](/img/text_item.png)

**Verwandtes Beispiel**: [Diagram Editor. Standardmodus. Breites Flussdiagramm](https://snippet.dhtmlx.com/4d4k3o8p)

:::note
Sie können die Formen des Diagramms im Standardmodus gruppieren. [Sehen Sie sich den zugehörigen Leitfaden an](/groups/).
:::

### Eigenschaften {#properties}

Informieren Sie sich über die Konfigurationseigenschaften speziell für [Formen im `default`-Modus von Diagram](shapes/configuration_properties.md#properties-specific-for-the-default-mode) und für [**Flussdiagramm-Formen** und das Element `"text"`](shapes/configuration_properties.md#properties-specific-for-text-topic-and-flow-chart-shapes).

## Formen im Organigramm-Modus {#shapes-in-the-org-chart-mode}

Im **Organigramm**-Modus von Diagram umfasst der Basissatz zwei Formtypen: `"card"` und `"img-card"`.

Jede Form vom Typ `"card"` besitzt einen Text und eine farbige Kopfzeile. Formen auf derselben Ebene haben Kopfzeilen derselben Farbe. Beispiele für `"card"`-Formen sehen Sie im folgenden Diagramm vom Typ Organigramm:

![](/img/orgchart_card_shapes.png)

**Verwandtes Beispiel**: [Diagram. Organigramm-Modus. Grundlegende Initialisierung](https://snippet.dhtmlx.com/5ign6fyy?mode=result)

Der Typ `"img-card"` kann verwendet werden, um Formen mit Bildern hinzuzufügen. Vergessen Sie nicht, Bilder für die Karten über das Attribut `img` des Formobjekts anzugeben. Das folgende Organigramm wurde mit Formen vom Typ `"img-card"` erstellt:

![](/img/orgchart_imgcard_shapes.png)

**Verwandtes Beispiel**: [Diagram Editor. Organigramm-Modus. Grundlegende Initialisierung](https://snippet.dhtmlx.com/og4qm3ja?mode=result)

### Eigenschaften {#properties-1}

Informieren Sie sich über die Konfigurationseigenschaften speziell für [Formen im **Organigramm**-Modus von Diagram](shapes/configuration_properties.md#properties-specific-for-the-org-chart-mode), [die `"card"`-Formen](shapes/configuration_properties.md#properties-specific-for-card-shapes)
und [die `"img-card"`-Formen](shapes/configuration_properties.md#properties-specific-for-img-card-shapes).

## Formen im Mindmap-Modus {#shapes-in-the-mindmap-mode}

Im `mindmap`-Modus von Diagram ist der Formtyp `"topic"` der grundlegende Typ. Jede Form besitzt einen Text und eine farbige Umrandung. Die Farbe der Umrandung hängt von der Ebene ab, zu der die Form gehört. Beispiele für `"topic"`-Formen sehen Sie im folgenden Diagramm vom Typ Mindmap:

![](/img/mindmap_basic.png)

**Verwandtes Beispiel**: [Diagram. Mindmap-Modus. Grundlegende Initialisierung](https://snippet.dhtmlx.com/3igf1gd5)

### Eigenschaften {#properties-2}

Informieren Sie sich über die Konfigurationseigenschaften speziell für [Formen im `mindmap`-Modus von Diagram](shapes/configuration_properties.md#properties-specific-for-the-mindmap-mode) und für [die `"topic"`-Formen](shapes/configuration_properties.md#properties-specific-for-text-topic-and-flow-chart-shapes).

## Formen im PERT-Modus {#shapes-in-the-pert-mode}

Die grundlegenden Formtypen im **PERT**-Modus von Diagram sind:

- der Typ `"task"` - eine Form mit einer Kopfzeile, die Termine und Dauer anzeigt:

![](/img/pert_task_shape.png)

- der Typ `"milestone"` - eine Form ohne Dauer, die einen wichtigen Punkt des Projekts kennzeichnet:

![](/img/pert_milestone_shape.png)

- der Typ `"project"` - ein Container, der verwendet wird, um [die Formen der Typen `"task"` und `"milestone"` zu gruppieren](/groups/#grouping-shapes-in-the-pert-mode):

![](/img/pert_project_group.png)


**Verwandtes Beispiel**: [Diagram. PERT-Diagramm. Initialisierung ](https://snippet.dhtmlx.com/4h5fi7xd)

### Eigenschaften {#properties-3}

Informieren Sie sich über die Konfigurationseigenschaften speziell für [die `"task"`-Formen](shapes/configuration_properties.md#properties-specific-for-task-shapes), [die `"milestone"`-Formen](shapes/configuration_properties.md#properties-specific-for-milestone-shapes) und [die `"project"`-Gruppe](groups/configuration_properties.md#properties-specific-for-project-object).

## Festlegen des Formtyps {#setting-the-type-of-a-shape}

Um den Typ einer Form festzulegen, verwenden Sie die Eigenschaft [`type`](shapes/configuration_properties.md) innerhalb des Formobjekts, während Sie eine entsprechende JSON-Struktur zum Laden in das Diagramm vorbereiten:

~~~jsx
const data = [
    { "id": 1, "x": 280, "y": 0, "text": "Start", "type": "start" },
    { "id": 2, "x": 280, "y": 120, "text": "Read N", "type": "output" },
    { "id": 3, "x": 280, "y": 240, "text": "M=1\nF=2", "type": "process" },
    { "id": 4, "x": 280, "y": 360, "text": "F=F*M", "type": "process" },
    { "id": 5, "x": 280, "y": 480, "text": "Is M=N?", "type": "decision" }
];
~~~

:::note
Siehe [die vollständige Liste der Konfigurationseigenschaften eines Formobjekts](shapes/configuration_properties.md). Fügen Sie beim Erstellen von Datenobjekten für Formen aus den Basissätzen keine benutzerdefinierten Eigenschaften hinzu. Um eine benutzerdefinierte Eigenschaft hinzuzufügen, müssen Sie [eine benutzerdefinierte Form erstellen](shapes/custom_shape.md).
:::

### Festlegen des Standard-Formtyps {#setting-the-default-shape-type}

Sie können außerdem den Standardtyp für alle Formen über das Attribut [`defaultShapeType`](api/diagram/defaultshapetype_property.md) des Diagram-Konfigurationsobjekts festlegen:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "default", // type: "org" | type: "mindmap" | type: "pert"
    defaultShapeType: "rectangle"
});
diagram.data.parse(data);
~~~

Dieser Wert wird angewendet, wenn das Konfigurationsobjekt einer Form die Eigenschaft `type` nicht enthält.

