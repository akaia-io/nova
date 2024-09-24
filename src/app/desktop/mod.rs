use {crate::ExtensionShell, leptos::*};

#[component]
pub fn NovaDesktop() -> impl IntoView {
	view! { <ExtensionShell props={r#"{ "name": "akaia" }"#} /> }
}
