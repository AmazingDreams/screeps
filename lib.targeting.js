'use strict'

const Finder = require('lib.finder')

class Targeting {
    static unclaimedEnergy(room) {
        let energies = Finder.energies(room)
        let result = null
        let most = 0
        _.each(energies, e => {
            if(e.amount && e.amount >= most && Finder.findCreepsWithTarget('source', e).length <= 0) {
                result = e
                most = e.amount
            } else if(e.store && e.store[RESOURCE_ENERGY] >= most) {
                result = e
                most = e.store[RESOURCE_ENERGY]
            }
        })
        return result
    }
}

module.exports = Targeting
