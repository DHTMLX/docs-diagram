---
sidebar_label: Toolbar-Methoden
title: Methoden von Toolbar
description: Hier erfahren Sie mehr über die Methoden von Toolbar in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

Sie können die folgenden [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-methods/)-Methoden von [**Suite**](https://docs.dhtmlx.com/suite/) verwenden:

| Name                                                                                  | Beschreibung                                                |
| :------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| [disable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_disable_method/)        | Deaktiviert und dimmt ein oder mehrere Elemente von Toolbar |
| [enable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_enable_method/)          | Aktiviert ein oder mehrere deaktivierte Elemente von Toolbar |
| [getSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getselected_method/)| Gibt ein Array mit den IDs der ausgewählten Elemente zurück |
| [getState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getstate_method/)      | Ruft die aktuellen Werte/Zustände von Steuerelementen ab    |
| [hide()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_hide_method/)              | Blendet ein Element von Toolbar aus                         |
| [isDisabled()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isdisabled_method/)  | Prüft, ob ein Element von Toolbar deaktiviert ist            |
| [isSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isselected_method/)  | Prüft, ob ein angegebenes Toolbar-Element ausgewählt ist     |
| [paint()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_paint_method/)            | Zeichnet Toolbar auf einer Seite neu                         |
| [select()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_select_method/)          | Wählt ein angegebenes Element von Toolbar aus                |
| [setFocus()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setfocus_method/)      | Setzt den Fokus auf ein Input-Steuerelement anhand seiner ID |
| [setState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setstate_method/)      | Legt Werte/Zustände von Steuerelementen fest                 |
| [show()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_show_method/)              | Zeigt ein Element von Toolbar an                              |
| [unselect()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_unselect_method/)      | Hebt die Auswahl eines ausgewählten Toolbar-Elements auf      |

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// deaktiviert das Element „file"
editor.toolbar.disable("$file");
// deaktiviert die Elemente „file" und „scale"
editor.toolbar.disable(["$file", "$scale"]);
// deaktiviert alle Elemente
editor.toolbar.disable();
~~~
