# Angular QuickStart Source
[![Build Status][travis-badge]][travis-badge-url]

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html)&mdash;the foundation for most of the Kendo UI for Angular documentation samples and potentially a good starting point for your application.

It has been extended with testing support so you can start writing tests immediately.

> * This is not the perfect arrangement for your application. It is not designed for production. It exists primarily to get you started quickly with learning and prototyping in Angular.
> * We are unlikely to accept suggestions about how to grow this QuickStart into something it is not. Please keep that in mind before posting issues and Pull Requests (PR).

## Table of Contents

* [Version Upgrade of the Repo](#version-upgrade-of-the-repo)
* [Prerequisites](#prerequisites)
* [Creating New Projects with the QuickStart](#creating-new-projects-with-the-quickstart)
    * [Deleting Non-Essential Files](#deleting-non-essential-files)
    * [Creating New Git Repos](#creating-new-git-repos)
* [Installing NPM Packages](#installing-npm-packages)
* [NPM Scripts](#npm-scripts)
* [Testing](#testing)
    * [Unit Tests](#unit-tests)
    * [E2E Tests](#e2e-tests)

## Version Upgrade of the Repo

From time to time the QuickStart is enhanced to reflect the support for new features or the changes in the [official Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

To update your existing project to an up-to-date QuickStart:

1. Create a new project by using the [instructions below](#create-a-new-project-based-on-the-quickstart).
1. Copy the code you have in the `main.ts` file of your project onto `src/app/main.ts` in the new project.
1. Copy your old `app` folder into `src/app`.
1. Delete `src/app/main.ts` if you have such a file&mdash;Kendo UI for Angular now uses `src/main.ts` instead.
1. Copy your old `index.html`, `styles.css`, and `tsconfig.json` into `src/`.
1. Install all your third-party dependencies.
1. Copy your old `e2e/` folder into `e2e/`.
1. Copy over any other files you added to your project.
1. Copy your old `.git` folder into the root of your new project.

Now you can continue working on the new project.

## Prerequisites

Node.js and NPM are essential to Angular development. If not already installed on your machine, <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">get it now</a>.

> * Verify that you are running at least node `v4.x.x` and npm `3.x.x` by running `node -v` and `npm -v` in a terminal or console window. Previous versions cause errors.

For managing multiple versions of Node.js and NPM, use the [Node Version Manager (NVM)](https://github.com/creationix/nvm).

## Creating New Projects with the QuickStart

1. Clone this repo into a new project folder&mdash;for example, `my-proj`.

    ```shell
    git clone https://github.com/angular/quickstart  my-proj
    cd my-proj
    ```

1. Discard the `.git` folder because the team will not be updating the source on `angular/quickstart`.

    ```shell
    rm -rf .git  # OS/X (bash)
    rd .git /S/Q # windows
    ```

### (Optional) Deleting Non-Essential Files

To quickly delete the non-essential files that concern testing and QuickStart repository maintenance, including all Git-related artifacts such as the `.git` and `.gitignore` flders, enter the following commands while in the project folder:

* OS/X (bash)

    ```shell
    xargs rm -rf < non-essential-files.osx.txt
    rm src/app/*.spec*.ts
    rm non-essential-files.osx.txt
    ```

* Windows

    ```shell
    for /f %i in (non-essential-files.txt) do del %i /F /S /Q
    rd .git /s /q
    rd e2e /s /q
    ```

### Creating New Git Repos

You can now [start writing code](#start-development) and discard it all away when you are done.

However, if you want to preserve your work under source control, consider taking the following steps:

1. Initialize this project as a *local git repo* and make the first commit:

    ```shell
    git init
    git add .
    git commit -m "Initial commit"
    ```

    > If you lost the `.gitignore` folder from the QuickStart repository while you deleted the non-essential files, recover it.

1. Create a remote repository for this project on the service of your choice.

1. Grab its address&mdash;for example, `https://github.com/<my-org>/my-proj.git`&mdash;and push the local repo to the remote one.

    ```shell
    git remote add origin <repo-address>
    git push -u origin master
    ```

## Installing NPM Packages

> For more information, refer to the [NPM and NVM version notes](#prerequisites) section.

1. To install the NPM packages, use the description in `package.json`. Verify that it works:

    ```shell
    npm install
    npm start
    ```

    > As of January 2017, Bash for Windows does not support servers and this approach does not work in it.

1. The `npm start` command first compiles the application, then simultaneously re-compiles and runs the `lite-server`. Both the compiler and the server watch for file changes. Shut it down manually with `Ctrl`+`C`. Now you are ready to write your application.

### NPM Scripts

The following list captures the most useful commands in NPM scripts that are defined in `package.json`:

* `npm start`&mdash;Runs the compiler and the server at the same time, both in the watch mode.
* `npm run build`&mdash;Runs the TypeScript compiler once.
* `npm run build:w`&mdash;Runs the TypeScript compiler in the watch mode. The process keeps running, awaiting changes to the TypeScript files and re-compiling when it sees them.
* `npm run serve`&mdash;Runs the [lite-server](https://www.npmjs.com/package/lite-server). The lite-server is a light-weight, static file server, which is written and maintained by [John Papa](https://github.com/johnpapa) and [Christopher Martin](https://github.com/cgmartin) and provides excellent support for Angular applications that use routing.

The following list captures the test related scripts:

* `npm test`&mdash;Compiles, runs, and watches the Karma unit tests.
* `npm run e2e`&mdash;Compiles and runs Protractor end-to-end (E2E) tests that are written in Typescript (`*e2e-spec.ts`).

## Testing

The QuickStart documentation does not discuss testing. This repo adds both the Karma or Jasmine unit test and the Protractor end-to-end testing support. These tools are configured for specific conventions that are described below.

> It is unwise and rarely possible to run the application, the unit tests, and the E2E tests at the same time. It is recommended that you shut down one before starting another.

### Unit Tests

TypeScript unit-tests are usually located in the `src/app` folder. Make sure their filenames end in `.spec.ts`.

1. Look for the `src/app/app.component.spec.ts` example.

1. Add as many `.spec.ts` files as you wish. The team configured Karma to find them.

1. Run it by using `npm test`. The command first compiles the application, then simultaneously re-compiles and runs the Karma test-runner. Both Karma and the compiler watch for (different) file changes.

1. Shut it down manually with `Ctrl`+`C`. The test-runner output appears in the terminal window.

You can update your application and your tests in real-time by keeping a weather eye on the console for broken tests. Karma is occasionally confused and it is often necessary to shut down its browser or even use the shut-down command (`Ctrl`+`C`) and restart it. No worries&mdash;it is pretty quick.

### E2E Tests

E2E tests are located in the `e2e` directory side by side with the `src` folder. Make sure their filenames end in `.e2e-spec.ts`.

1. Look for the `e2e/app.e2e-spec.ts` example.

1. Add as many `.e2e-spec.js` files as you wish, although for smaller projects one test is usually sufficient. The team configured Protractor to find them.

1. Run them by using `npm run e2e`. The command first compiles, then simultaneously starts the lite-server at `localhost:8080` and launches Protractor.  

    The passed or failed test results appear at the bottom of the terminal window. A custom reporter (see `protractor.config.js`) generates a `./_test-output/protractor-results.txt` file, which is easier to read. This file is excluded from source control.

1. Shut it down manually with `Ctrl`+`C`.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
