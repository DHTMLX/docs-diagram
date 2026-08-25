---
sidebar_label: Diagram-Editor-Übersicht
title: Editor-Übersicht
description: In der Dokumentation erhalten Sie einen Überblick über die DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# DHTMLX Diagram Editor-Übersicht {#dhtmlx-diagram-editor-overview}

Die DHTMLX Diagram-Komponente bietet Ihnen einen Editor, mit dem Sie Ihre gestalterischen Fähigkeiten beim Erstellen übersichtlicher und ansprechender Diagramme ausprobieren und anwenden können.

### Editor im Standardmodus {#editor-in-the-default-mode}

Die Oberfläche des im Standardmodus initialisierten Editors besteht aus vier Funktionsbereichen:

- [toolbar](guides/diagram_editor/toolbar.md)
- [shapebar](guides/diagram_editor/shapebar.md)
- [grid area](guides/diagram_editor/grid_area.md)
- [editbar](guides/diagram_editor/editbar.md)

Um ein Diagramm zu erstellen, müssen Sie entweder die benötigten Elemente aus der shapebar ziehen oder über die shape toolbar eine Kopie der Elemente erstellen.

Sie können die Attribute der Elemente über die [Sidebar-Optionen der editbar](guides/diagram_editor/editbar.md) anpassen. Um den Gestaltungsprozess zu beschleunigen, verwenden Sie die Tastenkombination `Alt (Option) + Ctrl (Cmd) + С`, um die Stile eines Elements zu kopieren, und `Alt (Option) + Ctrl (Cmd) + V`, um diese Stile auf die ausgewählten Elemente anzuwenden.

![](/img/default_editor.png)

**Verwandtes Beispiel:** [Diagram Editor. Standardmodus. Breites Flussdiagramm](https://snippet.dhtmlx.com/4d4k3o8p?text=diagram&mode=wide)

Sie können die [shapebar](guides/diagram_editor/shapebar.md) anpassen und, falls Sie eine benutzerdefinierte Form hinzugefügt haben, entsprechend den Attributen Ihrer Form [die editbar konfigurieren](api/diagram_editor/editbar/config/properties_property.md).

### Editor im Organigramm-Modus {#editor-in-the-org-chart-mode}

Die Oberfläche des im Organigramm-Modus initialisierten Editors besteht aus drei Funktionsbereichen:

- [toolbar](guides/diagram_editor/toolbar.md)
- [grid area](guides/diagram_editor/grid_area.md)
- [editbar](guides/diagram_editor/editbar.md)

:::note
Der Editor verfügt in diesem Modus nicht über die shapebar
:::

Um ein Diagramm im Organigramm-Modus des Editors zu erstellen, müssen Sie eine Form auswählen und ein neues untergeordnetes Element dafür hinzufügen. Sie können die Formen von einem übergeordneten Element zu einem anderen ziehen. Das verschobene Element wird zusammen mit all seinen untergeordneten Elementen gezogen.

Sie können die Attribute der Formen über die verfügbaren [Sidebar-Optionen der editbar](guides/diagram_editor/editbar.md) anpassen. Um den Gestaltungsprozess zu beschleunigen, verwenden Sie die Tastenkombination `Alt (Option) + Ctrl (Cmd) + С`, um die Stile eines Elements zu kopieren, und `Alt (Option) + Ctrl (Cmd) + V`, um diese Stile auf die ausgewählten Elemente anzuwenden.

![](/img/orgchart_editor_draggable.png)

**Verwandtes Beispiel:** [Diagram Editor. Organigramm-Modus. Grundlegende Initialisierung](https://snippet.dhtmlx.com/og4qm3ja?text=diagram&mode=wide)

Wenn Sie dem Editor im Organigramm-Modus eine benutzerdefinierte Form hinzugefügt haben, können Sie [die editbar konfigurieren](api/diagram_editor/editbar/config/properties_property.md), um benutzerdefinierte Eigenschaften der Form bearbeiten zu können.

Sie können `assistant`- oder `partner`-Elemente für eine übergeordnete Form jeder Ebene hinzufügen. Die Assistenten- oder Partnerelemente können keine übergeordneten Elemente sein.

<img
  src={useBaseUrl('/img/orgchart_editor_assistant.png')}
  alt="Org chart editor assistant" width='600'
/>

Die Verbindung zwischen der übergeordneten Form und ihrem Partner ist immer horizontal. Außerdem werden die Verbindungen zwischen der übergeordneten Form und all ihren untergeordneten Elementen horizontal, nachdem ein Partnerelement für das übergeordnete Element hinzugefügt wurde, selbst wenn die Verbindungen zuvor vertikal waren.

### Editor im Mindmap-Modus {#editor-in-the-mindmap-mode}

Die Oberfläche des im Mindmap-Modus initialisierten Editors besteht aus drei Teilen:

- [toolbar](guides/diagram_editor/toolbar.md)
- [grid area](guides/diagram_editor/grid_area.md)
- [editbar](guides/diagram_editor/editbar.md)

:::note
Der Editor verfügt in diesem Modus nicht über die shapebar
:::

Um ein Diagramm im Mindmap-Modus des Editors zu erstellen, müssen Sie eine Form auswählen und ein neues untergeordnetes Element dafür hinzufügen. Sie können die Formen von einem übergeordneten Element zu einem anderen ziehen. Das verschobene Element wird zusammen mit all seinen untergeordneten Elementen gezogen.

Sie können die Attribute der Formen über die verfügbaren [Sidebar-Optionen der editbar](guides/diagram_editor/editbar.md) anpassen. Um den Gestaltungsprozess zu beschleunigen, verwenden Sie die Tastenkombination `Alt (Option) + Ctrl (Cmd) + С`, um die Stile eines Elements zu kopieren, und `Alt (Option) + Ctrl (Cmd) + V`, um diese Stile auf die ausgewählten Elemente anzuwenden.

 ![](/img/mindmap_editor_draggable.png)

 **Verwandtes Beispiel:** [Diagram Editor. Mindmap-Modus. Emotionen-Mindmap](https://snippet.dhtmlx.com/lo1vm0e8?text=diagram&mode=wide)

Wenn Sie dem Editor im Mindmap-Modus eine benutzerdefinierte Form hinzugefügt haben, können Sie [die editbar konfigurieren](api/diagram_editor/editbar/config/properties_property.md), um benutzerdefinierte Eigenschaften der Form bearbeiten zu können.

## Wie geht es weiter {#whats-next}

Das war's. Jetzt können Sie mit der Arbeit an Diagrammen beginnen oder die innere Welt von JavaScript Diagram und Diagram Editor in den [Leitfäden](guides/overview.md) weiter erkunden.
