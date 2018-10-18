'use strict';

const Finder = require('lib.finder')

Creep.prototype.minerTick = function () {
    if (!this.hasTarget('source')) {
        this.findMinerTarget()
    }

    const target = this.getTarget('source')
    if (target) {
        this.work(this.harvest, target, 1)
    } else {
        console.log('No target for ' + this.name)
    }
}
Creep.prototype.findMinerTarget = function () {
    const source = Finder.findUnoccupiedSource(this.room)
    this.setTarget('source', source)
}
