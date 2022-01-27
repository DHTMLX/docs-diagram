---
sidebar_label: filter()
title: filter Method of Data Collection
description: You can learn about the filter method of data collection in the documentation of the DHTMLX JavaScript Diagram library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Diagram.
---

# filter()

### Description

@short: filters items in the diagram

@descr:

### Usage

~~~js
filter(rule?: IFilterCallback | IFilterMode, config?: IFilterConfig): void;
~~~

### Parameters

- `rule: function | object` - the filtering criteria
- `config: object` - optional, defines the parameters of filtering

### Example

~~~js
// filtering by the key of the shape attribute
diagram.data.filter({ by: "text", match: "Read N" });

// filtering by a function
diagram.data.filter(function (shape) {
    return shape.id > 3;
});
~~~


**Related sample**: [Diagram. Data. Filtering shapes](https://snippet.dhtmlx.com/tm43bsgn)

To revert the diagram to the initial state, call the **filter()** method without parameters.

~~~js
diagram.data.filter();
~~~

The **rule** parameter:

- if set as a function, the filtering will be applied by the rule specified in the function:

For example:

~~~js
diagram.data.filter(function (shape) {
    return shape.id > 3;
});
~~~

- if set as an object, the parameter has the following attributes:

<table>
	<tbody>
        <tr>
			<td><b>by</b></td>
			<td>(<i>string</i>) mandatory, the key of the item attribute</td>
		</tr>
        <tr>
			<td><b>match</b></td>
			<td>(<i>string</i>) mandatory, a pattern to match</td>
		</tr>
        <tr>
			<td><b>compare</b></td>
			<td>(<i>function</i>) optional, a function for extended filtering that takes three parameters:
                <ul>
                    <li><b>value</b> - the value to compare</li>
                    <li><b>match</b> - a pattern to match</li>
                    <li><b>item</b> - a data item the values of which should be compared (e.g. a shape)</li>
                </ul>
            </td>
		</tr>
    </tbody>
</table>

For instance:

~~~js
diagram.data.filter({ by: "text", match: "Read N" });
~~~

The **config** parameter may contain two properties:

<table>
	<tbody>
        <tr>
			<td><b>add</b></td>
			<td>(<i>boolean</i>) defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)</td>
		</tr>
        <tr>
			<td><b>smartFilter</b></td>
			<td>(<i>boolean</i>) defines whether a filtering rule will be applied after adding and editing items of the collection
            </td>
		</tr>
    </tbody>
</table>

**Related articles**:  [Filtering items](../../../guides/manipulating_items/#filtering-items)