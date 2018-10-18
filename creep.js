'use strict';

require('creep.miner')
require('creep.hauler')

Creep.prototype.task = function () {
    return this.memory.task
}
Creep.prototype.tick = function () {
    switch (this.task()) {
        case 'hauler': this.haulerTick(); break;
        case 'miner': this.minerTick(); break;
    }
}
Creep.prototype.moveAndWork = function (method, target, options) {
    if (!target) return false
    let value = method.apply(this, _.flatten([target, options]))
    if (value === ERR_NOT_IN_RANGE) {
        this.moveTo(target, {maxRooms: 1})
    }
    return value
}
Creep.prototype.clearTarget = function (key) {
    delete this.memory['target-' + key]
}
Creep.prototype.hasTarget = function (key) {
    const target = this.memory['target-' + key]
    if (!target)
        return false

    const targetObj = this.getTarget(key)
    return targetObj && targetObj.room.name === this.room.name
}
Creep.prototype.getTarget = function (key) {
    return Game.getObjectById(this.memory['target-' + key])
}
Creep.prototype.setTarget = function (key, target) {
    this.memory['target-' + key] = target.id
}
Creep.prototype.targetIs = function (key, target) {
    return this.memory['target-' + key] === target.id
}
Creep.prototype.hasEnergy = function() {
    return this.carry[RESOURCE_ENERGY] > 0
}
Creep.prototype.isFull = function() {
    return this.carry[RESOURCE_ENERGY] >= this.carryCapacity
}
Creep.prototype.grab = function(target) {
    if(target.structureType) {
        this.work(this.withdraw, target, [RESOURCE_ENERGY])
    } else {
        this.work(this.pickup, target)
    }
}
