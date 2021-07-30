---
layout: partial.njk
title: 'Menu: Spectrum Web Components'
displayName: Menu
componentName: menu
componentHeading: sp-menu
partType: api
tags:
    - menu
---

### Attributes and Properties

<div class="table-container">
<table class="spectrum-Table">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Property
</th>

<th class="spectrum-Table-headCell">
Attribute
</th>

<th class="spectrum-Table-headCell">
Type
</th>

<th class="spectrum-Table-headCell">
Default
</th>

<th class="spectrum-Table-headCell">
Description
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>label</code>
</td>

<td class="spectrum-Table-cell">
<code>label</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>''</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>selects</code>
</td>

<td class="spectrum-Table-cell">
<code>selects</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined | 'inherit' | 'single' | 'multiple'</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
whether the element has a specific selection algorithm that it applies to its item descendants. `single` allows only one descendent to be selected at a time. `multiple` allows many descendants to be selected. `inherit` will be applied dynamically when an ancestor of this element is actively managing the selection of its descendents. When the `selects` attribute is not present a `value` will not be maintained and the Menu Item children of this Menu will not have their `selected` state managed.
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>''</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>valueSeparator</code>
</td>

<td class="spectrum-Table-cell">
<code>value-separator</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>','</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

</tbody>
</table>
</div>
    

### Slots

<div class="table-container">
<table class="spectrum-Table">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Name
</th>

<th class="spectrum-Table-headCell">
Description
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>default slot</code>
</td>

<td class="spectrum-Table-cell">
menu items to be listed in the menu
</td>

</tr>

</tbody>
</table>
</div>
    

### Events

<div class="table-container">
<table class="spectrum-Table">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Name
</th>

<th class="spectrum-Table-headCell">
Description
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>change</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces that the `value` of the element has changed</code>
</td>

</tr>

</tbody>
</table>
</div>
    

### CSS Custom Properties

<div class="table-container">
<table class="spectrum-Table">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Name
</th>

<th class="spectrum-Table-headCell">
Default
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-alias-body-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-font-line-height-medium)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-alias-workflow-icon-size-m</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-225)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-icon-checkmark-medium-width</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-background-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-background-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-hover-overlay)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-background-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-hover-overlay)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-background-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-hover-overlay)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-divider-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-extralight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-divider-padding</code>
</td>

<td class="spectrum-Table-cell">
<code>3px</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-divider-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thick)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-focus-indicator-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-focus-indicator-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thick)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-height-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-icon-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-selected)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-icon-gap</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-icon-gap-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-padding-left-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-text-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-text-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-text-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-text-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-listitem-m-thumbnail-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-popover-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-popover-padding-y</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

</tbody>
</table>
</div>
    