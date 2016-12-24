class hexagonController {

  // @ngInject
  constructor() {
  }
}

export function hexagon() {
  return {
    restrict: 'E',
    scope: {},
    controller: hexagonController,
    controllerAs: 'hexagon',
    bindToController: true,
    replace: true,
    templateNamespace: 'svg',
    template: `
      <polygon class="hex"
               points="300,150 225,280 75,280 0,150 75,20 225,20"
               transform="scale(0.5)"
               fill="rebeccapurple"></polygon>
    `
  };
}
