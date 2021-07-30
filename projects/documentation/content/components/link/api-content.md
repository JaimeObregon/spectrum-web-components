---
layout: partial.njk
title: 'Link: Spectrum Web Components'
displayName: Link
componentName: link
componentHeading: sp-link
partType: api
tags:
    - link
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
<code>undefined</code>
</td>

<td class="spectrum-Table-cell">
<code>over-background</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
uses over background styles or not
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

<td class="spectrum-Table-cell">
<code>quiet</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
uses quiet styles or not
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

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>'secondary' | undefined</code>
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
<code>--spectrum-link-over-background-m-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-over-background)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-over-background-m-text-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-over-background)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-over-background-m-text-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-over-background)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-over-background-m-text-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-over-background)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-primary-l-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-primary-m-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-600)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-primary-m-text-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-primary-m-text-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-600)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-primary-m-text-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-key-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-primary-m-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-primary-s-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-link-primary-xl-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-xl)</code>
</td>

</tr>

</tbody>
</table>
</div>
    