---
layout: partial.njk
title: 'Number Field: Spectrum Web Components'
displayName: Number Field
componentName: number-field
componentHeading: sp-number-field
partType: api
tags:
    - number-field
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
<code>allowedKeys</code>
</td>

<td class="spectrum-Table-cell">
<code>allowed-keys</code>
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
<code>autocomplete</code>
</td>

<td class="spectrum-Table-cell">
<code>autocomplete</code>
</td>

<td class="spectrum-Table-cell">
<code>| HTMLInputElement['autocomplete']
        | HTMLTextAreaElement['autocomplete'] | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
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
<code>formatOptions</code>
</td>

<td class="spectrum-Table-cell">
<code>format-options</code>
</td>

<td class="spectrum-Table-cell">
<code>Intl.NumberFormatOptions</code>
</td>

<td class="spectrum-Table-cell">
<code>{}</code>
</td>

<td class="spectrum-Table-cell">
An `<sp-number-field>` element will process its numeric value with
`new Intl.NumberFormat(this.resolvedLanguage, this.formatOptions).format(this.valueAsNumber)`
in order to prepare it for visual delivery in the input. In order to customize this
processing supply your own `Intl.NumberFormatOptions` object here.

See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>grows</code>
</td>

<td class="spectrum-Table-cell">
<code>grows</code>
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
<code>hideStepper</code>
</td>

<td class="spectrum-Table-cell">
<code>hide-stepper</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Whether the stepper UI is hidden or not.
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>invalid</code>
</td>

<td class="spectrum-Table-cell">
<code>invalid</code>
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
<code>keyboardFocused</code>
</td>

<td class="spectrum-Table-cell">
<code>keyboard-focused</code>
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
<code>max</code>
</td>

<td class="spectrum-Table-cell">
<code>max</code>
</td>

<td class="spectrum-Table-cell">
<code>number | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>maxlength</code>
</td>

<td class="spectrum-Table-cell">
<code>maxlength</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>-1</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>min</code>
</td>

<td class="spectrum-Table-cell">
<code>min</code>
</td>

<td class="spectrum-Table-cell">
<code>number | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>minlength</code>
</td>

<td class="spectrum-Table-cell">
<code>minlength</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>-1</code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>multiline</code>
</td>

<td class="spectrum-Table-cell">
<code>multiline</code>
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
<code>pattern</code>
</td>

<td class="spectrum-Table-cell">
<code>pattern</code>
</td>

<td class="spectrum-Table-cell">
<code>string | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>placeholder</code>
</td>

<td class="spectrum-Table-cell">
<code>placeholder</code>
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
<code>required</code>
</td>

<td class="spectrum-Table-cell">
<code>required</code>
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
<code>step</code>
</td>

<td class="spectrum-Table-cell">
<code>step</code>
</td>

<td class="spectrum-Table-cell">
<code>number | undefined</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
The distance by which to alter the value of the element when taking a "step".

When `this.formatOptions.style === 'percentage'` the default step will be
set to 0.01 unless otherwise supplied to the element.
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>stepModifier</code>
</td>

<td class="spectrum-Table-cell">
<code>step-modifier</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>10</code>
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
<code>valid</code>
</td>

<td class="spectrum-Table-cell">
<code>valid</code>
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
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>string | number</code>
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
<code>change</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>input</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
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
<code>--spectrum-alias-border-radius-regular</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-50)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-alias-border-size-thin</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-static-size-10)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-alias-single-line-height</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-400)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-icon-chevron-down-small-width</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-global-dimension-size-100)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-m-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-m-border-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-transparent)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-m-border-color-error</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-negative-color-default)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-m-border-color-error-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-m-border-color-error-mouse-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-semantic-negative-color-state-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-m-border-color-hover</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-hover)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-m-border-color-key-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-m-border-color-mouse-focus</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-mouse-focus)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-quiet-m-border-color</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color)</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>--spectrum-textfield-quiet-m-border-color-disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>var(--spectrum-alias-border-color-mid)</code>
</td>

</tr>

</tbody>
</table>
</div>
    