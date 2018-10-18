'use strict';

const Finder = require('lib.finder')

Room.prototype.tick = function () {
    if (this.needHaulers()) {
        Finder.findIdleSpawner(this).spawnHauler()
    } else if (this.needMiners()) {
        Finder.findIdleSpawner(this).spawnMiner()
    }
}
Room.prototype.needHaulers = function () {
    return Finder.countMyCreepsByTask(this, 'hauler') < Finder.countMyCreepsByTask(this, 'miner')
}
Room.prototype.needMiners = function () {
    return Finder.countMyCreepsByTask(this, 'miner') < this.find(FIND_SOURCES).length
}
