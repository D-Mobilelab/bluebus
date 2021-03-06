module.exports = {

    /*
    events: {
        eventName: {
            triggered: true/false,
            parameters: lastTriggeredParameters,
            stack: [
                bindedFunction1, bindedFunction2 ...
            ]
        }
    }
    */

    events: {},

    bind: function(key, callback){
        var event = this.events[key];
        if(event){
            if(event.triggered){
                callback.call(this, event.parameters);
            } else {
                event.stack.push(callback);
            }
        } else {
            this.events[key] = {
                triggered: false,
                parameters: undefined,
                stack: [callback]
            };
        }
    },

    trigger: function(key, parameters, leaveStack){
        var event = this.events[key];
        if(event){
            // call binding methods
            if(event.stack.length > 0){
                for(var i = 0; i < event.stack.length; i++){
                    event.stack[i].call(this, parameters);
                }
            }

            // change event properties
            this.events[key] = {
                triggered: true,
                parameters: parameters,
                stack: leaveStack ? this.events[key].stack : []
            };
        } else {
            // change event properties
            this.events[key] = {
                triggered: true,
                parameters: parameters,
                stack: []
            };
        }
    },

    isTriggered: function(key){
        var event = this.events[key];
        if(event){
            return event.triggered;
        } else {
            return false;
        }
    },

    clean: function(key){
        this.events[key] = {
            triggered: false,
            parameters: undefined,
            stack: []
        };
    },

    cleanAll: function(){
        this.events = {};
    }

};
