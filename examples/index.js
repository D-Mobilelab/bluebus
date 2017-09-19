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

Bluebus.bind('multiple', function(data){
    console.log('multiple is ' + data);
});

Bluebus.trigger('multiple', '1', true);
Bluebus.trigger('multiple', '2', true);
Bluebus.trigger('multiple', '3', true);
Bluebus.trigger('multiple', '4');
Bluebus.trigger('multiple', 'NOT FIRED', true);
