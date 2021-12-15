---
sidebar_label: destructor()!
title: destructor Method
description: You can learn about the destructor method in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# destructor()

### Description

@short: removes a diagram instance and releases occupied resources
@descr:

### Usage

~~~jsx
destructor () => void;
~~~

### Example
~~~jsx {4}
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.destructor();
~~~

**Change log:** Added in v3.0
