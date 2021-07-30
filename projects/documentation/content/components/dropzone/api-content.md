---
layout: partial.njk
title: 'Dropzone: Spectrum Web Components'
displayName: Dropzone
componentName: dropzone
componentHeading: sp-dropzone
partType: api
tags:
    - dropzone
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
<code>isDragged</code>
</td>

<td class="spectrum-Table-cell">
<code>dragged</code>
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
<code>dropEffect</code>
</td>

<td class="spectrum-Table-cell">
<code>dropEffect</code>
</td>

<td class="spectrum-Table-cell">
<code>'copy' | 'move' | 'link' | 'none'</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
Controls the feedback (typically visual) the user is given during a drag and drop operation
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
The default slot on an `sp-dropzone` is a great place to place upload instructions built with an `sp-illustrated-message` or other information, possibly even built from data provided by the upload, to support users successfully interacting with the drag and drop based features of your application
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
<code>sp-dropzone-dragleave</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces when dragged files have been moved out of the UI without having been dropped.</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>sp-dropzone-dragover</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces when files have been dragged over the UI, but not yet dropped.</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>sp-dropzone-drop</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces when dragged files have been dropped on the UI.</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>sp-dropzone-should-accept</code>
</td>

<td class="spectrum-Table-cell">
<code>A cancellable event that confirms whether or not a file dropped on the UI should be accepted.</code>
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
<code>--spectrum-dropzone-background-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-highlight-selected)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dropzone-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-300)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dropzone-border-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dropzone-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dropzone-border-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thick)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dropzone-padding</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-900)</code>
</td>

</tr>

</tbody>
</table>
</div>
    