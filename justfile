# (cargo install --git https://github.com/bram209/leptosfmt.git)

#	(sudo apt-get install pkg-config libssl-dev)
setup:
	(cargo install --locked cargo-make cargo-expand cargo-tree)
	(cargo install cargo-leptos leptosfmt)
	(cargo install tauri-cli --version "^2.0.0-rc")
	(cargo install dioxus-cli)

vendor:
	(cargo vendor .cache/cargo)

fmt:
	(rustfmt ./src/**/*.rs)
	(leptosfmt ./src)

build-framework:
	(cargo make framework_build)

dev-portal:
	(cd ./packages/portal && dx serve --port 1420)

dev-launcher:
	(cd ./apps/launcher && cargo tauri dev)

dev: build-framework
	(cargo make devserver)

build:
	(cargo leptos build --release)

# preview:
#	()

deploy:
	(sudo mkdir -p /akaia/configuration/caddy)
	(sudo cp --update ./src/system/configuration/caddy/* /akaia/configuration/caddy/Caddyfile)
	(sudo cp --update ./src/system/configuration/systemd/* /etc/systemd/system/)
	(sudo chown -R akaia:akaia /akaia/configuration)
	(sudo systemctl daemon-reload)
	(sudo systemctl enable nova.akaia)
	(sudo systemctl restart nova.akaia)
