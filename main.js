'use strict';

require('lib.finder')
require('room');
require('structure.spawn')

module.exports.loop = function () {
    _.forEach(Game.rooms, function (r) {
        r.tick()
    })
}
