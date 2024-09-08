import { defineApp } from "@akaia/framework"
import { TLDrawCanvas } from "./screens/canvas"

export type AkaiaApp = {
	init: () => void
}

export const TLDrawApp: AkaiaApp = defineApp({
	routes: [{ path: "/demo", component: TLDrawCanvas }],
})
