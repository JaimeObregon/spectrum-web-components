---
layout: partial.njk
title: 'Card: Spectrum Web Components'
displayName: Card
componentName: card
componentHeading: sp-card
partType: api
tags:
    - card
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
<code>asset</code>
</td>

<td class="spectrum-Table-cell">
<code>asset</code>
</td>

<td class="spectrum-Table-cell">
<code>'file' | 'folder' | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>focused</code>
</td>

<td class="spectrum-Table-cell">
<code>focused</code>
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
<code>heading</code>
</td>

<td class="spectrum-Table-cell">
<code>heading</code>
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
<code>horizontal</code>
</td>

<td class="spectrum-Table-cell">
<code>horizontal</code>
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
<code>selected</code>
</td>

<td class="spectrum-Table-cell">
<code>selected</code>
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
<code>size</code>
</td>

<td class="spectrum-Table-cell">
<code>size</code>
</td>

<td class="spectrum-Table-cell">
<code>'s' | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>subheading</code>
</td>

<td class="spectrum-Table-cell">
<code>subheading</code>
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
<code>toggles</code>
</td>

<td class="spectrum-Table-cell">
<code>toggles</code>
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
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>'standard' | 'gallery' | 'quiet'</code>
</td>

<td class="spectrum-Table-cell">
<code>'standard'</code>
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
<code>actions</code>
</td>

<td class="spectrum-Table-cell">
an `sp-action-menu` element outlining actions to take on the represened object
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>cover-photo</code>
</td>

<td class="spectrum-Table-cell">
This is the cover photo for Default and Quiet Cards
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>description</code>
</td>

<td class="spectrum-Table-cell">
A description of the card
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>footer</code>
</td>

<td class="spectrum-Table-cell">
Footer text
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>heading</code>
</td>

<td class="spectrum-Table-cell">
HTML content to be listed as the heading
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>preview</code>
</td>

<td class="spectrum-Table-cell">
This is the preview image for Gallery Cards
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>subheading</code>
</td>

<td class="spectrum-Table-cell">
HTML content to be listed as the subheading
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
<code>Announces a change in the `selected` property of a card</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>click</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
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
<code>--spectrum-alias-highlight-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-actions-margin</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-125)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-body-content-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-175)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-body-content-margin-top</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-75)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-body-header-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-225)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-body-padding-bottom</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-250)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-body-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-300)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-body-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-300)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-body-padding-top</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-250)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-border-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-border-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-checkbox-margin</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-coverphoto-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-coverphoto-border-bottom-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-coverphoto-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-coverphoto-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-1700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-description-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-footer-border-top-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-10)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-footer-padding-top</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-175)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-min-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-3000)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-body-header-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-225)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-body-header-margin-top</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-175)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-border-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-blue-500)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-min-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-1700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-preview-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-preview-background-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-300)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-preview-padding</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-250)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-small-body-header-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-150)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-small-body-margin-top</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-small-checkbox-margin</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-125)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-small-min-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-900)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-small-preview-padding</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-150)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-small-title-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-font-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-subtitle-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-700)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-quiet-title-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-800)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-subtitle-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-subtitle-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-font-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-card-title-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-quickactions-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-500)</code>
</td>

</tr>

</tbody>
</table>
</div>
    