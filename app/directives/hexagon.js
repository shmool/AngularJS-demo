class hexagonController {

  // @ngInject
  constructor() {
  }

  select() {
    this.selected = !this.selected;
    this.selectShape({ selected: this.selected });
  }

  getTransform() {
    return `translate(${this.shapeStyle.x} ${this.shapeStyle.y})scale(${this.shapeStyle.scale})`;
  }
}

export function hexagon() {
  return {
    restrict: 'E',
    scope: {
      shapeStyle: '<',
      selectShape: '&'
    },
    controller: hexagonController,
    controllerAs: 'hexagon',
    bindToController: true,
    replace: true,
    templateNamespace: 'svg',
    template: `
      <polygon class="hex"
               ng-class="{selected: hexagon.selected}"
               points="300,150 225,280 75,280 0,150 75,20 225,20"
               ng-attr-transform="{{hexagon.getTransform()}}"
               ng-attr-fill="{{hexagon.shapeStyle.color}}"
               ng-click="hexagon.select()"></polygon>
    `
  };
}
