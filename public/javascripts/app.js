!function () {
  const WORLD_LENGTH = 149
  const genome = '00000101000001100001010110000111000001110000010000010101010101110110010001110111000001010000000101111101111111111011011101111111'
  const world = new Array(WORLD_LENGTH).fill(0).map(() => Math.round(Math.random()))
  const model = new App.Models.CellularAutomata({ genome, world })
  let firstLoop = true

  const animation = new App.Views.Lattice({
    el: document.querySelector('.animation .world'),
    model
  })
  const spacetime = new App.Views.Lattice({
    el: document.querySelector('.spacetime-diagram .world'),
    model
  })
  animation.render()
  spacetime.render()

  setInterval(function () {
    if (model.isUnresolved()) {
      model.step()
    } else {
      model.world = world
      firstLoop = false
    }

    firstLoop && spacetime.append()
    animation.render()
  }, 80)
}()
