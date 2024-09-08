import { createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"

export type WidgetInputs = {
	account_id: string
	app_id: string
	route_path: string
	route_query: string
	props: string
}

export type AppContextState = {
	account_id: null | WidgetInputs["account_id"]
	app_id: null | WidgetInputs["app_id"]
	route_path: null | string
	route_query: null | Record<string, undefined | null | boolean | string | object>
	props: null | object
}

const initialAppContext: AppContextState = {
	account_id: null,
	app_id: null,
	route_path: null,
	route_query: null,
	props: null,
}

export const AppContext = createContext(initialAppContext)

export const [widgetContextState, setAppContextState] = createStore(initialAppContext)

export const useAppContext = () => useContext(AppContext)
