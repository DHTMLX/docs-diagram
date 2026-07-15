---
sidebar_label: Groups
title: Groups
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über Groups. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Groups {#groups}

## Group-Übersicht {#group-overview}

Eine Group ist eine eigenständige Art von Diagram-Element. Sie können einfache oder komplexere Schemata erstellen, indem Sie Formen oder andere Groups auf unterschiedliche Weise gruppieren. Sie können sowohl einstufige als auch verschachtelte Groups erstellen und deren Erscheinungsbild und Verhalten konfigurieren.

:::note
Groups sind nur im Standardmodus von Diagram/Diagram Editor verfügbar (type: `"default"`).
:::

<iframe src="https://snippet.dhtmlx.com/0hf8ahrb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

## Groups erstellen {#creating-groups}

Um eine Group zu erstellen, geben Sie *"$group"* als Wert des Attributs `type` innerhalb des Group-Objekts an, während Sie die zugehörige JSON-Struktur zum Laden in das Diagram vorbereiten:

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "User Access"
        },
        groupChildren: ["1.1", "1.2"]
    },
    {
        type: "it",
        id: "1.1",
        x: 50,
        y: 75,
        text: "Remote Desktop"
    },
    {
        type: "it",
        id: "1.2",
        x: 200,
        y: 75,
        text: "Login Server"
    },
];

// Diagram initialisieren
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

### Eigenschaften {#properties}

Weitere Informationen finden Sie in der [vollständigen Liste der Konfigurationseigenschaften eines `group`-Objekts](groups/configuration_properties.md), mit denen Sie die Positionierung und das Erscheinungsbild der Group konfigurieren können.

## Formen im PERT-Modus gruppieren {#grouping-shapes-in-the-pert-mode}

Um die Formtypen `"task"` und `"milestone"` im PERT-Modus des Diagram zu gruppieren, verwenden Sie das `"project"`-Objekt im Datensatz eines Diagram. Das `"project"`-Objekt dient als Container für Aufgaben und Meilensteine und funktioniert wie eine Group. Es ermöglicht die Erstellung von PERT-Diagrammen mit verschiedenen Verschachtelungsebenen und bietet eine visuelle Gruppierung.

~~~jsx
const data = [
    {
        "id": "4.2",
        "text": "QA Testing",
        "type": "project",
        "parent": "4",
        "start_date": new Date(2026, 1, 18),
        "duration": 3,
        "progress": 0,
        "open": true
    },
    {
        "id": "4.2.1",
        "text": "Functional Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 18),
        "duration": 2
    },
    {
        "id": "4.2.2",
        "text": "Usability Testing",
        "type": "task",
        "parent": "4.2",
        "start_date": new Date(2026, 1, 20),
        "duration": 1
    }
];
~~~

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

### Eigenschaften {#properties-1}

Weitere Informationen finden Sie in der [vollständigen Liste der Konfigurationseigenschaften eines `"project"`-Objekts](groups/configuration_properties.md#properties-specific-for-project-object), mit denen Sie die Positionierung und das Erscheinungsbild von Aufgaben und Meilensteinen im Projekt konfigurieren können.

## Group-Kopfzeile konfigurieren {#configuring-the-group-header}

Die Kopfzeile der Group ist standardmäßig deaktiviert. Um eine Group mit Kopfzeile zu erstellen, müssen Sie die Eigenschaft `header` im Konfigurationsobjekt der Group angeben.

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {}
    }
];
~~~

Die Eigenschaft enthält mehrere Attribute, mit denen Sie die Konfiguration der Group-Kopfzeile einfach anpassen können.
Sie können beispielsweise die Höhe der Kopfzeile und ihre Position festlegen, den Text für Ihre Kopfzeile angeben und ihre Einstellungen anpassen.

<iframe src="https://snippet.dhtmlx.com/6hunrja8?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="470"></iframe>

Sehen Sie sich die [vollständige Liste der API-Eigenschaften des Group-Objekts](groups/configuration_properties.md) an.

### Ein Kopfzeilen-Symbol {#a-header-icon}

Um eine Group ein- oder auszuklappen, aktivieren Sie das Attribut `closable` der Eigenschaft [Kopfzeile](groups/configuration_properties.md). Dadurch wird der Kopfzeile ein Symbol hinzugefügt, mit dem ein Benutzer eine Group ein- oder ausklappen kann.

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        header: {
            text: "Top and collapsed header with tеxt alignment",
            closable: true
        }
    }
];
~~~

Sie können die Farbe des Symbols über das Attribut `iconColor` des [Group-Objekts](groups/configuration_properties.md) ändern.

## Verhalten von Group-Elementen konfigurieren {#configuring-the-behavior-of-group-items}

Standardmäßig können Sie jedes untergeordnete Element der Group aus der Group herausziehen und in eine andere Group hineinziehen.
Um zu ändern, wie sich die Group-Elemente verhalten, verwenden Sie die Attribute `groupBehavior` und `padding` der Eigenschaft `exitArea` des [Group-Objekts](groups/configuration_properties.md).

:::note
Die Eigenschaft `exitArea` definiert nur das Verhalten der untergeordneten Elemente der ersten Ebene der konfigurierbaren Group.
:::

<iframe src="https://snippet.dhtmlx.com/4gxy38ek?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

Mit den Werten `"unbound"` und `"boundBorderExtension"` des Attributs `groupBehavior` können Sie festlegen, ob die untergeordneten Elemente aus der Group herausbewegt werden können, und bewirken, dass sich die Ränder der Group erweitern, wenn ein Benutzer versucht, ein Element nach außen zu ziehen. Bei Bedarf können Sie die Möglichkeit, Elemente aus der Group herauszuziehen, auch über den Wert `"boundNoBorderExtension"` deaktivieren.

![](/img/group_behavior.gif)

Wenn `groupBehavior` auf `"boundNoBorderExtension"` oder `"boundBorderExtension"` gesetzt ist, können Sie den Abstand zwischen der Group und dem Rand des Elements festlegen, wenn das Element innerhalb der Group verschoben wird. Verwenden Sie dazu das Attribut `padding`:

~~~jsx
const data = [
    {
        type: "$group",
        id: 1,
        width: 830,
        height: 400,
        x: 0,
        y: 0,
        exitArea: {
            groupBehavior: "boundBorderExtension",
            padding: 10
        },
        //fixed: true,
        groupChildren: ["1.1", "1.2", "1.3"]
    },
    // ...
];
~~~
