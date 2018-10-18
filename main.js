'use strict';

require('Room');
require('Structure/StructureSpawn')
require('lib/Finder')

module.exports.loop = function () {
    _.forEach(Game.rooms, function (r) {
        r.tick()
    })
}
