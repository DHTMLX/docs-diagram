---
sidebar_label: Diagram scrollen
title: Diagram scrollen
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie, wie Sie Diagram scrollen. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Diagram scrollen {#scrolling-diagram}

Standardmäßig wird die Größe der Komponente automatisch an den Inhalt angepasst. Bei Bedarf übernimmt die Komponente die Größe des HTML-Containers und zeigt horizontale und vertikale interne Scrollbalken an, um den Inhalt anzupassen.

## Diagram scrollen {#scrolling-diagram-1}

Über die Methode [`showItem()`](api/diagram/showitem_method.md) des Diagram-Objekts können Sie zu dem Bereich scrollen, in dem sich das gewünschte Element befindet.

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Alternativ können Sie mithilfe der Methode [`scrollTo()`](api/diagram/scrollto_method.md) zur gewünschten Position in Diagram scrollen.

<iframe src="https://snippet.dhtmlx.com/f970hbym?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Abrufen des Scroll-Status {#getting-scroll-state}

Über die zugehörige Methode [`getScrollState()`](api/diagram/getscrollstate_method.md) können Sie mit der Diagram-API die aktuelle Scroll-Position abrufen:

~~~jsx
// Gibt die anfängliche Scroll-Position zurück
const coords = diagram.getScrollState(); // -> {x:0,y:0}
~~~

Sie gibt ein Objekt mit der horizontalen und vertikalen Scroll-Position zurück.

## Abfangen des Diagram-Scrollens {#catching-diagram-scrolling}

Über das Event [`scroll`](api/diagram/scroll_event.md) können Sie den Beginn des Diagram-Scrollens abfangen. Die Handler-Funktion erhält die Scroll-Position als Parameter:

- `pos` - (*object*) die Scroll-Position als Objekt mit den Attributen x und y

~~~jsx
diagram.events.on("Scroll", (position) => {
    alert("The diagram has been scrolled:" + position);
});
~~~
