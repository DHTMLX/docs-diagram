---
sidebar_label: filter()
title: filter
description: text
---

# filter()

`todo: check`

@short: filters items in the diagram

@signature: {`filter(rule?: IFilterCallback | IFilterMode, config?: IFilterConfig): void;`}

@params:
- `rule: function | object` - the filtering criteria
- `config: object` - optional, defines the parameters of filtering

@example:
// filtering by the key of the shape attribute
diagram.data.filter({ by: "text", match: "Read N" });

// filtering by a function
diagram.data.filter(function (shape) {
    return shape.id > 3;
});

@relatedsample:
**Related sample**: [Diagram. Filtering shapes](https://snippet.dhtmlx.com/tm43bsgn)

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

**Related articles**

common_guides/manipulating_shapes.md#filteringshapes