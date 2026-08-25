---
sidebar_label: Elemente manipulieren
title: Elemente manipulieren
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über das Manipulieren von Elementen. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---
# Elemente manipulieren {#manipulating-items}

Sie können Diagram-Elemente über den [Diagram Editor](guides/diagram_editor/initialization.md) manipulieren. Dieser Artikel beschreibt, wie Sie die Elemente von DHTMLX Diagram über die API der Komponente manipulieren können.

## Übersicht {#overview}

Dieser Artikel enthält Abschnitte zu folgenden Themen:

- [wie Sie Formen automatisch in hierarchischer Reihenfolge anordnen](#arranging-shapes-automatically);
- wie Sie eine Reihe von Operationen mit Elementen durchführen, insbesondere:
    - Elemente [hinzufügen](#adding-an-item)/[aktualisieren](#updating-an-item)/[löschen](#deleting-items);
    - [prüfen, ob ein Element vorhanden ist](#checking-existence-of-the-item), und [es abrufen](#getting-an-item);
    - [ein Element auswählen](#selecting-items);
    - [zu einem gewünschten Element scrollen](#showing-the-necessary-item), um es sichtbar zu machen, wenn sich viele Elemente im Diagram befinden;
    - [Elemente ein-/ausklappen](#expandingcollapsing-items);
    - [Elemente finden](#finding-the-necessary-item), die bestimmten Kriterien entsprechen;
    - [Diagram filtern](#filtering-items), um bestimmte Elemente darzustellen;
- [wie Sie das Drag-and-Drop von untergeordneten Elementen einer Gruppe verwalten](#drag-n-drop-of-group-items);
- [wie Sie mit der Swimlane und ihren Zellen arbeiten](#working-with-swimlane-cells), nämlich:
    - die [aktive Swimlane festlegen/zurücksetzen](#settingresetting-the-active-swimlane);
    - den [Subheader-Typ einer Swimlane abrufen](#getting-the-type-of-the-subheader);
    - eine Spalte/Zeile [hinzufügen](#adding-a-columnrow)/[entfernen](#removing-a-columnrow)/[verschieben](#moving-a-columnrow);
    - die [ID](#getting-the-id-of-a-cell)/den [Index](#getting-the-index-of-a-cell) einer Zelle abrufen und [prüfen, welche Aktionen für die Zelle möglich sind](#validating-cells).

## Formen automatisch anordnen {#arranging-shapes-automatically}

Die Bibliothek bietet Ihnen die Möglichkeit, eine automatische Platzierung für Formen und Verbinder des im Default-Modus initialisierten Diagram zu implementieren. Die automatische Platzierung ermöglicht Ihnen Folgendes:

- verbundene Formen sofort in symmetrischer Reihenfolge zu platzieren;
- im JSON-Format geladene oder vom Server geladene Daten in einer hierarchischen Struktur anzuordnen.

Um die automatische Platzierung durchzuführen, verwenden Sie die Methode [`autoPlace()`](api/diagram/autoplace_method.md). Die Methode kann einen Parameter entgegennehmen:

- `config` - (*object*) optional, ein Objekt mit Konfigurationseinstellungen für die automatische Platzierung. Das Objekt kann die folgenden Eigenschaften enthalten:
    - `mode` - (*string*) optional, der Modus für die Verbindung von Formen, `"direct"` (Standard) oder `"edges"`
    - `graphPadding` - (*number*) optional, legt den Abstand zwischen unverbundenen Diagrams fest, standardmäßig *200*
    - `placeMode` - (*string*) optional, legt den Platzierungsmodus der Formen fest, `"orthogonal"` (Standard) oder `"radial"`
    - `itemPadding` - (*number*) optional, minimaler Abstand zwischen Elementen (Mindestwert ist *1*), standardmäßig *20*
    - `levelPadding` - (*number*) optional, minimaler Abstand zwischen Hierarchieebenen (Mindestwert ist *1*), standardmäßig *20*

:::note
Die Methode `autoPlace()` funktioniert nur im Default-Modus des Diagram und nur für Formen. Die automatische Platzierung funktioniert nicht, wenn Sie Gruppen oder Swimlanes verwenden.
:::

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace({
    mode: "edges",
    graphPadding: 100,
    placeMode: "radial",
    itemPadding: 10,
    levelPadding: 10
});
~~~

**Verwandtes Beispiel**: [Diagram. Standardmodus. Automatische Platzierung](https://snippet.dhtmlx.com/f3uekgjw)

Wenn Sie der Methode den Parameter nicht übergeben, werden die Standardeinstellungen angewendet.

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.autoPlace();
~~~

Außerdem können Sie die Einstellungen für die automatische Platzierung über die Konfigurationsoption [`autoplacement`](api/diagram/autoplacement_property.md) von Diagram festlegen und die Methode `autoPlace()` anwenden. Das folgende Beispiel zeigt, wie Sie mithilfe der automatischen Platzierung einen radialen Datensatz generieren und anordnen.

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    scale: 0.3,
    autoplacement: {
        placeMode: "radial",
        mode: "direct"
    }
});

diagram.data.parse(getNodes(120, 5));

diagram.autoPlace({
    itemPadding: 10,
    levelPadding: 10,
    graphPadding: 100,
});
~~~

![Automatische Platzierung mit einem generierten radialen Datensatz](/img/radial_datasets_generator.png)

**Verwandtes Beispiel:** [Diagram. Standardmodus. Anordnen eines generierten radialen Datensatzes mit automatischer Platzierung](https://snippet.dhtmlx.com/rwsime82)

## Ein Element hinzufügen {#adding-an-item}

Um ein neues Element in ein Diagram einzufügen, wenden Sie die Methode [`add()`](api/data_collection/add_method.md) des `data`-Objekts an.

~~~jsx
diagram.data.add({ id: "3.2", text: "New Item", parent: "3" });
~~~

Im Beispiel haben wir ein neues Formobjekt mit den folgenden Attributen hinzugefügt:

- `id` - (*string|number*) die eindeutige ID einer Form
- `text` - (*string*) der Text, der in einer Form dargestellt wird
- `parent` - (*string|number*) die ID der übergeordneten Form

Alle verfügbaren Eigenschaften von Formobjekten finden Sie im [API-Abschnitt](shapes/configuration_properties.md).

**Verwandtes Beispiel**: [Diagram. Daten. Element hinzufügen/löschen](https://snippet.dhtmlx.com/8wi20uop)

## Ein Element abrufen {#getting-an-item}

Sie können das Objekt eines Elements abrufen, indem Sie seine ID an die Methode [`getItem()`](api/data_collection/getitem_method.md) des `data`-Objekts übergeben. Zum Beispiel:

~~~jsx
const shape = diagram.data.getItem(1);
~~~

Nachdem Sie ein Element abgerufen haben, können Sie wie folgt auf seine ursprünglichen Eigenschaften zugreifen:

~~~jsx
const shape = diagram.data.getItem(1);
const text = shape.text;
~~~

## Die ID eines Elements abrufen {#getting-the-id-of-an-item}

Wenn die ID eines Elements unbekannt ist, können Sie sie mit der Methode [`getId()`](api/data_collection/getid_method.md) abrufen. Die Methode nimmt den Index des Elements als Parameter entgegen:

~~~jsx
const id = diagram.data.getId(0); // -> gibt "1" zurück
~~~

## Den Index eines Elements abrufen {#getting-the-index-of-an-item}

Sie können den Index eines Elements abrufen, indem Sie seine ID an die Methode [`getIndex()`](api/data_collection/getindex_method.md) übergeben:

~~~jsx
const id = diagram.data.getIndex("1"); // -> gibt 0 zurück
~~~

## Elemente löschen {#deleting-items}

### Ein einzelnes Element löschen {#deleting-a-single-item}

Um ein nicht mehr benötigtes Element zu löschen, verwenden Sie die Methode [`remove()`](api/data_collection/remove_method.md) des `data`-Objekts und übergeben Sie die ID des betreffenden Elements als Parameter:

~~~jsx
diagram.data.remove("3.2");
~~~

:::note
Wenn das Diagram im Org-Chart- oder Mindmap-Modus initialisiert wurde, werden beim Löschen einer Form auch ihre Verbinder und alle untergeordneten Formen entfernt.
:::

### Alle Elemente löschen {#deleting-all-the-items}

Bei Bedarf können Sie das Diagram leeren, indem Sie alle Elemente auf einmal löschen. Verwenden Sie dazu die Methode [`removeAll()`](api/data_collection/removeall_method.md) des `data`-Objekts:

~~~jsx
diagram.data.removeAll();
~~~

**Verwandtes Beispiel**: [Diagram. Daten. Element hinzufügen/löschen](https://snippet.dhtmlx.com/8wi20uop)

## Ein Element aktualisieren {#updating-an-item}

Mit Hilfe der Methode [`update()`](api/data_collection/update_method.md) des `data`-Objekts können Sie das Aussehen und den Inhalt eines Elements aktualisieren:

~~~jsx
diagram.data.update("1", { text: "Some new text" });
~~~

Sie müssen zwei Parameter übergeben:

- `id` - (*string|number*) die ID des Elements
- `config` - (*object*) ein Objekt mit aktualisierten Konfigurationseigenschaften

**Verwandtes Beispiel**: [Diagram. Daten. Element aktualisieren](https://snippet.dhtmlx.com/y8uk4sbj)

## Vorhandensein eines Elements prüfen {#checking-existence-of-the-item}

Sie können prüfen, ob ein Element im Diagram vorhanden ist, indem Sie die Methode [`exists()`](api/data_collection/exists_method.md) der `data`-Sammlung verwenden. Die Methode nimmt die ID des Elements als Parameter entgegen und gibt *true* zurück, wenn das Element vorhanden ist:

~~~jsx
const shapeExists = diagram.data.exists("1");
~~~

## Elemente auswählen {#selecting-items}

### Ein Element auswählen {#selecting-an-item}

Um Elemente auszuwählen, müssen Sie zunächst [die Auswahl aktivieren](guides/diagram/configuration.md#enabling-items-selection) und anschließend die Methode [add()](api/selection/add_method.md) des `selection`-Objekts aufrufen, um ein gewünschtes Element auszuwählen.

~~~jsx {8,11-12,15-16}
// ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten laden
diagram.data.parse(data);

diagram.selection.add({ id: "1" }); // -> gibt true zurück, wenn das Element ausgewählt wurde
console.log(diagram.selection.getIds()); // -> ["1"]

// fügt das Element mit der ID:"2" zu den bereits ausgewählten Elementen hinzu
diagram.selection.add({ id: "2", join: true });
console.log(diagram.selection.getIds()); // -> ["1", "2"]

// entfernt die zuvor ausgewählten Elemente und fügt das Element mit der ID:"3" hinzu
diagram.selection.add({ id: "3" });
console.log(diagram.selection.getIds()); // -> ["3"]
~~~

Die Methode nimmt als Argument ein Objekt mit den folgenden Parametern entgegen:

- `id` - (erforderlich) die ID des Elements, das der Auswahlliste hinzugefügt werden soll
- `join` - (optional) der Modus für das Hinzufügen des ausgewählten Elements zur Auswahlliste. Ist der Parameter auf *false* gesetzt oder wird er nicht übergeben, werden die zuvor zur Auswahlliste hinzugefügten Elemente zurückgesetzt
- `batch` - (optional) die Liste der auszuwählenden Elemente (falls im Voraus bekannt)

Die Methode gibt zurück:

- `true`, wenn sich das Element nicht in der Liste befand und erfolgreich hinzugefügt wurde
- `false`, wenn das Element aus irgendeinem Grund nicht zur Liste hinzugefügt wurde, z. B. weil es bereits zur Liste hinzugefügt worden war

### Auswahl eines Elements aufheben {#unselecting-an-item}

Um ein Element aus der Auswahlliste zu entfernen, verwenden Sie die Methode [`remove()`](api/selection/remove_method.md) des `selection`-Objekts:

~~~jsx {2}
console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
diagram.selection.remove({ id: "3" }); // -> gibt true zurück, wenn die Auswahl des Elements aufgehoben wurde
console.log(diagram.selection.getIds()); // -> ["1", "2"]
~~~

Die Methode kann als Parameter ein Objekt mit *der ID des zu deselektierenden Elements* entgegennehmen. Sie gibt *true* zurück, wenn das Element erfolgreich aus der Auswahlliste entfernt wurde.

Sie können die Methode auch ohne Argumente aufrufen, um die Auswahlliste wie folgt zu leeren:

~~~jsx {2-3}
console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// entfernt alle Elemente aus der Auswahlliste
diagram.selection.remove();
console.log(diagram.selection.getIds()); // -> []
~~~

### IDs der ausgewählten Elemente abrufen {#getting-the-ids-of-selected-items}

Mit der Methode [`getIds()`](api/selection/getids_method.md) des `selection`-Objekts können Sie die Liste der IDs der aktuell ausgewählten Elemente abrufen:

~~~jsx
const ids = diagram.selection.getIds(); // -> ["1", "1.1" ...] or []
~~~

Die Methode gibt ein Array mit den IDs der ausgewählten Elemente und Unterelemente zurück oder ein leeres Array, wenn aktuell keine Elemente ausgewählt sind.

### Objekt eines ausgewählten Elements abrufen {#getting-the-object-of-a-selected-item}

Sie können das Objekt eines ausgewählten Elements mit der Methode [`getItem()`](api/selection/getitem_method.md) des `selection`-Objekts abrufen. Die Methode kann als Argument ein Objekt mit dem folgenden Parameter entgegennehmen:

- `id` - (erforderlich) - die ID des betreffenden Elements

Sie können die Methode auch ohne den Parameter aufrufen, um das Objekt des zuletzt ausgewählten Elements abzurufen. Die folgenden Beispiele veranschaulichen die Funktionsweise der Methode:

~~~jsx {9-11,13-15,17-19}
// ein Diagram muss mit der Option "select:true" erstellt werden
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
// Daten laden
diagram.data.parse(data);

console.log(diagram.selection.getIds()); // -> ["1", "2", "3"]
// das zuletzt ausgewählte Element abrufen
const item = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner"}

// das ausgewählte Element anhand der ID abrufen
const item = diagram.selection.getItem({ id: "1" });
// -> {id: "1", text: "Chairman & CEO", title: "Henry Bennett"}

// Versuch, ein Element abzurufen, das sich nicht in der Auswahlliste befindet
const item = diagram.selection.getItem({ id: "4" });
// -> gibt undefined zurück, da sich kein Element mit der angegebenen ID in der Auswahlliste befindet
~~~

### Auswahlliste leeren {#clearing-the-selection-list}

Wenn Sie die Auswahlliste leeren müssen, ohne Events auszulösen, verwenden Sie die Methode [`clear()`](api/selection/clear_method.md):

~~~jsx
diagram.selection.clear();
~~~

### Prüfen, ob ein Element ausgewählt ist {#checking-whether-an-item-is-selected}

Sie können über die API prüfen, ob ein Element in der Liste der ausgewählten Diagram-Elemente vorhanden ist. Verwenden Sie dazu die Methode [`includes()`](api/selection/includes_method.md) des `selection`-Objekts:

~~~jsx {2-3}
diagram.selection.getIds(); // -> ["1", "2", "3"]
diagram.selection.includes({ id: "1" }) // gibt true zurück
diagram.selection.includes({ id: "4" }) // gibt false zurück
~~~

Die Methode nimmt als Argument ein Objekt mit den folgenden Parametern entgegen:

- `id` - (*string|number*) erforderlich, die ID des zu prüfenden Elements

**Verwandtes Beispiel**: [Diagram. Auswahl. Elementauswahl](https://snippet.dhtmlx.com/jyoxn5h7)

## Elemente ein-/ausklappen {#expandingcollapsing-items}

Sie können eine Form mit untergeordneten Formen oder eine Gruppe/Swimlane über die entsprechenden API-Methoden ein- und ausklappen: [expandItem()](api/diagram/expanditem_method.md) und [collapseItem()](api/diagram/collapseitem_method.md).

Beide Methoden nehmen zwei Parameter entgegen:

- `id` - (*string|number*) die ID des Elements
- `dir` - (*string*) optional, legt fest, auf welcher Seite die untergeordneten Elemente relativ zur übergeordneten Form ausgeblendet/eingeblendet werden: `"left"`, `"right"`

~~~jsx
// das Element mit der ID "3" erweitern
diagram.expandItem("3");

// das Element mit der ID "3" einklappen
diagram.collapseItem("3");
~~~

:::note
Das Attribut `dir` kann nur im Mindmap-Modus von Diagram verwendet werden (type:`"mindmap"`).
:::

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
	type:"mindmap"
});
diagram.data.parse(data);

diagram.collapseItem("main", "left");
// oder
diagram.expandItem("main", "left");
~~~

## Das gewünschte Element anzeigen {#showing-the-necessary-item}

Wenn Sie ein großes Diagram mit vielen Elementen haben, können Sie das gewünschte Element sichtbar machen.
Wenden Sie dazu die Methode [`showItem()`](api/diagram/showitem_method.md) an, die die ID eines Elements als Parameter entgegennimmt:

~~~jsx
diagram.showItem("2.1");
~~~

**Verwandtes Beispiel**: [Diagram. Inhalt scrollen](https://snippet.dhtmlx.com/f970hbym)

Weitere Informationen zum [Scrollen in DHTMLX Diagram](guides/diagram/scrolling_diagram.md) finden Sie hier.

## Das gewünschte Element finden {#finding-the-necessary-item}

Sie können die API der Diagram-Komponente verwenden, um das gewünschte Element im Diagram zu finden. Die Methode [`find()`](api/data_collection/find_method.md) der `data`-Sammlung hilft Ihnen bei dieser Aufgabe.
Die Methode nimmt die Suchkriterien als Parameter entgegen und gibt das erste Objekt der Form zurück, die den angegebenen Kriterien entspricht:

~~~jsx
// Suche nach einer Form anhand des Attributschlüssels
const shape = diagram.data.find({by:"text",match:"Manager"});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}

// Suche nach einer Form anhand einer Funktion
const shape = diagram.data.find((shape) => {
    if(shape.text==="Manager"||shape.text==="Marketer"){
        return true;
    }
});
~~~

**Verwandtes Beispiel**: [Diagram. Daten. Erforderliche Form finden](https://snippet.dhtmlx.com/sete9z73)

### Alle Elemente finden, die den Suchkriterien entsprechen {#finding-all-the-items-that-meet-the-search-criteria}

Sie können auch alle Elemente finden, die den festgelegten Kriterien entsprechen, indem Sie die Methode [`findAll()`](api/data_collection/findall_method.md) der `data`-Sammlung verwenden. Die Methode nimmt dieselben Parameter wie die Methode `find()` entgegen und gibt ein Array von Elementobjekten zurück:

~~~jsx
// Suche nach Formen anhand des Attributschlüssels
const shapes = diagram.data.findAll({by:"text",match:"Manager"});

// Suche nach Formen anhand einer Funktion
const shapes = diagram.data.findAll((shapes) => {
    if(shapes.text==="Manager"||shapes.text==="Marketer"){
        return true;
    }
});
// ->{id:"2",text:"Manager",title:"Mildred Kim",img:"../avatar-2.png",type:"card", …}
// ->{id:"2.1",text:"Marketer",title:"Charles Little", img: "../avatar-4.png", …}
~~~

## Elemente filtern {#filtering-items}

Sie können das Diagram filtern und nur die Elemente darstellen, die den Filterkriterien entsprechen. Verwenden Sie dazu die Methode [`filter()`](api/data_collection/filter_method.md) der `data`-Sammlung. Die Methode zeigt nur die gefilterten Elemente an und blendet den Rest aus.

<iframe src="https://snippet.dhtmlx.com/tm43bsgn?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Drag-and-Drop von Gruppenelementen {#drag-n-drop-of-group-items}

Die Standardeinstellungen einer Gruppe ermöglichen es Ihnen, untergeordnete Elemente innerhalb der Gruppe neu anzuordnen und Elemente zwischen Gruppen zu ziehen.

Bei Bedarf können Sie das Ziehen untergeordneter Elemente in andere Gruppen deaktivieren und festlegen, dass die Elemente nur innerhalb ihrer übergeordneten Gruppe gezogen werden können. Außerdem können Sie das Verhalten der Ränder der übergeordneten Gruppe anpassen und festlegen, ob sie sich erweitern sollen, wenn ein Benutzer ein untergeordnetes Element aus der Gruppe hinauszieht.

Weitere Details zur Konfiguration des Verhaltens von Gruppenelementen finden Sie im [zugehörigen Artikel](/groups/#configuring-the-behavior-of-group-items).

## Arbeiten mit Swimlane-Zellen {#working-with-swimlane-cells}

Mit Hilfe der [CellManager-API](/api/cell_manager/) können Sie Swimlane-Zellen verwalten. Sie können beispielsweise Zellen als Zeilen oder Spalten hinzufügen, verschieben oder entfernen, Zellen validieren und vieles mehr.

Nehmen wir eine Swimlane mit der folgenden Konfiguration:

~~~jsx
const data = [
    {
        type: "$swimlane",
        id: "main",
        height: 500,
        width: 600,
        layout: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        header: {
            text: "Swimlane",
            position: "top"
        },
        subHeaderRows: {
            headers:[
                { text: "Subheader 1", id: "s1" },
                { text: "Subheader 2", id: "s2" },
                { text: "Subheader 3", id: "s3" }
            ]
        }
    }
];
~~~

und betrachten wir, wie Sie die Zellen der Swimlane mit den verfügbaren API-Methoden bearbeiten können.

### Aktive Swimlane festlegen/zurücksetzen {#settingresetting-the-active-swimlane}

Um die Zellen einer Swimlane bearbeiten zu können, müssen Sie zunächst die aktive Swimlane festlegen. Dies können Sie entweder über die Methode [`setSwimlane()`](api/cell_manager/setswimlane_method.md) des cellManager-Objekts tun:

~~~jsx
diagram.cellManager.setSwimlane("main");
~~~

oder über die Methode [`add()`](api/selection/add_method.md) des selection-Objekts:

~~~jsx
diagram.selection.add("main");
~~~

Nachdem Sie die Arbeit mit der Swimlane oder ihren Zellen abgeschlossen haben, können Sie die Methode [`resetSwimlane()`](api/cell_manager/resetswimlane_method.md) des cellManager-Objekts anwenden, um die Auswahl der Swimlane aufzuheben:

~~~jsx
diagram.cellManager.resetSwimlane();
~~~

### Eine Spalte/Zeile hinzufügen {#adding-a-columnrow}

Sie können der Swimlane eine Reihe von Zellen entweder als Zeile oder als Spalte hinzufügen. Verwenden Sie dazu die Methode [`add()`](api/cell_manager/add_method.md) des cellManager-Objekts und übergeben Sie der Methode zwei Parameter:
- den Startindex der Position der Zelle, an der eine neue Spalte/Zeile hinzugefügt werden soll;
- die Richtung des Hinzufügens: *`"up"` | `"down"`* zum Hinzufügen einer Zeile, *`"left"` | `"right"`* zum Hinzufügen einer Spalte.

~~~jsx
// fügt eine neue Zeile unter der angegebenen Zeile hinzu
diagram.cellManager.add(0, "down");

// fügt eine neue Spalte links von der angegebenen Spalte hinzu
diagram.cellManager.add(0, "left");
~~~

### Eine Spalte/Zeile entfernen {#removing-a-columnrow}

Um eine Reihe von Zellen entweder als Zeile oder als Spalte aus der Swimlane zu entfernen, verwenden Sie die Methode [`remove()`](api/cell_manager/remove_method.md) des cellManager-Objekts. Die Methode nimmt zwei Parameter entgegen:

- den Index der Position, ab der eine Spalte/Zeile entfernt werden soll;
- den Typ des zu entfernenden Elements: *`"col"` | `"row"`*

~~~jsx
// entfernt die erste Zeile aus der Swimlane
diagram.cellManager.remove(0, "row");

// entfernt die zweite Spalte aus der Swimlane
diagram.cellManager.remove(1, "col");
~~~

### Eine Spalte/Zeile verschieben {#moving-a-columnrow}

Sie können die Position einer Spalte oder Zeile in der Swimlane ändern, indem Sie die Methode [`move()`](api/cell_manager/move_method.md) des cellManager-Objekts anwenden. Die Methode ermöglicht es Ihnen, eine Spalte um eine Position nach rechts oder links oder eine Zeile um eine Position nach oben oder unten zu verschieben. Die Methode nimmt zwei Parameter entgegen:

- den Index der aktuellen Position der zu verschiebenden Spalte/Zeile
- die Richtung des Verschiebens: *`"up"` | `"down"`* zum Verschieben einer Zeile, *`"left"` | `"right"`* zum Verschieben einer Spalte

~~~jsx
// verschiebt die erste Zeile um eine Position nach unten
diagram.cellManager.move(0, "down");

// verschiebt die dritte Spalte um eine Position nach links
diagram.cellManager.move(2, "left");
~~~

### Zellen validieren {#validating-cells}

Sie können über die Methode [`validation()`](api/cell_manager/validation_method.md) des cellManager-Objekts prüfen, ob Aktionen wie das Hinzufügen, Entfernen oder Verschieben von Zellen für die angegebene Zelle möglich sind:

~~~jsx
// prüft, ob eine Zelle mit Index 0 nach unten verschoben werden kann
diagram.cellManager.validation(0, "down", "move"); // true
~~~

### Den Subheader-Typ abrufen {#getting-the-type-of-the-subheader}

Um den Typ des Subheaders einer Swimlane zurückzugeben, verwenden Sie die Methode [`getSubHeaderType()`](api/cell_manager/getsubheadertype_method.md) des cellManager-Objekts. Die Methode nimmt die ID eines Subheaders als Parameter entgegen:

~~~jsx
diagram.cellManager.getSubHeaderType("s1"); // gibt "row" zurück
~~~

### Die ID einer Zelle abrufen {#getting-the-id-of-a-cell}

Sie können die ID der ersten Zelle der Spalte/Zeile abrufen, zu der die Zelle gehört. Dies können Sie über die Methode [`getCellId()`](api/cell_manager/getcellid_method.md) des cellManager-Objekts tun. Die Methode nimmt zwei Parameter entgegen:

- den Index der ersten Zelle einer Zeile/Spalte;
- den Typ des Elements: *`"col"` | `"row"`*.

~~~jsx
// gibt die ID der ersten Zelle der ersten Zeile zurück
diagram.cellManager.getCellId(0, "row"); // gibt 1 zurück

// gibt die ID der ersten Zelle der dritten Spalte zurück
diagram.cellManager.getCellId(2, "col"); // gibt 3 zurück
~~~

Sie können auch die ID der Zelle abrufen, zu der der Subheader gehört, indem Sie die Methode [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md) des cellManager-Objekts verwenden. Die Methode nimmt die ID des Subheaders einer Swimlane als Parameter entgegen:

~~~jsx
// gibt die ID der Zelle zurück, zu der der Subheader gehört
diagram.cellManager.getSubHeaderCellId("s2"); // gibt 4 zurück
~~~

### Den Index einer Zelle abrufen {#getting-the-index-of-a-cell}

Wenn Sie den Index einer Zelle einer Swimlane abrufen müssen, verwenden Sie die Methode [`getCellIndex()`](api/cell_manager/getcellindex_method.md) des cellManager-Objekts. Die Methode nimmt zwei Parameter entgegen:

- die ID einer Zelle;
- den Typ des Elements: *`"col"` | `"row"`*.

:::note
Alle Zellen, die zur selben Zeile (oder Spalte) gehören, haben denselben Index.
:::

~~~js
layout: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
],
~~~

~~~jsx
// gibt den Index der Zelle mit id=2 zurück, wenn die Zelle zu einer Spalte gehört
diagram.cellManager.getCellIndex(2, "col"); // gibt 1 zurück

// gibt den Index der Zelle mit id=5 zurück, wenn die Zelle zu einer Spalte gehört
diagram.cellManager.getCellIndex(8, "col"); // gibt 1 zurück

// gibt den Index der Zelle mit id=2 zurück, wenn die Zelle zu einer Zeile gehört
diagram.cellManager.getCellIndex(2, "row"); // gibt 0 zurück

// gibt den Index der Zelle mit id=5 zurück, wenn die Zelle zu einer Zeile gehört
diagram.cellManager.getCellIndex(8, "row"); // gibt 2 zurück
~~~

Sie können auch den Index der Zelle abrufen, zu der der Subheader gehört, indem Sie die Methode [`getSubHeaderCellIndex()`](api/cell_manager/getsubheadercellindex_method.md) des cellManager-Objekts verwenden. Die Methode nimmt die ID des Subheaders einer Swimlane als Parameter entgegen:

~~~jsx
// gibt den Index der Zelle zurück, zu der der Subheader gehört
diagram.cellManager.getSubHeaderCellIndex("s2"); // gibt 1 zurück
~~~
