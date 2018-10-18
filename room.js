'use strict';

const Finder = require('lib.finder')

Room.prototype.tick = function () {
    if (this.needMiners()) {
        Finder.findIdleSpawner(this).spawnMiner()
    } else if (this.needHaulers()) {
        Finder.findIdleSpawner(this).spawnHauler()
    }
}
Room.prototype.needMiners = function () {
    return Finder.findMyCreepsByTask(this, 'miner').length < this.find(FIND_SOURCES).length
}
Room.prototype.needHaulers = function () {
    return Finder.findMyCreepsByTask(this, 'hauler').length < 3
}
