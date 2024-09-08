import { defineApp } from "@akaia/framework"
import { DemoScreen } from "./screens/demo"

export type AkaiaApp = {
	init: () => void
}

export const VaultWidget: AkaiaApp = defineApp({
	routes: [{ path: "/demo", component: DemoScreen }],
})
