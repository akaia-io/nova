# AKAIA Nova

An alternative implementation of Blockchain Operating System concept on NEAR Protocol.

## Development

### Prerequisites

Install Mise unless it's already installed:

<https://mise.jdx.dev/getting-started.html>

#### Ubuntu 24.04 requirements

```sh
sudo apt install gcc automake cmake
```

### Installing required tools and dependencies

```sh
bash -c "mise trust; mise i && cargo install just"; mise reshim; just setup
```

### Running development server

```sh
just dev
```

## CI/CD

### Building production bundle

```sh
just build
```
