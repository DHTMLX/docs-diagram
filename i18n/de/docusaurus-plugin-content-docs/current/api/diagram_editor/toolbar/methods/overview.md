---
sidebar_label: Methodenübersicht
title: Toolbar-Methodenübersicht
description: Hier erfahren Sie mehr über die Toolbar-Methoden in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Toolbar-Methodenübersicht {#toolbar-methods-overview}

:::info
Verwenden Sie die Methode [`parse()`](api/diagram_editor/toolbar/methods/parse_method.md), um Daten in Toolbar zu bearbeiten.
:::

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

# TreeCollection-Methodenübersicht {#treecollection-methods-overview}

Sie können die folgenden [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-methods/)-Methoden von [**Suite**](https://docs.dhtmlx.com/suite/) verwenden:

| Name                                                                                        | Beschreibung                                                      |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [add()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_add_method/)     | Fügt einer Komponente ein Element hinzu                              |
| [canCopy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_cancopy_method/) | Prüft, ob es möglich ist, ein Steuerelement in ein anderes Steuerelement zu kopieren |
| [copy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_copy_method/)   | Fügt eine Kopie eines Elements hinzu und platziert sie an der angegebenen Position |
| [eachChild()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachchild_method/) | Durchläuft die untergeordneten Elemente eines Steuerelements |
| [eachParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachparent_method/) | Durchläuft alle übergeordneten Elemente (das unmittelbare Elternelement und dessen Elternelement usw., bis das übergeordnete Element die Komponente selbst ist) |
| [exists()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_exists_method/) | Prüft, ob das angegebene Element in der Komponente vorhanden ist  |
| [filter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_method/) | Filtert Steuerelemente nach bestimmten Kriterien                  |
| [forEach()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_foreach_method/) | Durchläuft alle Elemente einer Tree-Collection                  |
| [getFilters()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getfilters_method/) | Gibt ein Objekt mit den angewendeten Filtern zurück        |
| [getId()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getid_method/) | Ruft die ID eines Elements ab                                        |
| [getIndex()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getindex_method/) | Ruft die aktuelle Position eines Elements ab                  |
| [getItem()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitem_method/) | Ruft ein Element anhand seiner ID ab                             |
| [getItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitems_method/) | Ruft die untergeordneten Elemente eines Steuerelements ab   |
| [getLength()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getlength_method/) | Zählt die untergeordneten Elemente eines Steuerelements    |
| [getParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getparent_method/) | Ruft die ID des übergeordneten Elements des Steuerelements ab |
| [getRoot()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getroot_method/) | Gibt die ID der Master-Komponente zurück                        |
| [haveItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_haveitems_method/) | Prüft, ob ein Element untergeordnete Elemente hat            |
| [move()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_move_method/)       | Verschiebt Elemente an andere Positionen                        |
| [refreshItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_refreshitems_method/) | Aktualisiert die untergeordneten Elemente eines Steuerelements |
| [remove()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_remove_method/)   | Entfernt ein Element                                             |
| [removeAll()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_method/) | Entfernt alle Steuerelemente aus der Komponente             |
| [resetFilter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_resetfilter_method/) | Setzt die aktiven Filter zurück                          |
| [restoreOrder()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_restoreorder_method/) | Stellt die Komponente in den Zustand vor dem Sortieren/Filtern zurück |
| [save()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_save_method/) | Speichert die in einer Tree-Collection vorgenommenen Änderungen serverseitig |
| [serialize()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_serialize_method/) | Serialisiert die Komponentendaten in das Format JSON, XML oder CSV |
| [sort()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_sort_method/) | Sortiert Steuerelemente nach bestimmten Kriterien                    |
| [update()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_update_method/) | Ändert ein Element                                                |

~~~jsx  {7-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// entfernt alle Toolbar-Elemente
editor.toolbar.data.removeAll();
~~~
