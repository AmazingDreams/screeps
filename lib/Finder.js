class Finder {
    static findIdleSpawner(room) {
        return _.first(_.filter(Game.spawns, function(spawn) {
            return spawn.room.name === room.name && !spawn.isSpawning && spawn.isActive()
        }));
    }
}

module.exports = Finder
