'use strict';

const Finder = require('lib.finder')

Creep.prototype.minerTick = function () {
    if (!this.hasTarget('mine')) {
        this.findMinerTarget()
    }

    const target = this.getTarget('mine')
    console.log(target)
    if (target) {
        this.moveAndWork(this.harvest, target)
    } else {
        console.log('No target for ' + this.name)
    }
}
Creep.prototype.findMinerTarget = function () {
    const source = Finder.findUnoccupiedSource(this.room)
    this.setTarget('mine', source)
}
