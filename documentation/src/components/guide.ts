/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { html, CSSResultArray } from '@spectrum-web-components/base';
import { Link } from '@spectrum-web-components/link';
import { Button } from '@spectrum-web-components/button';
import '@spectrum-web-components/theme/theme-lightest.js';
import '@spectrum-web-components/theme/scale-medium.js';
import './layout.js';
import { GuideDocs } from '../../guides/index.js';
import { RouteComponent } from './route-component.js';
import componentStyles from './markdown.css';

class GuideElement extends RouteComponent {
    location?: {
        baseUrl: string;
        params: {
            guide: string;
        };
        pathname: string;
    };

    public static get styles(): CSSResultArray {
        return [componentStyles];
    }

    public static elementDefinitions = {
        'sp-link': Link,
        'sp-button': Button,
    };

    public get componentName(): string {
        if (this.location) {
            return `sp-${this.location.params.guide}`;
        }
        return '';
    }

    render() {
        let result;
        if (this.location && this.location.params) {
            result = html`
                <article class="spectrum-Typography">
                    ${GuideDocs.get(
                        this.location.params.guide || 'getting-started'
                    )}
                </article>
            `;
        }
        return result || html``;
    }
}
customElements.define('docs-guide', GuideElement);
