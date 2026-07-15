---
sidebar_label: Toolbar-Events
title: Events von Toolbar
description: Hier erfahren Sie mehr über die Toolbar-Events in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

Sie können die folgenden [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-events/)-Events von [**Suite**](https://docs.dhtmlx.com/suite/) verwenden:

| Name                                                                                 | Beschreibung                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | Wird ausgelöst, nachdem ein Unterelement von Toolbar ausgeblendet wurde |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | Wird ausgelöst, bevor ein Unterelement von Toolbar ausgeblendet wird |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | Wird nach einem Klick auf ein Steuerelement ausgelöst               |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | Wird ausgelöst, wenn Text in das Eingabefeld eingegeben wird        |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | Wird ausgelöst, wenn ein Steuerelement den Fokus verliert           |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | Wird ausgelöst, wenn der Wert im Input-Steuerelement von Toolbar geändert wird |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | Wird ausgelöst, wenn ein Steuerelement fokussiert wird              |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | Wird ausgelöst, wenn eine beliebige Taste gedrückt wird und ein Steuerelement von Toolbar fokussiert ist |
| [openMenu](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_openmenu_event/)        | Wird ausgelöst, wenn ein Menü-Steuerelement erweitert wird          |

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// behandelt das „click"-Event
editor.toolbar.events.on("click", (id, event) => {
    // hier folgt die Logik
});
~~~
