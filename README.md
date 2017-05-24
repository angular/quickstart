# Angular QuickStart Source

[![Build Status][travis-badge]][travis-badge-url]

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html), the foundation for most of the documentation samples and potentially a good starting point for your application.

It is extended with testing support so you can start writing tests immediately.

> This is not the perfect arrangement for your application. It is not designed for production. It exists primarily to get you quickly started with learning and prototyping in Angular.

## Table of Contents

* [Quickstart Repo Update](#quickstart-repo-update)
* [Prerequisites](#prerequisites)
* [Creating New QuickStart-Based Projects](#creating-new-quickstart-based-projects)
* [Installing NPM Packages](#installing-npm-packages)
    * [NPM Packages](#npm-packages)
    * [NPM Scripts](#npm-scripts)
* [Testing](#testing)
    * [Unit Tests](#unit-tests)
    * [End-to-End Tests](#end-to-end-tests)
* [Contribution](#contribution)

## Quickstart Repo Update

From time to time the QuickStart will be enhanced so it supports new features or reflects changes to the [official Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

To update your existing project to a current QuickStart version:

1. Create a new project by using [these instructions](#create-a-new-project-based-on-the-quickstart).
1. Copy the code you have in the `main.ts` file of your project onto `src/app/main.ts` in the new project.
1. Copy your old `app` folder into `src/app`.
1. Delete `src/app/main.ts` if you have one (we now use `src/main.ts` instead).
1. Copy your old `index.html`, `styles.css` and `tsconfig.json` into `src/`.
1. Install all your third-party dependencies.
1. Copy your old `e2e/` folder into `e2e/`.
1. Copy over any other files you added to your project.
1. Copy your old `.git` folder into your new project's root.

Now you can continue working on the new project.

## Prerequisites

* [Node.js](https://docs.npmjs.com/getting-started/installing-node) v4.x.x or later.
* NPM 3.x.x or later.

To verify the versions you have installed on your machine, run `node -v` and `npm -v` in the terminal or console window. Earlier Node.js and NPM versions produce errors.

For managing multiple versions of Node.js and NPM, we recommend that you use [NVM](https://github.com/creationix/nvm).

## Creating New QuickStart-Based Projects

1. Clone this repo into the new project folder. For example, `my-proj`.

    ```shell
    git clone https://github.com/angular/quickstart  my-proj
    cd my-proj
    ```

1. Discard the `.git` folder. We have no intention of updating the source on `angular/quickstart`.

    ```shell
    rm -rf .git  # OS/X (bash)
    rd .git /S/Q # windows
    ```

1. (Optional) Delete the non-essential files that concern testing and the QuickStart repository maintenance including all Git-related artifacts&mdashh;such as the `.git` folder and `.gitignore`&mdash;by entering the following commands while in the project folder:

    * For OS/X (bash):

    ```shell
    xargs rm -rf < non-essential-files.osx.txt
    rm src/app/*.spec*.ts
    rm non-essential-files.osx.txt
    ```

    * For Windows:

    ```shell
    for /f %i in (non-essential-files.txt) do del %i /F /S /Q
    rd .git /s /q
    rd e2e /s /q
    ```

1. Create a new Git repo. You can [start writing code](#start-development) now and throw it all away when you are done. If you would rather preserve your work under source control:

    1. Initialize this project as a *local git repo* and make the first commit:
    ```shell
    git init
    git add .
    git commit -m "Initial commit"
    ```

    > If you lost `.gitignore` from the QuickStart repository while deleting the non-essential files, recover it.

    1. Create a remote repository for this project on the service of your choice.

    1. Grab its address. For example, `https://github.com/<my-org>/my-proj.git`. Then, push the local repo to the remote repo.

    ```shell
    git remote add origin <repo-address>
    git push -u origin master
    ```

## Installing NPM Packages

> Verify you have the proper [NPM and NVM versions](#prerequisites) installed.

### NPM Packages

1. Install the NPM packages described in the `package.json` file and verify that it works. The `npm start` command first compiles the application, then simultaneously re-compiles and runs the `lite-server`. Both the compiler and the server watch for file changes.

    > This does not work in Bash for Windows because it does not support servers as of January, 2017.

    ```shell
    npm install
    npm start
    ```

1. Shut it down manually with `Ctrl-C`. You are ready to write your application.

### NPM Scripts

We have captured many of the most useful commands in NPM scripts defined in the `package.json`:

* `npm start`&mdash;Runs the compiler and a server at the same time, both in the watch mode.
* `npm run build`&mdash;Runs the TypeScript compiler once.
* `npm run build:w`&mdash;Runs the TypeScript compiler in the watch mode. The process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve`&mdash;Runs the [lite-server](https://www.npmjs.com/package/lite-server): a light-weight, static file server, written and maintained by [John Papa](https://github.com/johnpapa) and [Christopher Martin](https://github.com/cgmartin) with excellent support for Angular apps that use routing.

Here are the test-related scripts:

* `npm test`&mdash;Compiles, runs and watches the karma unit tests.
* `npm run e2e`&mdash;Compiles and runs Protractor e2e tests written in Typescript (*e2e-spec.ts).

## Testing

The QuickStart documentation does not discuss testing. This repo adds both Karma/Jasmine unit tests and Protractor end-to-end testing support.

These tools are configured for specific conventions that are described below.

> It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time. We recommend that you shut down one before starting another.

### Unit Tests

TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`. Look for the example in `src/app/app.component.spec.ts`. Add as many `.spec.ts` files as you wish. We configured Karma to find them.

Run Unit tests with `npm test`. The command first compiles the application, then simultaneously re-compiles and runs the karma test-runner. Both the compiler and Karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window. We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests. Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and restart it. No worries&mdash;it is pretty quick.

### End-to-End Tests

End-to-end (E2E) tests are in the `e2e` directory, side by side with the `src` folder. Their filenames must end in `.e2e-spec.ts`.  Look for the example `e2e/app.e2e-spec.ts`. Add as many `.e2e-spec.js` files as you wish (although one usually suffices for small projects). We configured Protractor to find them.

Thereafter, run the E2E tests with `npm run e2e`. This command first compiles, then simultaneously starts the `lite-server` at `localhost:8080` and launches Protractor.  

The pass or fail test results appear at the bottom of the terminal window. A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

## Contribution

This package is distributed under a permissive [MIT License](https://github.com/telerik/kendo-angular-quickstart/blob/master/LICENSE). We accept contributions from the public.

Before you pose your suggestions, please make sure that you:

1. Read and sign the [Kendo UI for Angular Contribution License Agreement (CLA)](goo.gl/forms/dXc1RaE8le6rVZ0h1). The CLA confirms that you acknowledge the legal aspects of your contributions.
2. Submit a Pull Request.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
