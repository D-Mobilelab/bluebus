Bluebus.bind('red', function(data){
    console.log('red is ' + data);
});
Bluebus.trigger('red', 'helloworld');
Bluebus.bind('red', function(data){
    console.log('red is also ' + data);
});

Bluebus.trigger('blue', 'foo');
Bluebus.bind('blue', function(data){
    console.log('blue is ' + data);
});