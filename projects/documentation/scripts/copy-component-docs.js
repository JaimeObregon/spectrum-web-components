/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import fs from 'fs';
import globby from 'globby';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const projectDir = path.resolve(__dirname, '..', '..', '..');
const destinationPath = path.resolve(__dirname, '..', 'content', 'components');
const partialPath = path.resolve(
    __dirname,
    '..',
    'content',
    '_includes',
    'partials',
    'components'
);

function nameToTitle(name) {
    return name.replace(/((^|\-)(\w))/gm, (match, p1, p2, p3) => {
        let result = p3.toUpperCase();
        if (result === 'Ui') {
            result = 'UI';
        }
        if (p2 === '-') {
            result = ` ${result}`;
        }
        return result;
    });
}

function sortByName(a, b) {
    if (!a.name || !b.name) {
        return 0;
    }
    if (a.name > b.name) {
        return 1;
    }
    if (b.name > a.name) {
        return -1;
    }
    return 0;
}

function buildTable(title, rowData, headings, cells) {
    return `
### ${title}

<div class="table-container">
<table class="spectrum-Table">
<thead class="spectrum-Table-head">
<tr>
${headings
    .map(
        (heading) => `
<th class="spectrum-Table-headCell">
${heading}
</th>
`
    )
    .join('')}
</tr>
</thead>
<tbody class="spectrum-Table-body">
${rowData
    .sort(sortByName)
    .map(
        (property) => `
<tr class="spectrum-Table-row">
${cells
    .map(
        (cell) => `
<td class="spectrum-Table-cell">
${cell(property)}
</td>
`
    )
    .join('')}
</tr>
`
    )
    .join('')}
</tbody>
</table>
</div>
    `;
}

async function main() {
    // Create the test directory if needed.
    if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath);
    }
    // Create the test directory if needed.
    if (!fs.existsSync(partialPath)) {
        fs.mkdirSync(partialPath);
    }

    let rawCustomElementsJSON = fs.readFileSync(
        `${projectDir}/projects/documentation/custom-elements.json`
    );
    let customElements = JSON.parse(rawCustomElementsJSON);

    for await (const path of globby.stream(`${projectDir}/packages/**/*.md`)) {
        let componentName = /([^/]+)\/([a-zA-Z-]+)\.md$/.exec(path)[1];
        let elementByDirectory;
        customElements.modules.find((jsModule) => {
            elementByDirectory = jsModule.declarations.find(
                (jsDeclarations) => {
                    return jsDeclarations.tagName === componentName;
                }
            );
            return elementByDirectory;
        });
        const fileName = /([a-zA-Z-]+)\.md$/.exec(path)[0];
        if (fileName === 'CHANGELOG.md' || /node_modules/.test(path)) {
            continue;
        }
        if (fileName !== 'README.md') {
            componentName = fileName.replace('.md', '');
        }
        let componentHeading = componentName;
        // Create the test directory if needed.
        if (!fs.existsSync(`${destinationPath}/${componentName}`)) {
            fs.mkdirSync(`${destinationPath}/${componentName}`);
        }
        // Support the full page delivery of "Examples" and "API"
        const exampleDestinationFile = `${destinationPath}/${componentName}/index.md`;
        const apiDestinationFile = `${destinationPath}/${componentName}/api.md`;
        // Create content only pages for each section of an individual elements docs
        // The next two are not fully leveraged just yet.
        const examplePartialFile = `${destinationPath}/${componentName}/content.md`;
        const apiPartialFile = `${destinationPath}/${componentName}/api-content.md`;
        let elementByComponentName;
        customElements.modules.find((jsModule) => {
            elementByComponentName = jsModule.declarations.find(
                (jsDeclarations) => {
                    return jsDeclarations.tagName === 'sp-' + componentName;
                }
            );
            return elementByComponentName;
        });
        if (elementByComponentName) {
            componentHeading = 'sp-' + componentHeading;
        }
        const tag = elementByComponentName || elementByDirectory;
        // Read the source markdown file.
        const body = fs.readFileSync(path);
        if (tag) {
            fs.writeFileSync(
                apiDestinationFile,
                `---
layout: api.njk
title: '${nameToTitle(componentName)} API: Spectrum Web Components'
displayName: ${nameToTitle(componentName)}
componentName: ${componentName}
componentHeading: ${componentHeading}
tags:
  - component-api
---`
            );
            fs.writeFileSync(
                apiPartialFile,
                `---
layout: partial.njk
title: '${nameToTitle(componentName)}: Spectrum Web Components'
displayName: ${nameToTitle(componentName)}
componentName: ${componentName}
componentHeading: ${componentHeading}
partType: api
tags:
    - ${componentName}
---
${
    tag.attributes && tag.attributes.length
        ? buildTable(
              'Attributes and Properties',
              tag.attributes,
              ['Property', 'Attribute', 'Type', 'Default', 'Description'],
              [
                  (attribute) => `<code>${attribute.fieldName}</code>`,
                  (attribute) => `<code>${attribute.name || ''}</code>`,
                  (attribute) => `<code>${attribute.type?.text || ''}</code>`,
                  (attribute) => `<code>${attribute.default || ''}</code>`,
                  (attribute) => `${attribute.description || ''}`,
              ]
          )
        : ``
}
${
    tag.slots && tag.slots.length
        ? buildTable(
              'Slots',
              tag.slots,
              ['Name', 'Description'],
              [
                  (property) => `<code>${property.name || 'default slot'}</code>`,
                  (property) => `${property.description || ''}`,
              ]
          )
        : ``
}
${
    tag.events &&
    tag.events.length &&
    tag.events.filter((tag) => tag.privacy !== 'private').length
        ? buildTable(
              'Events',
              tag.events.filter((tag) => tag.privacy !== 'private'),
              ['Name', 'Description'],
              [
                  (property) => `<code>${property.name}</code>`,
                  (property) => `<code>${property.description || ''}</code>`,
              ]
          )
        : ``
}
${
    tag.cssProperties && tag.cssProperties.length
        ? buildTable(
              'CSS Custom Properties',
              tag.cssProperties,
              ['Name', 'Default'],
              [
                  (property) => `<code>${property.name}</code>`,
                  (property) => `<code>${property.default || '""'}</code>`,
              ]
          )
        : ``
}`
            );
        }
        fs.writeFileSync(
            exampleDestinationFile,
            `---
layout: examples.njk
title: '${nameToTitle(componentName)}: Spectrum Web Components'
displayName: ${nameToTitle(componentName)}
componentName: ${componentName}
componentHeading: ${componentHeading}
tags:
  - component-examples
---`
        );
        fs.writeFileSync(
            examplePartialFile,
            `---
layout: partial.njk
title: '${nameToTitle(componentName)}: Spectrum Web Components'
displayName: ${nameToTitle(componentName)}
componentName: ${componentName}
partType: examples
tags:
  - ${componentName}
---
${body}`
        );
    }
}

main();
