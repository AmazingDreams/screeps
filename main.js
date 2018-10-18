'use strict';

require('Room');

module.exports.loop = function () {
    _.forEach(Memory.rooms, function (r) {
        r.tick()
    })
}
