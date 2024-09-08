import { defineApp } from "@akaia/widgets-core"
import { SpaceScreen } from "./widget"

export type AkaiaApp = {
	init: () => void
}

export const AnytypeWidget: AkaiaApp = defineApp({
	routes: [{ path: "/space", component: SpaceScreen }],
})
