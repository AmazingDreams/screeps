'use strict';

require('Room');

module.exports.loop = function () {
    Memory.rooms.forEach(function (r) {
        Room(r);
    })
}
