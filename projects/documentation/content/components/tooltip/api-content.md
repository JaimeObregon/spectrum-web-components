---
layout: partial.njk
title: 'Tooltip: Spectrum Web Components'
displayName: Tooltip
componentName: tooltip
componentHeading: sp-tooltip
partType: api
tags:
    - tooltip
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
<code>open</code>
</td>

<td class="spectrum-Table-cell">
<code>open</code>
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
<code>placement</code>
</td>

<td class="spectrum-Table-cell">
<code>placement</code>
</td>

<td class="spectrum-Table-cell">
<code>"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"</code>
</td>

<td class="spectrum-Table-cell">
<code>'top'</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
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
<code>icon</code>
</td>

<td class="spectrum-Table-cell">
the icon element appearing at the start of the label
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>default slot</code>
</td>

<td class="spectrum-Table-cell">
the text label of the Tooltip
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
<code>--spectrum-picker-m-popover-offset-y</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-75)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-gray-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-icon-margin-x</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-icon-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-175)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-info-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-blue-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-max-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-2000)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-min-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-300)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-negative-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-red-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-padding-top</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-padding-x</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-125)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-positive-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-green-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-font-weight-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-component-text-line-height)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-font-size-75)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-tip-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-tip-margin</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-tooltip-tip-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-100)</code>
</td>

</tr>

</tbody>
</table>
</div>
    