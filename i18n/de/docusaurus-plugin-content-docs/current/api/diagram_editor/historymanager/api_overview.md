---
sidebar_label: API-Übersicht des History Manager
title: API-Übersicht des History Manager
description: Eine Übersicht über den History Manager finden Sie in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# API-Übersicht des History Manager {#history-manager-api-overview}

Eine Reihe von APIs, die Sie zur Verwaltung des Aktionsverlaufs im Diagram Editor nutzen können. Verwenden Sie das Schlüsselwort `history`, um über das Objekt `editor` auf den History Manager zuzugreifen:

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // nur default
});
// ...
editor.history.redo(); // stellt eine Aktion wieder her, die durch die Undo-Aktion rückgängig gemacht wurde
~~~

## Methodenübersicht des History Manager {#history-manager-methods-overview}

| Name                                                           | Beschreibung                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [](api/diagram_editor/historymanager/methods/add_method.md) | @getshort(api/diagram_editor/historymanager/methods/add_method.md) |
| [](api/diagram_editor/historymanager/methods/disable_method.md) | @getshort(api/diagram_editor/historymanager/methods/disable_method.md) |
| [](api/diagram_editor/historymanager/methods/enable_method.md) | @getshort(api/diagram_editor/historymanager/methods/enable_method.md) |
| [](api/diagram_editor/historymanager/methods/isredo_method.md) | @getshort(api/diagram_editor/historymanager/methods/isredo_method.md) |
| [](api/diagram_editor/historymanager/methods/isundo_method.md) | @getshort(api/diagram_editor/historymanager/methods/isundo_method.md) |
| [](api/diagram_editor/historymanager/methods/redo_method.md) | @getshort(api/diagram_editor/historymanager/methods/redo_method.md) |
| [](api/diagram_editor/historymanager/methods/reset_method.md) | @getshort(api/diagram_editor/historymanager/methods/reset_method.md) |
| [](api/diagram_editor/historymanager/methods/undo_method.md) | @getshort(api/diagram_editor/historymanager/methods/undo_method.md) |

## Eigenschaftenübersicht des History Manager {#history-manager-properties-overview}

| Name                                                           | Beschreibung                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [](api/diagram_editor/historymanager/config/savedelay_property.md) | @getshort(api/diagram_editor/historymanager/config/savedelay_property.md) |
