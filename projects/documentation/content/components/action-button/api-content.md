---
layout: partial.njk
title: 'Action Button: Spectrum Web Components'
displayName: Action Button
componentName: action-button
componentHeading: sp-action-button
partType: api
tags:
    - action-button
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
<code>active</code>
</td>

<td class="spectrum-Table-cell">
<code>active</code>
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
<code>holdAffordance</code>
</td>

<td class="spectrum-Table-cell">
<code>hold-affordance</code>
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
<code>quiet</code>
</td>

<td class="spectrum-Table-cell">
<code>quiet</code>
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
<code>type</code>
</td>

<td class="spectrum-Table-cell">
<code>type</code>
</td>

<td class="spectrum-Table-cell">
<code>'button' | 'submit' | 'reset'</code>
</td>

<td class="spectrum-Table-cell">
<code>'button'</code>
</td>

<td class="spectrum-Table-cell">

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
<code>default slot</code>
</td>

<td class="spectrum-Table-cell">
text label of the Action Button
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>icon</code>
</td>

<td class="spectrum-Table-cell">
The icon to use for Action Button
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
<code>Announces a change in the `selected` property of an action button</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>keydown</code>
</td>

<td class="spectrum-Table-cell">
<code>Trick :focus-visible polyfill into thinking keyboard based focus</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>longpress</code>
</td>

<td class="spectrum-Table-cell">
<code>Synthesizes a "longpress" interaction that signifies a `pointerdown` event that is >=300ms or a keyboard event wher code is `Space` or code is `ArrowDown` while `altKey===true`.</code>
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
<code>--spectrum-actionbutton-l-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-height-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-icon-gap</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-icon-gap-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-icononly-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-icononly-padding-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-icononly-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-icononly-padding-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-min-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-padding-left-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-quiet-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-quiet-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-quiet-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-quiet-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-component-text-line-height)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-textonly-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-l-textonly-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-75)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-background-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-75)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-cta-color-background-default)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-cta-color-background-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-cta-color-background-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-background-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-cta-color-background-key-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-cta-color-background-default)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-cta-color-background-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-cta-color-background-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-border-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-cta-color-background-key-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-hold-icon-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-hold-icon-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-hold-icon-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-hold-icon-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-hold-icon-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-hold-icon-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-icon-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-emphasized-text-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-static-white)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-height-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-hold-icon-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-hold-icon-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-hold-icon-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-hold-icon-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-hold-icon-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-icon-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icon-gap</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-icon-gap-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icononly-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-icononly-padding-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-icononly-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-icononly-padding-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-min-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-padding-left-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-300)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-background-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-background-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-color-gray-200)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-border-size-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thick)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-quiet-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-selected</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-selected-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-disabled)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-selected-down</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-down)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-selected-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-color-selected-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-text-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-component-text-line-height)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-textonly-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-m-textonly-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-m)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-height-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-icon-gap</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-icon-gap-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-icononly-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-icononly-padding-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-icononly-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-icononly-padding-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-min-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-padding-left-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-quiet-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-quiet-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-quiet-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-quiet-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-component-text-line-height)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-textonly-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-s-textonly-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-s)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-height-xl)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-icon-gap</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-icon-gap-l)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-icononly-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-icononly-padding-xl)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-icononly-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-icononly-padding-xl)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-min-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-workflow-padding-left-xl)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-quiet-border-radius</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-radius-regular)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-quiet-border-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-size-thin)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-quiet-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-quiet-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-xl)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-text-font-weight</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-body-text-font-weight)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-text-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-component-text-line-height)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-text-size</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-text-size-xl)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-textonly-padding-left</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-xl)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-actionbutton-xl-textonly-padding-right</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-item-padding-xl)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-alias-body-text-font-family</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-font-family-base)</code>
</td>

</tr>

</tbody>
</table>
</div>
    