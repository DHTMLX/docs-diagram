---
sidebar_label: toolbar
title: toolbar-Eigenschaft
description: Erfahren Sie mehr über die toolbar-Eigenschaft in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# toolbar

### Beschreibung {#description}

@short: Optional. Ein Array von Icon-Objekten, das eine Toolbar mit Schaltflächen für Elemente festlegt

### Verwendung {#usage}

~~~jsx
toolbar?: [
    {
        id: string,
        content: string,
        check?: function,
        css?: function,
        tooltip?: string
    },
    {...} // other icon objects
];
~~~

### Parameter {#parameters}

Das Array `toolbar` enthält eine Reihe von Icon-Objekten. Jedes Icon-Objekt kann die folgenden Parameter enthalten:

- `id` - (erforderlich) die ID des Icons
- `content` - (erforderlich) der Inhalt des Icons. Er kann ein HTML-Element mit dem Namen der Icon-Klasse enthalten
- `check` - (optional) prüft, ob das Icon auf das Element angewendet werden soll. Die Funktion nimmt ein Element-Objekt entgegen und gibt *true* zurück, wenn das Icon für dieses Element gerendert wird
- `css` - (optional) die Funktion, die den/die Namen der CSS-Klasse(n) zurückgibt, die auf das Element angewendet werden soll(en)
- `tooltip` - (optional) ein Tooltip, der beim Überfahren des Icons mit der Maus erscheint

### Beispiel {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true,
    // Legt eine Toolbar mit Schaltflächen für Elemente fest
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>",
            check: item => !item.assistant && !item.partner,
            tooltip: "Add new shape"
        },
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>",
            check: item => item.parent,
            css: () => "dhx_diagram_toolbar__icon--remove",
            tooltip: "Remove"
        }
    ]
});
~~~

**Changelog:**

- Der Parameter `tooltip` wurde in v5.0 hinzugefügt

**Verwandte Artikel:**

- [Toolbar für Formen festlegen](guides/diagram/configuration.md#setting-toolbar-for-shapes)
- [Standard-Icons](https://docs.dhtmlx.com/suite/helpers/icon/)

**Verwandtes Beispiel:** [Diagram. Konfiguration. Formen-Toolbar](https://snippet.dhtmlx.com/4if395hd)
