---
sidebar_label: Scrolling Diagram
title: Scrolling Diagram
description: text
---

# Scrolling Diagram


By default the component's size is set automatically to fit the content. If necessary, the component will take the size of the HTML container and render horizontal and vertical inner scrolls to fit the content.


Getting scroll state 
------------------

dhtmlxDiagram allows you to get the current position of the scroll via the related method api/diagram_getscrollstate.md:

~~~js
// returning the initial scroll position
var coords = diagram.getScrollState();	// -> {x:0,y:0}
~~~

It returns an object with the horizontal and vertical scroll position.


Scrolling diagram
---------------

You can scroll to the necessary position on the diagram by using the api/diagram_scrollto.md method. It takes two parameters:

- **x** - (*number*) horizontal scroll position
- **y** - (*number*) vertical scroll position

~~~js
diagram.scrollTo(0, 160);
~~~

Catching diagram scrolling 
--------------------------

You can catch the start of Diagram scrolling using the api/diagram_onscroll_event.md event. The handler function takes the position of the scroll as a parameter:

- **pos** - (*object*) the position of a scroll as an object with x and y attributes

~~~js
diagram.events.on("Scroll", function(position) {
    alert("The diagram has been scrolled:" position);
});
~~~

{{editor	https://snippet.dhtmlx.com/f970hbym	Diagram. Scroll content}}