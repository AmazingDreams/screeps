'use strict';

const _ = require('lodash');
const Room = require('Room');

module.exports.loop = function () {
    Memory.rooms.forEach(function (r) {
        Room(r);
    })
}
