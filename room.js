'use strict';

const Finder = require('lib.finder')

Room.prototype.tick = function () {
    if (this.needHaulers()) {
        Finder.findIdleSpawner(this).spawnHauler()
    } else if (this.needMiners()) {
        Finder.findIdleSpawner(this).spawnMiner()
    }
}
Room.prototype.needMiners = function () {
    return Finder.findMyCreepsByTask(this, 'miner').length < this.find(FIND_SOURCES).length
}
Room.prototype.needHaulers = function () {
    return Finder.findMyCreepsByTask(this, 'hauler').length < Finder.findMyCreepsByTaks(this, 'miner')
}
