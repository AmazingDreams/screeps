'use strict';

StructureSpawn.prototype.spawnACreep = function(task, body) {
    const name = task + '-' + Math.random().toString(36).substring(7);
    const memory = {
        task: task
    };

    if (this.spawnCreep(body, name, {dryRun: true}) === OK) {
        this.spawnCreep(body, name, {memory: memory});
    } else {
        console.log('Can\'t build ' + task)
    }
}
StructureSpawn.prototype.spawnMiner = function () {
    this.spawnACreep('miner', [MOVE, CARRY, WORK])
}
