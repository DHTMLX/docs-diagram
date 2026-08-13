---
sidebar_label: Diagram-Übersicht
title: Diagram-Übersicht
slug: /
description: In der Dokumentation erhalten Sie einen Überblick über die DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# DHTMLX Diagram-Übersicht {#dhtmlx-diagram-overview}

DHTMLX Diagram ist eine clientseitige Diagrammkomponente, mit der Sie Beziehungen zwischen Objekten, Konzepten oder Lebewesen in visueller Form darstellen können:
als Schema, Diagramm, Organigramm, Mindmap usw. Das Diagramm erleichtert die übersichtliche und zugängliche Darstellung von unübersichtlichen und umfangreichen Informationen.

## Diagram im Standardmodus {#diagram-in-the-default-mode}

DHTMLX Diagram bietet Ihnen die Möglichkeit, mithilfe eines [vordefinierten Satzes von Formen](shapes/default_shapes.md) und [Verbindungslinien](/lines/) verschiedene Diagramme zu erstellen und mit deren Aussehen zu experimentieren.

Sie können Formen der gewünschten Typen auswählen, sie mit passenden Verbindungslinien verknüpfen und einen beliebigen Diagrammtyp erstellen, der die Abfolge von Vorgängen darstellt, aus denen sich ein bestimmter Prozess zusammensetzt, wie im folgenden Beispiel:

| [Datenplanungsmodell](https://snippet.dhtmlx.com/e6zm6wh1) | [Vertikaler Entscheidungsbaum](https://snippet.dhtmlx.com/t6t8ay80) | [Breites Flussdiagramm](https://snippet.dhtmlx.com/4d4k3o8p) |
| ---------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| ![](/img/icon_data_planning_model.png)                   | ![](/img/icon_vert_decision_tree.png)                       | ![](/img/icon_wide_diagram.png)                     |

| [Entscheidungsbaum](https://snippet.dhtmlx.com/7bn52dl1) | [Aktivitätsdiagramm](https://snippet.dhtmlx.com/a9t2z2dt) |
| ---------------------------------------------------- | ------------------------------------------------------- |
| ![](/img/icon_decision_tree.png)                   | ![](/img/icon_activity.png)                           |

### Benutzerdefinierte Formen {#custom-shapes}

Sie können [eigene Formvorlagen](shapes/custom_shape.md) erstellen und damit jedes gewünschte Diagramm gestalten. Zum Beispiel können Sie folgende bekannte benutzerdefinierte Diagramme erstellen:

| [Lebenszyklus-Diagramm](https://snippet.dhtmlx.com/y4k51owl) | [Venn-Diagramm-Vorlage](https://snippet.dhtmlx.com/2tzyfois) | [UML-Klassendiagramm-Vorlage](https://snippet.dhtmlx.com/madymxt5) |
| --------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| ![](/img/sticky.png)                                    | ![](/img/venn.png)                                | ![](/img/html.png)                                     |

| [Netzwerkdiagramm-Vorlage](https://snippet.dhtmlx.com/u1xqyo9w) | [Spiellevel und Schauplätze](https://snippet.dhtmlx.com/1h4j9gb3) |
| ------------------------------------------------------ | ---------------------------------------------------------------- |
| ![](/img/network.png)                                | ![](/img/game_levels.png)                                      |

### Gruppen {#groups}

Sie können einfache oder komplexere Schemata erstellen, indem Sie Formen mithilfe eines Diagram-Elements namens Gruppe auf unterschiedliche Weise gruppieren. Sie können sowohl einstufige als auch verschachtelte Gruppen erstellen und deren Aussehen und Verhalten konfigurieren. Weitere Details finden Sie im Artikel [Gruppen](/groups/).

| [Diagram Editor. Standardmodus. Virtual-Private-Cloud-Architektur](https://snippet.dhtmlx.com/0hf8ahrb) |
| ------------------------------------------------------------------------------------------------ |
| ![](/img/virtual_cloud.png)                                                                    |

### Swimlanes {#swimlanes}

Mit Swimlanes in der DHTMLX Diagram-Bibliothek können Sie jeden Prozess (Geschäfts-, Fertigungs-, Serviceprozess oder einen beliebigen anderen) oder einzelne Teile davon von Anfang bis Ende darstellen. Weitere Details finden Sie im Artikel [Swimlanes](/swimlanes/).

| [Diagram. Standardmodus. Swimlane-Vorlage](https://snippet.dhtmlx.com/z6x5m3gb) |
| ------------------------------------------------------------------------------- |
| ![](/img/swimlane.png)                                                        |

### Linientitel {#line-titles}

Linientitel sind im Standardmodus von Diagram aktiviert. Sie können Text hinzufügen, indem Sie doppelt auf eine Linie klicken. Mit einem Doppelklick können Sie den Text auch bearbeiten. Weitere Details finden Sie im Artikel [Linientitel](/line_titles/).

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Diagram im Organigramm-Modus {#diagram-in-the-org-chart-mode}

Außerdem gibt es einen Organigramm-Modus von Diagram, der eine Reihe von Formen zeigt, die durch Linien in hierarchischer Reihenfolge miteinander verbunden sind.

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?text=diagram&mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Assistenten- und Partnerformen {#assistant-and-partner-shapes}

Eine übergeordnete Form auf einer beliebigen Ebene kann Assistenten- oder Partnerelemente enthalten. Die Assistenten- und Partnerformen können keine übergeordneten Elemente sein. Die Assistenten- und Partnerelemente können im [Editor](editor_overview.md#editor-in-the-org-chart-mode) hinzugefügt oder durch Vorbereiten eines [Datensatzes](guides/loading_data.md#preparing-data-to-load) erstellt werden.

In der hierarchischen Reihenfolge werden die Assistentenelemente zwischen den übergeordneten und den untergeordneten Formen angezeigt.

| [Diagram Editor. Organigramm-Modus. Grundlegende Initialisierung](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------------- |
| ![](/img/orgchart_with_assistant.png)                                                     |

Die Verbindung zwischen der übergeordneten Form und ihren Partnerelementen ist immer horizontal. Außerdem werden die Verbindungen zwischen der übergeordneten Form und all ihren untergeordneten Formen horizontal, sobald Sie ein Partnerelement für eine übergeordnete Form hinzufügen, selbst wenn die Verbindungen zuvor vertikal waren.

Partnerformen sind sehr nützlich, um einen Stammbaum zu erstellen.

**Verwandtes Beispiel:** [Diagram Editor. Organigramm-Modus. Stammbaum](https://snippet.dhtmlx.com/5pfybpmz)

Hier sehen Sie Beispiele dafür, wie die Verbindungen übergeordneter Formen mit einem, zwei, drei und vier Partnern aussehen.

| Ein Partner                               | Zwei Partner                              |
| ----------------------------------------- | ------------------------------------------ |
| ![](/img/orgchart_with_one_partner.png) | ![](/img/orgchart_with_two_partners.png) |

| Drei Partner                               | Vier Partner                               |
| -------------------------------------------- | ------------------------------------------- |
| ![](/img/orgchart_with_three_partners.png) | ![](/img/orgchart_with_four_partners.png) |

### Benutzerdefinierte Formen {#custom-shapes-1}

Ein Beispiel für das Hinzufügen benutzerdefinierter Formen zur Erstellung eines Diagramms, das die hierarchische Organisationsstruktur einer medizinischen Einrichtung darstellt:

| [Diagram Editor. Organigramm-Modus. Vorlage für medizinisches Hierarchiediagramm](https://snippet.dhtmlx.com/8fubjmlz) |
| -------------------------------------------------------------------------------------------------- |
| ![](/img/medical_hierarchy_overview.png)                                                         |

## Diagram im Mindmap-Modus {#diagram-in-the-mindmap-mode}

Der Mindmap-Modus wird verwendet, um ein zentrales Thema oder eine zentrale Idee darzustellen, die von den Zweigen der Unterthemen umgeben ist.

| [Diagram. Mindmap-Modus. Emotionen-Mindmap](https://snippet.dhtmlx.com/twd25ww1) |
| ------------------------------------------------------------------------------- |
| ![](/img/mindmap_emotions.png)                                                |

Die Formen sind durch gebogene Linien verbunden und um eine zentrale Form des Diagramms herum angeordnet.

### Benutzerdefinierte Formen {#custom-shapes-2}

Ein Beispiel für das Hinzufügen einer benutzerdefinierten Vorlage in den Mindmap-Modus des Diagramms, um eine Sitemap zu erstellen:

<iframe src="https://snippet.dhtmlx.com/do1jwmw1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Diagram im PERT-Modus {#diagram-in-the-pert-mode}

Der [PERT-Modus](api/diagram/type_property.md) wird verwendet, um die Abfolgen von Aufgaben und Projekten sowie die Verbindungen zwischen ihnen zu visualisieren. Er ist auch nützlich, um den kritischen Pfad zu ermitteln und Projekte zu planen.

Diagram im PERT-Modus [verwendet die DHTMLX-Gantt-Datenstruktur](guides/loading_data.md#data-structure-of-diagram-in-the-pert-mode), die eine [einfache Interaktion zwischen den Komponenten](#integrating-pert-diagram-and-dhtmlx-gantt) ermöglicht. Beim Laden eines Gantt-Datensatzes ordnet ein Diagram im PERT-Modus Aufgaben und Projekte automatisch anhand der Verbindungen zwischen ihnen an.

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Integration von PERT-Diagram und DHTMLX Gantt {#integrating-pert-diagram-and-dhtmlx-gantt}

Nachfolgend finden Sie ein Beispiel für die Integration eines Diagram im PERT-Modus und eines Gantt-Diagramms:

<iframe src="https://snippet.dhtmlx.com/gcnx4a9h?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Formensuche {#shape-search}

DHTMLX Diagram bietet Ihnen eine Reihe von API, die Sie nutzen können, um die Arbeit mit einem Diagram komfortabler zu gestalten.
Sie können beispielsweise eine Formensuche implementieren, die Ihnen die Arbeit mit großen Diagrammen erleichtert.

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Diagram-Skalierung {#diagram-scale}

Sie können die Zoom-Vorlage auf Ihr Diagramm anwenden, um dessen Erscheinungsbild durch Vergrößern oder Verkleinern zu ändern. Außerdem können Sie dem Benutzer ermöglichen, detaillierte Informationen zur ausgewählten Form abzurufen.

<iframe src="https://snippet.dhtmlx.com/09o8t3o2?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Wie geht es weiter {#whats-next}

Jetzt können Sie sich mit der Verwendung von DHTMLX Diagram Editor in Ihrer Anwendung vertraut machen. Lesen Sie die [Diagram-Editor-Übersicht](editor_overview.md), um mehr über dieses Tool zu erfahren. Wenn Sie mit einem KI-Coding-Assistenten entwickeln, verbinden Sie ihn über den [DHTMLX MCP-Server](guides/ai-integrations/mcp-server.md) mit der Live-Dokumentation.
