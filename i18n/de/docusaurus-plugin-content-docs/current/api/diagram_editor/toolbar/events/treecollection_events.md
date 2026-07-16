---
sidebar_label: TreeCollection-Events
title: TreeCollection-Events von Toolbar
description: Hier erfahren Sie mehr über die TreeCollection-Events von Toolbar in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

Sie können die folgenden [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-events/)-Events von [**Suite**](https://docs.dhtmlx.com/suite/) verwenden:

| Name                                                                                                 | Beschreibung                                           |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)       | Wird ausgelöst, nachdem ein neues Element zu einer Tree-Collection hinzugefügt wurde  |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/) | Wird ausgelöst, nachdem ein neues Element aus einer Tree-Collection entfernt wurde |
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)     | Wird ausgelöst, bevor ein neues Element zu einer Tree-Collection hinzugefügt wird |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/) | Wird ausgelöst, bevor ein Element aus einer Tree-Collection entfernt wird |
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)           | Wird ausgelöst, wenn eine Tree-Collection geändert wird |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)           | Wird ausgelöst, nachdem eine Tree-Collection gefiltert wurde |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)               | Wird ausgelöst, wenn Elemente in eine Tree-Collection geladen werden |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)     | Wird ausgelöst, wenn das Laden von Daten fehlschlägt   |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)     | Wird ausgelöst, wenn alle Elemente aus einer Tree-Collection entfernt werden |

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// behandelt das „load"-Event
editor.toolbar.events.on("load", () => {
    // hier folgt die Logik
});
// lädt neue Toolbar-Daten
editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
