namespace('App.Models');

class CellularAutomata {
  constructor ({ world, genome }) {
    this.world = world || new Array(WORLD_LENGTH).fill(0)
    this.lookupTable = genome.split('').reduce((memo, value, index) => {
      const environment = index.toString(2).padStart(7, '0');
      memo[environment] = value;

      return memo;
    }, {});
  }

  wrap (index) {
    if (index > this.world.length - 1) return this.wrap(index - this.world.length)
    if (index < 0) return this.wrap(this.world.length + index)

    return index;
  }

  neighborsFor (index) {
    return [
      this.world[this.wrap(index - 3)],
      this.world[this.wrap(index - 2)],
      this.world[this.wrap(index - 1)],
      this.world[this.wrap(index)],
      this.world[this.wrap(index + 1)],
      this.world[this.wrap(index + 2)],
      this.world[this.wrap(index + 3)],
    ]
  }

  step () {
    this.world = this.world.map((element, index) => {
      const neighborhood = this.neighborsFor(index).join('');

      return parseInt(this.lookupTable[neighborhood], 2);
    })
  }

  isUnresolved () {
    return this.world.includes(0) && this.world.includes(1)
  }

  toJSON () {
    return {
      world: this.world
    }
  }
}

App.Models.CellularAutomata = CellularAutomata;
