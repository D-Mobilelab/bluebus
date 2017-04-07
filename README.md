# bluebus

[![Build Status](https://travis-ci.org/D-Mobilelab/bluebus.svg?branch=master&v=2)](https://travis-ci.org/D-Mobilelab/bluebus)
[![Coverage Status](https://coveralls.io/repos/github/D-Mobilelab/bluebus/badge.svg?branch=master&v=1)](https://coveralls.io/github/D-Mobilelab/bluebus?branch=master)
[![npm version](https://badge.fury.io/js/bluebus.svg)](https://badge.fury.io/js/bluebus)
[![Bower version](https://badge.fury.io/bo/bluebus.svg)](https://badge.fury.io/bo/bluebus)
[![GitHub version](https://badge.fury.io/gh/D-Mobilelab%2Fbluebus.svg)](https://badge.fury.io/gh/D-Mobilelab%2Fbluebus)

Bluebus is a event library with bind/trigger system

## Installation

### NPM

    npm install --save bluebus

You can found the library on <i>node_modules/bluebus/dist/bluebus.js</i>

### Bower

    bower install --save bluebus

You can found the library on <i>bower_components/bluebus/dist/bluebus.js</i>

## Import

You can use Bluebus with require

    var Bluebus = require('bluebus');

or as global variable, called <i>Bluebus</i>.

## Usage

    // bind an event
    Bluebus.bind('openMenu', function(number){
        console.log('value is ' + number);
    });

    // trigger an event
    Bluebus.trigger('openMenu', 5);
    // it executes previous binding on same event, console will logs 'value is 5'

    // bind an other function on same event
    Bluebus.bind('openMenu', function(number){
        console.log('new value is ' + number);
    });
    // it is immediately executed because this event has already been triggered
    // the arguments are those used in the last trigger, so console will logs 'new value is 5'

    //Bind an event
    Bluebus.bind('multipleEvent', function(number){
        console.log('multipleEvent is ' + number);
    });

    //Trigger a multipleEvent 3 times
    Bluebus.trigger('multipleEvent', 1, true);
    Bluebus.trigger('multipleEvent', 2, true);
    Bluebus.trigger('multipleEvent', 3, true);
    // Passing true as last parameters means mantain the stack of functions of the associated event

    Bluebus.trigger('multipleEvent', 4); //This will not work
    // You can not fire a multiple event without the true parameter if you have previously fired with true

    // check if an event has been triggered, returns true or false
    Bluebus.isTriggered('openMenu');

    // clean a previous events and relative bindings
    Bluebus.clean('openMenu');

    // clean all events and relative bindings
    Bluebus.cleanAll();

## Contribute

To contribute to this library, read CONTRIBUTE.md
