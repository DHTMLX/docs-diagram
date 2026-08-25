---
sidebar_label: Diagram exportieren
title: Diagram exportieren
description: Sie können mehr über den Export von Diagram in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Diagram exportieren

Sie können ein Diagramm über die zugehörigen Methoden [pdf()](api/export/pdf_method.md)/[png()](api/export/png_method.md) des Export-Objekts in das Format PDF oder PNG exportieren:

<iframe src="https://snippet.dhtmlx.com/ybpmz0zk?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Um die Exporteinstellungen anzupassen, übergeben Sie der jeweiligen Methode ein Objekt mit Konfigurationsoptionen.

Sehen Sie sich die Liste der verfügbaren Einstellungen an:

- für die Methode [pdf()](api/export/pdf_method.md)
- für die Methode [png()](api/export/png_method.md)

## Styles exportieren {#exporting-styles}

Standardmäßig werden alle CSS-Styles, die auf der Diagram-Seite enthalten sind, an den Exportdienst gesendet. Dadurch erhöht sich die Größe der Anfrage, was zu deren Fehlschlagen führen kann.

Die Bibliothek ermöglicht Ihnen Folgendes:

- das Senden aller Styles an den Exportdienst zu verhindern, indem Sie die Konfigurationseigenschaft
[`exportStyles`](api/diagram/exportstyles_property.md) des Diagram-Objekts auf *false* setzen:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles: false
});
~~~

- eine Reihe von Styles zu definieren, die exportiert werden sollen, indem Sie absolute Pfade zu den gewünschten Styles im Array [`exportStyles`](api/diagram/exportstyles_property.md) angeben:

<iframe src="https://snippet.dhtmlx.com/jm8if6nh?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

:::note
Sie dürfen nur absolute Pfade verwenden, keine relativen.
:::
