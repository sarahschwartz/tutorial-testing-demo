# Tutorial Testing Demo

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

It serves as a demonstration of how you can create an end-to-end test for a tutorial using Playwright.

## Running Locally

### Installation

To run the project locally, make sure you have [`pnpm`](https://pnpm.io/) installed.

Then, install the dependencies in the project folder with:

```sh
pnpm install
```

### Testing the tutorial

To run the end-to-end test for the tutorial, you can run:

```sh
pnpm test
```

This will run the Playwright test in `tests/example.spec.ts`, which in turn will execute all of the steps in `<span>` elements in `docs/intro.md`.

Once the test is completed, you should see a folder called `tests-output` where the tutorial project output files will be.

### Local Development

To run the docusarus site where the tutorial is located, you can run:

```sh
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
