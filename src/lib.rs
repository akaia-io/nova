#![allow(non_snake_case)]

use leptos::*;

pub mod app;

mod entities;
pub use entities::*;

mod common;
pub use common::*;

#[wasm_bindgen::prelude::wasm_bindgen]
pub fn hydrate() {
	#[allow(unused_imports)]
	use app;

	console_error_panic_hook::set_once();
	leptos_dom::HydrationCtx::stop_hydrating();
}
