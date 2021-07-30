---
layout: partial.njk
title: 'Banner: Spectrum Web Components'
displayName: Banner
componentName: banner
componentHeading: sp-banner
partType: api
tags:
    - banner
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
<code>corner</code>
</td>

<td class="spectrum-Table-cell">
<code>corner</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Determines if banner sets position at upper right corner or not.
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>type</code>
</td>

<td class="spectrum-Table-cell">
<code>type</code>
</td>

<td class="spectrum-Table-cell">
<code>'info' | 'warning' | 'error'</code>
</td>

<td class="spectrum-Table-cell">
<code>'info'</code>
</td>

<td class="spectrum-Table-cell">
Determines the style, can be "info", "warning", or "error". Default is "info"
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
<code>content</code>
</td>

<td class="spectrum-Table-cell">
Secondary message of the banner. Used to provide a description.
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>header</code>
</td>

<td class="spectrum-Table-cell">
Primary message of the banner.
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
<code>--spectrum-banner-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-banner-error-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-negative-color-default)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-banner-info-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-informative-color-default)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-banner-padding-x</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-banner-padding-y</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-banner-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-banner-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-heading-text-line-height)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-banner-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-font-size-75)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-banner-warning-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-notice-color-default)</code>
</td>

</tr>

</tbody>
</table>
</div>
    