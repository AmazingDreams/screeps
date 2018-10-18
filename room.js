'use strict';

const Finder = require('lib.finder')

Room.prototype.tick = function () {
    Finder.findIdleSpawner(this).spawnMiner()
}
