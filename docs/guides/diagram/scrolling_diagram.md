---
sidebar_label: Scrolling Diagram
title: Scrolling Diagram
description: You can learn about scrolling Diagram in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# Scrolling Diagram

By default the component's size is set automatically to fit the content. If necessary, the component will take the size of the HTML container and render horizontal and vertical inner scrolls to fit the content.

## Scrolling diagram

You can scroll a diagram to the area where the necessary item is situated via the [](../../api/diagram/showitem_method.md) method of the diagram object.

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

As an alternative way, you can scroll to the necessary position on the diagram by using the [](../../api/diagram/scrollto_method.md) method.

<iframe src="https://snippet.dhtmlx.com/f970hbym?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Getting scroll state 
------------------

The Diagram API allows you to get the current position of the scroll via the related [](../../api/diagram/getscrollstate_method.md) method:

~~~jsx
// returning the initial scroll position
const coords = diagram.getScrollState(); // -> {x:0,y:0}
~~~

It returns an object with the horizontal and vertical scroll position.

## Catching diagram scrolling

You can catch the start of Diagram scrolling using the [](../../api/diagram/scroll_event.md) event. The handler function takes the position of the scroll as a parameter:

- **pos** - (*object*) the position of a scroll as an object with x and y attributes

~~~jsx
diagram.events.on("Scroll", function(position) {
    alert("The diagram has been scrolled:" position);
});
~~~
