# Phila-UI Boilerplate
This boilerplate is intended to be used with [PhilaUI](https://github.com/CityOfPhiladelphia/phila-ui).

## Usage
Usage is divided by branch:

### master branch
Main template to start a new project from. Has PhilaUI as a dependency, a basic component and a view with the default AppHeader config.

### beta branch
New components that might be in PhilaUI in the future. Has the same config as master.

**The beta branch deploys to S3**

[Beta website](https://d3acfh7pw3cq6.cloudfront.net)

### examples branch
This branch has a growing list of PhilaUI examples, which is used by PhilaUI docs.

**The examples branch deploys to S3**

[Examples website](https://ui-examples.phila.gov)

### All other branches deploy to S3 for quick testing/preview
```https://phila-ui-demo.s3.amazonaws.com/YOUR_BRANCH_NAME/index.html```

#### How to
- Pull the branch "demo-sample"
- ``git checkout -b my-new-branch-name``  (see naming limitation below)
- Update package.json with the version of phila-ui you want to use
- Add demo code in App.vue
- Push new branch to github

**Limitations**
- The branch name should not have any weird characters/symbols, including "/" and "\\".
- Because we are using nested S3 buckets, history mode does not work and should be off when using Vue Router.

You can add "skip ci"
If a custom branch is no longer needed, remove it this repo and from S3.

### next (wip)
This branch will have the next approved releases of PhilaUI, safe to use in production for latest features.

## Install
- ``git clone`` this repo
- checkout one of the branches above
- ``npm install`` to install dependencies
- ``npm run serve`` to start local server

## Docs
See [PhilaUI](https://ui.phila.gov) docs for more information about PhilaUI.

## Issues
Only open boilerplate related issues on this repo. Issues related to PhilaUI should be opened in the [PhilaUI repo](https://github.com/CityOfPhiladelphia/phila-ui).