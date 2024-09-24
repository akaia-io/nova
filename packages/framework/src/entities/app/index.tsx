import { render } from "solid-js/web"

import { type WidgetInputs, widgetContextState, AppContext, setAppContextState } from "./model"
import { ExampleApp } from "./example"
import { getDb } from "@/common/db"
export { useAppContext } from "./model"

const tagName = "akaia-app"

export const appLauncherInit = () => {
	if (customElements.get(tagName) === undefined) {
		customElements.define(
			tagName,

			class AkaiaApp extends HTMLElement {
				static get observedAttributes(): (keyof WidgetInputs)[] {
					return ["account_id", "app_id", "route_path", "route_query", "props"]
				}

				attributeChangedCallback(name: keyof WidgetInputs, oldValue: string, newValue: string) {
					if (oldValue !== newValue) {
						setAppContextState((props) => ({
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
								<AppContext.Provider value={widgetContextState}>
									<link rel="stylesheet" href="/app/akaia_nova.css" />
									<ExampleApp />
								</AppContext.Provider>
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
			[tagName]: WidgetInputs
		}
	}
}
