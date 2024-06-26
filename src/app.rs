mod id;
mod index;
mod not_found;

use {
	self::{id::IdPage, index::IndexPage, not_found::NotFoundPage},
	leptos::*,
	leptos_meta::*,
	leptos_query::{provide_query_client_with_options_and_persister, query_persister},
	leptos_query_devtools::LeptosQueryDevtools,
	leptos_router::*,
};

#[component]
pub fn Nova() -> impl IntoView {
	provide_meta_context();

	provide_query_client_with_options_and_persister(
		Default::default(),
		query_persister::LocalStoragePersister,
	);

	view! {
		<Script id={"unocss"} src={"/static/vendor/uno_attributify.runtime.js"}/>
		<Stylesheet id={"leptos"} href={"/app/akaia_nova.css"}/>
		<Title text={"AKAIA"}/>
		<Body attr:m={"0"} attr:h={"100vh"} attr:flex={"~ col"}/>

		<Router>
			<main p={"4"} h={"100%"} flex={"~ col"} items={"center"} justify={"center"}>
				<Routes>
					<Route path={"/"} view={IndexPage}/>
					<Route path={"/:id"} view={IdPage}/>
					<Route path={"/*any"} view={NotFoundPage}/>
				</Routes>
			</main>
		</Router>

		<LeptosQueryDevtools/>
	}
}
