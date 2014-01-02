# hydrajs-router-plugin

Is a plugin to execute the specified callback when the url changes.

## Update to version 1.0.0

[![Build Status](https://travis-ci.org/HydraJS/hydrajs-router-plugin.png)](https://travis-ci.org/HydraJS/hydrajs-router-plugin)

[Changelog](https://raw.github.com/HydraJS/hydrajs-router-plugin/master/changelog.txt)

## Install

Install with [Bower](http://bower.io)

    bower install hydrajs-router-plugin

Install with [Component](http://component.io)

    component install hydrajs-router-plugin

Install with [NPM](http://npmjs.org)

    npm install hydrajs-router-plugin

### Use in browser

Insert in your html code:

	<script type="text/javascript" src="hydra.js"></script
	<script type="text/javascript" src="hydrajs-router-plugin.js"></script>

### Use with requirejs

Insert in your code:

    define(['hydrajs-router-plugin'], function () {
        // code here.
    });

### How it works

The router looks for the id of the body and executes a callback if this id matches any of the added routes.

### Common usage

hydrajs-router-plugin extends Hydra.js library adding new methods.

#### Hydra.router.add

This method adds a new route to execute when the url changes.

    Hydra.router.add( sIdBody, fpCallback );

#### Hydra.router.setDefault

This methd adds a default callback to execute if there is no route assigned to the current id.

    Hydra.router.setDefault( fpDefaultCallback );

## API
### Hydra.router
#### add - Params [String - body id, Function - callback to execute on load the page]
#### setDefault - Params [Function - callback to be executed when the id of the body does nott match any route]

# License
hydrajs-router-plugin is licensed under MIT license. (see LICENSE file)