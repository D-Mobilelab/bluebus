# bluebus

[![Build Status](https://travis-ci.org/D-Mobilelab/bluebus.svg?branch=master&v=2)](https://travis-ci.org/D-Mobilelab/bluebus)
[![Coverage Status](https://coveralls.io/repos/github/D-Mobilelab/bluebus/badge.svg?branch=master&v=1)](https://coveralls.io/github/D-Mobilelab/bluebus?branch=master)
[![npm version](https://badge.fury.io/js/bluebus.svg)](https://badge.fury.io/js/bluebus)
[![Bower version](https://badge.fury.io/bo/bluebus.svg)](https://badge.fury.io/bo/bluebus)
[![GitHub version](https://badge.fury.io/gh/D-Mobilelab%2Fbluebus.svg)](https://badge.fury.io/gh/D-Mobilelab%2Fbluebus) [![Greenkeeper badge](https://badges.greenkeeper.io/D-Mobilelab/bluebus.svg)](https://greenkeeper.io/)

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

### Simple use

    // bind an event
    Bluebus.bind('openMenu', function(number){
        console.log('value is ' + number);
    });

    // trigger an event
    Bluebus.trigger('openMenu', 5);
    // it executes previous binding on same event, console will logs 'value is 5'

### Multiple bind

    // bind an event
    Bluebus.bind('color', function(number){
        console.log('yellow is ' + number);
    });

    // bind same event
    Bluebus.bind('color', function(number){
        console.log('red is ' + number);
    });

    // trigger an event
    Bluebus.trigger('color', 10);
    // it executes previous binding functions
    // console will logs 'yellow is 10' and 'red is 10'

### Before trigger, after bind

    // trigger an event before binding
    Bluebus.trigger('closeMenu', 15);

    // bind triggered event 
    Bluebus.bind('closeMenu', function(number){
        console.log('new value is ' + number);
    });
    // it is immediately executed because this event has already been triggered
    // console will logs 'new value is 15'

### Multiple trigger

    // bind an event
    Bluebus.bind('multipleEvent', function(number){
        console.log('multipleEvent is ' + number);
    });

    // trigger an event 2 times, leaving stack
    Bluebus.trigger('multipleEvent', 1, true);
    Bluebus.trigger('multipleEvent', 2, true);
    // Passing true as last parameter, the stack of binding functions is mantained
    // console will logs 'multipleEvent is 1' and 'multipleEvent is 2'

    Bluebus.trigger('multipleEvent', 3);
    // If you don't pass true as last parameter, the stack of binding functions is cleaned
    // console will logs 'multipleEvent is 3'

    Bluebus.trigger('multipleEvent', 4);
    // nothing is happening, the stack of binding functions is already cleaned
    
### isTriggered

    // check if an event has been triggered, returns true or false
    Bluebus.isTriggered('openMenu');

### clean and cleanAll

    // clean a previous events and relative bindings
    Bluebus.clean('openMenu');

    // clean all events and relative bindings
    Bluebus.cleanAll();

## Contribute

To contribute to this library, read CONTRIBUTE.md
