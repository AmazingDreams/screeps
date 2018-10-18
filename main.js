'use strict';

require('Room');

module.exports.loop = function () {
    _.forEach(Game.rooms, function (r) {
        r.tick()
    })
}
