'use strict';

class Finder {
    static findIdleSpawner(room) {
        return _.first(_.filter(Game.spawns, function(spawn) {
            return spawn.room.name === room.name && !spawn.isSpawning && spawn.isActive()
        }));
    }

    static findUnoccupiedSource(room) {
        return _.first(room.find(FIND_SOURCES))
    }
}

module.exports = Finder
