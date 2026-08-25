---
sidebar_label: Copy-Manager-API-Überblick
title: Copy-Manager-API-Überblick
description: Sie können sich in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek einen Überblick über den Copy Manager verschaffen. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# Copy-Manager-API-Überblick {#copy-manager-api-overview}

Eine Reihe von APIs, die Sie beim Kopieren und Einfügen von Elementen des Diagram Editor verwenden können. Verwenden Sie das Schlüsselwort `model`, um über das Objekt `editor` auf den Copy Manager zuzugreifen:

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // nur default
});
// ...
editor.model.copy(); // kopiert ausgewählte Elemente
~~~

## Copy-Manager-Methoden-Überblick {#copy-manager-methods-overview}

| Name                                                                     | Beschreibung                                                                 |
| :----------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [](api/diagram_editor/copymanager/methods/copy_method.md)             | @getshort(api/diagram_editor/copymanager/methods/copy_method.md)       |
| [](api/diagram_editor/copymanager/methods/copystyles_method.md)    | @getshort(api/diagram_editor/copymanager/methods/copystyles_method.md) |
| [](api/diagram_editor/copymanager/methods/paste_method.md)         | @getshort(api/diagram_editor/copymanager/methods/paste_method.md)      |
| [](api/diagram_editor/copymanager/methods/pastestyles_method.md)   | @getshort(api/diagram_editor/copymanager/methods/pastestyles_method.md)|
