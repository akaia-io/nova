import { render } from "solid-js/web"

import {
	type ExtensionInputs,
	extensionContextState,
	ExtensionContext,
	setExtensionContextState,
} from "./model"
import { ExampleExtension } from "./example"
import { getDb } from "@/common/db"
export { useExtensionContext } from "./model"

const tagName = "akaia-app"

export const install = () => {
	if (customElements.get(tagName) === undefined) {
		customElements.define(
			tagName,

			class AkaiaExtension extends HTMLElement {
				static get observedAttributes(): (keyof ExtensionInputs)[] {
					return ["account_id", "app_id", "route_path", "route_query", "props"]
				}

				attributeChangedCallback(name: keyof ExtensionInputs, oldValue: string, newValue: string) {
					if (oldValue !== newValue) {
						setExtensionContextState((props) => ({
							...props,
							[name]: name === "route_query" || name === "props" ? JSON.parse(newValue) : newValue,
						}))
					}
				}

				connectedCallback() {
					console.log(getDb()?.info())

					render(
						() => {
							return (
								<ExtensionContext.Provider value={extensionContextState}>
									<link rel="stylesheet" href="/app/akaia_nova.css" />
									<ExampleExtension />
								</ExtensionContext.Provider>
							)
						},

						this.attachShadow({ mode: "closed" }),
					)
				}
			},
		)
	}
}

declare global {
	namespace JSX {
		export interface IntrinsicElements {
			[tagName]: ExtensionInputs
		}
	}
}
