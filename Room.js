'use strict';

Room.prototype.tick = function () {
    Finder.findIdleSpawner(this).spawnMiner()
}
