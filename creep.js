'use strict';

require('creep.miner')

Creep.prototype.task = function () {
    return this.memory.task
}
Creep.prototype.tick = function () {
    switch (this.task()) {
        case 'miner':
            this.minerTick();
            break;
    }
}
Creep.prototype.hasTarget = function (key) {
    const target = this.memory['target- ' + key]
    if (!target)
        return false

    const targetObj = this.getTarget(key)
    return targetObj && targetObj.room.name === this.room.name
}
Creep.prototype.getTarget = function (key) {
    return Game.getObjectById(this.memory['target- ' + key])
}
Creep.prototype.setTarget = function (key, target) {
    this.memory['target- ' + key] = target.id
}
