'use strict';

require('creep')
require('room');
require('structure.spawn')

module.exports.loop = function () {
    _.forEach(Game.rooms, function (r) {
        r.tick()
    })
    _.forEach(Game.creeps, function (c) {
        c.tick()
    })
}
