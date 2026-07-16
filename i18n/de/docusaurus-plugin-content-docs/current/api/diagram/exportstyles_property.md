---
sidebar_label: exportStyles-Eigenschaft
title: exportStyles-Eigenschaft
description: Erfahren Sie mehr über die exportStyles-Eigenschaft in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# exportStyles

:::info
Standardmäßig werden beim Exportieren eines DHTMLX Diagram alle in die Seite eingebundenen CSS-Stile an den Exportdienst gesendet. Dadurch vergrößert sich die Anfrage, was zu einem Fehlschlagen der Anfrage führen kann.

Um dieses Problem zu vermeiden, können Sie die Größe der exportierten Daten reduzieren, indem Sie die Eigenschaft `exportStyles` verwenden.
:::

### Beschreibung {#description}

@short: Optional. Definiert die Stile, die beim Exportieren des Diagram an den Exportdienst gesendet werden

### Verwendung {#usage}

~~~jsx
exportStyles?: boolean;
//or
exportStyles?: string[];
~~~

### Standardkonfiguration {#default-config}

~~~jsx
exportStyles: true
~~~

### Beispiel {#example}

Setzen Sie die Eigenschaft `exportStyles` auf *false*, um zu verhindern, dass alle Stile an den Exportdienst gesendet werden:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles: false
});
~~~

Oder definieren Sie eine Reihe von Stilen, die exportiert werden sollen. Setzen Sie dazu String-Werte mit den absoluten Pfaden zu den gewünschten Stilen in das `exportStyles`-Array:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles:[
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});
~~~

:::tip
Sie müssen ausschließlich absolute Pfade verwenden, keine relativen
:::

**Changelog:** Hinzugefügt in v3.1

**Verwandter Artikel:** [Diagram exportieren](guides/data_export.md)

**Verwandtes Beispiel:** [Diagram. Export. Exportstile](https://snippet.dhtmlx.com/jm8if6nh)
