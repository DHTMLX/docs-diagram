---
sidebar_label: Events-Übersicht
title: Toolbar-Events-Übersicht
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über Toolbar-Events. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Toolbar-Events-Übersicht {#toolbar-events-overview}

Sie können die folgenden [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-events/)-Events von [**Suite**](https://docs.dhtmlx.com/suite/) verwenden:

| Name                                                                                 | Beschreibung                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | Wird ausgelöst, nachdem ein Unterelement der Toolbar ausgeblendet wurde |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | Wird ausgelöst, bevor ein Unterelement der Toolbar ausgeblendet wird |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | Wird ausgelöst, nachdem auf ein Steuerelement geklickt wurde         |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | Wird ausgelöst, wenn Text in das Eingabefeld eingegeben wird         |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | Wird ausgelöst, wenn ein Steuerelement den Fokus verliert            |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | Wird ausgelöst, wenn der Wert im Input-Steuerelement der Toolbar geändert wird |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | Wird ausgelöst, wenn ein Steuerelement fokussiert wird                |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | Wird ausgelöst, wenn eine beliebige Taste gedrückt wird und ein Steuerelement der Toolbar fokussiert ist |
| [openMenu](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_openmenu_event/)        | Wird ausgelöst, wenn ein Menü-Steuerelement erweitert wird           |

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// behandelt das "click"-Event
editor.toolbar.events.on("click", (id, event) => {
    // etwas Logik
});
~~~

# TreeCollection-Events-Übersicht {#treecollection-events-overview}

Sie können die folgenden [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-events/)-Events von [**Suite**](https://docs.dhtmlx.com/suite/) verwenden:

| Name                                                                                                    | Beschreibung                                            |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)            | Wird ausgelöst, nachdem ein neues Element in eine Tree-Collection eingefügt wurde |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/)      | Wird ausgelöst, nachdem ein neues Element aus einer Tree-Collection entfernt wurde |
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)          | Wird ausgelöst, bevor ein neues Element in eine Tree-Collection eingefügt wird |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/)    | Wird ausgelöst, bevor ein Element aus einer Tree-Collection entfernt wird |
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)                | Wird ausgelöst, wenn eine Tree-Collection geändert wird |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)                | Wird ausgelöst, nachdem eine Tree-Collection gefiltert wurde |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)                    | Wird ausgelöst, wenn Elemente in eine Tree-Collection geladen werden |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)          | Wird ausgelöst, wenn das Laden von Daten fehlschlägt |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)          | Wird ausgelöst, wenn alle Elemente aus einer Tree-Collection entfernt werden|

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// behandelt das "load"-Event
editor.toolbar.events.on("load", () => {
    // etwas Logik hier
});
// neue Toolbar-Daten laden
editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
