import { Surreal } from "surrealdb"
import { surrealdbWasmEngines } from "@surrealdb/wasm"

let db: Surreal | undefined

export async function initDb(): Promise<Surreal | undefined> {
	if (db) return db

	db = new Surreal({
		engines: surrealdbWasmEngines(),
	})

	try {
		await db.connect("indxdb://demo")
		await db.use({ namespace: "test", database: "test" })
		return db
	} catch (error) {
		console.error("Failed to connect to SurrealDB:", error)
		throw error
	}
}

export async function closeDb(): Promise<void> {
	if (!db) return
	await db.close()
	db = undefined
}

export function getDb(): Surreal | undefined {
	return db
}
