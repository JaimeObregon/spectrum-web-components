---
layout: partial.njk
title: 'Progress Bar: Spectrum Web Components'
displayName: Progress Bar
componentName: progress-bar
componentHeading: sp-progress-bar
partType: api
tags:
    - progress-bar
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
<code>indeterminate</code>
</td>

<td class="spectrum-Table-cell">
<code>indeterminate</code>
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
<code>overBackground</code>
</td>

<td class="spectrum-Table-cell">
<code>over-background</code>
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
<code>progress</code>
</td>

<td class="spectrum-Table-cell">
<code>progress</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>0</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>sideLabel</code>
</td>

<td class="spectrum-Table-cell">
<code>side-label</code>
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
<code>--spectrum-fieldlabel-m-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-label-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-fieldlabel-side-l-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-175)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-fieldlabel-side-m-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-150)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-fieldlabel-side-s-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-130)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-fieldlabel-side-xl-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-185)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-meter-negative-m-track-fill-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-negative-color-status)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-meter-notice-m-track-fill-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-notice-color-status)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-meter-positive-m-track-fill-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-positive-color-status)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-l-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-l-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-l-indeterminate-duration</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-animation-duration-2000)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-l-indeterminate-fill-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-1800)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-l-label-gap-y</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-l-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-2500)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-75)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-indeterminate-duration</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-animation-duration-2000)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-indeterminate-fill-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-1700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-label-gap-y</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-over-background-track-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-track-color-over-background)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-over-background-track-fill-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-track-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-track-color-default)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-track-fill-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-500)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-m-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-2400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-s-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-s-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-s-indeterminate-duration</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-animation-duration-2000)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-s-indeterminate-fill-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-1700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-s-label-gap-y</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-s-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-2400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-xl-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-xl-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-125)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-xl-indeterminate-duration</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-animation-duration-2000)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-xl-indeterminate-fill-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-2000)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-xl-label-gap-y</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-progressbar-xl-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-2800)</code>
</td>

</tr>

</tbody>
</table>
</div>
    