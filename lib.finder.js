'use strict';

class Finder {
    static energies(room) {
        let result = _.filter(room.find(FIND_DROPPED_RESOURCES), function(r) {
            return r.amount >= Config.minEnergy[room.level()] && r.resourceType === RESOURCE_ENERGY
        })
        if (result.length > 0) return result
        result = _.filter(room.find(FIND_STRUCTURES), e => {return e.structureType == STRUCTURE_CONTAINER && e.store[RESOURCE_ENERGY] > Config.minEnergy[room.level()]})
        if (result.length > 0) return result
        result = _.filter(room.find(FIND_STRUCTURES), e => {return e.structureType == STRUCTURE_STORAGE && e.store[RESOURCE_ENERGY] > 0})
        if (result.length > 0) return result
        return null
    }

    static findCreepsWithTarget(key, e) {
        return _.filter(Game.creeps, function (c) {
            return c.my && c.memory.task !== 'restore' && c.targetIs(key, target)
        })
    }
    static findIdleSpawner(room) {
        return _.first(_.filter(Game.spawns, function(spawn) {
            return spawn.room.name === room.name && !spawn.isSpawning && spawn.isActive()
        }));
    }

    static countMyCreepsByTask(room, task) {
        return this.findMyCreepsByTask(room, task).length
    }
    static findMyCreepsByTask(room, task) {
        return _.filter(room.find(FIND_MY_CREEPS), function (c) {
            return c.task() === task
        })
    }

    static findUnoccupiedSource(room) {
        return _.first(room.find(FIND_SOURCES))
    }
}

module.exports = Finder
