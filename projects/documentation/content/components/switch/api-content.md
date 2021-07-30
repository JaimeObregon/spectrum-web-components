---
layout: partial.njk
title: 'Switch: Spectrum Web Components'
displayName: Switch
componentName: switch
componentHeading: sp-switch
partType: api
tags:
    - switch
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
<code>autofocus</code>
</td>

<td class="spectrum-Table-cell">
<code>autofocus</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
When this control is rendered, focus it automatically
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>checked</code>
</td>

<td class="spectrum-Table-cell">
<code>checked</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Disable this control. It will not receive focus or events
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>emphasized</code>
</td>

<td class="spectrum-Table-cell">
<code>emphasized</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>readonly</code>
</td>

<td class="spectrum-Table-cell">
<code>readonly</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>tabIndex</code>
</td>

<td class="spectrum-Table-cell">
<code>tabIndex</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
The tab index to apply to this control. See general documentation about
the tabindex HTML property
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
text label of the Switch
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
<code>keydown</code>
</td>

<td class="spectrum-Table-cell">
<code>Trick :focus-visible polyfill into thinking keyboard based focus</code>
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
<code>--spectrum-alias-focus-ring-gap</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-25)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-cursor-hit-x</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-emphasized-handle-border-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-500)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-emphasized-handle-border-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-emphasized-handle-border-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-600)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-600)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-emphasized-track-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-500)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-emphasized-track-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-emphasized-track-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-600)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-emphasized-track-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-600)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-focus-ring-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-focus-ring-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-focus-ring-size-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-focus-ring-size)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-75)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-600)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-800)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-900)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-800)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-800)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thick)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-handle-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-control-2-size-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-height-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-text-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-text-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-text-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-text-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-text-gap</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-control-gap-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-300)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-300)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-900)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-800)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-800)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-control-3-height-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-switch-m-track-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-control-3-width-m)</code>
</td>

</tr>

</tbody>
</table>
</div>
    