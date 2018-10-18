'use strict';

const Targeting = require('lib.targeting')

Creep.prototype.haulerTick = function () {
    if (this.hasEnergy()) {
        this.clearTarget('source')
        this.haul()
    } else {
        if (!this.hasTarget('source')) {
            this.setTarget('source', Targeting.unclaimedEnergy(this.room))
        }

        this.grab(this.getTarget('source'))
    }
}
Creep.prototype.haul = function () {
    if (!this.hasTarget('dest')) {
        this.setTarget('dest', Targeting.energyDump(this.room))
    }

    this.dump(this.getTarget('dest'))
}
Creep.prototype.dump = function () {
    let value = this.work(this.transfer, target, [RESOURCE_ENERGY])
    if (value !== ERR_NOT_IN_RANGE) {
        this.clearTarget('dest')
    }
}
