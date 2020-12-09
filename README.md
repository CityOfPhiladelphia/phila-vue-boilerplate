# Phila-UI Boilerplate
This boilerplate is intended to be used with [PhilaUI](https://github.com/CityOfPhiladelphia/phila-ui).

## Usage
Usage is devided by branch:

### master
Main template to start a new project from. Has PhilaUI as a dependency, a basic component and view with the default AppHeader config.

### beta
New components that might be in PhilaUI in the future. Has the same config as master.

**The beta branch deploys to S3 so it's easier to share updates to everyone.**

### examples
This branch has a growing list of PhilaUI examples, which is used by PhilaUI docs.

**The examples branch deploys to S3**

### next (wip)
This branch will have the next approved releases of PhilaUI, safe to use in production for latest features.

## Install
- ``git clone`` this repo
- checkout one of the branches above
- ``npm install`` to install dependencies
- ``npm run serve`` to start local server

## Docs
See [PhilaUI](https://d1m9pvzdejpqbs.cloudfront.net) docs for more information about PhilaUI.

## Issues
Only open boilerplate related issues on this repo. Issues related to PhilaUI should be opened in the [PhilaUI repo](https://github.com/CityOfPhiladelphia/phila-ui).