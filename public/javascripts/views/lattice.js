namespace('App.Views');

class Lattice {
  constructor ({ el, model }) {
    this.el = el
    this.model = model
  }

  template ({ world }) {
    return world.reduce((html, value) => (
      html += `<div class="cell ${value ? 'present' : 'empty'}"></div>`
    ), '<div class="row">') + '</div>'
  }

  append () {
    this.el.innerHTML += this.template(this.model.toJSON())
  }

  render () {
    this.el.innerHTML = this.template(this.model.toJSON())
  }
}

App.Views.Lattice = Lattice;
