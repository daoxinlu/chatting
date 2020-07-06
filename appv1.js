var util = require('util')
var events = require('events')

function MusicPlayer(){
    events.EventEmitter.call(this);
    console.log(1)
}

util.inherits(MusicPlayer,events.EventEmitter)