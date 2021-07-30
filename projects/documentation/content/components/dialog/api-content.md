---
layout: partial.njk
title: 'Dialog: Spectrum Web Components'
displayName: Dialog
componentName: dialog
componentHeading: sp-dialog
partType: api
tags:
    - dialog
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
<code>dismissable</code>
</td>

<td class="spectrum-Table-cell">
<code>dismissable</code>
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
<code>error</code>
</td>

<td class="spectrum-Table-cell">
<code>error</code>
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
<code>mode</code>
</td>

<td class="spectrum-Table-cell">
<code>mode</code>
</td>

<td class="spectrum-Table-cell">
<code>'fullscreen' | 'fullscreenTakeover' | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>noDivider</code>
</td>

<td class="spectrum-Table-cell">
<code>no-divider</code>
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
<code>'s' | 'm' | 'l' | undefined</code>
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
<code>button</code>
</td>

<td class="spectrum-Table-cell">
Button elements addressed to this slot may be placed below the content when not delivered in a fullscreen mode
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>footer</code>
</td>

<td class="spectrum-Table-cell">
Content addressed to the `footer` will be placed below the main content and to the side of any `[slot='button']` content
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>heading</code>
</td>

<td class="spectrum-Table-cell">
Acts as the heading of the dialog. This should be an actual heading tag `<h1-6 />`
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>hero</code>
</td>

<td class="spectrum-Table-cell">
Accepts a hero image to display at the top of the dialog
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>default slot</code>
</td>

<td class="spectrum-Table-cell">
Content not addressed to a specific slot will be interpreted as the main content of the dialog
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
<code>close</code>
</td>

<td class="spectrum-Table-cell">
<code>Announces that the dialog has been closed.</code>
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
<code>--spectrum-dialog-confirm-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-description-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-800)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-description-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-font-weight-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-description-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-component-text-line-height)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-description-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-divider-margin-bottom</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-divider-margin-top</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-150)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-icon-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-900)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-min-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-3600)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-padding</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-title-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-900)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-title-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-font-weight-bold)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-title-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-heading-text-line-height)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-confirm-title-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>undefined</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-error-icon-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-negative-color-icon)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-dialog-error-width</code>
</td>

<td class="spectrum-Table-cell">
<code>90%</code>
</td>

</tr>

</tbody>
</table>
</div>
    