!function () {
  const WORLD_LENGTH = 149
  const genome = '00000101000001100001010110000111000001110000010000010101010101110110010001110111000001010000000101111101111111111011011101111111'
  const world = new Array(WORLD_LENGTH).fill(0).map(() => Math.round(Math.random()))
  const el = document.querySelector('.world')

  const model = new App.Models.CellularAutomata({ genome, world })
  const view = new App.Views.World({ el, model })

  view.render();

  while (model.isUnresolved()) {
    model.step();
    view.render();
  }
}()
