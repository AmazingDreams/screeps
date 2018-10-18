'use strict';

class Finder {
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
