import logo from 'assets/images/AngularJS_logo.svg';

class svgDemoController {
  // @ngInject
  constructor($sce) {
    this.logo = $sce.trustAsResourceUrl(logo);
    this.selectedShapes = [];
  }

  onSelect(shape, selected) {
    if (selected) {
      this.selectedShapes.push(shape);
    } else {
      this.selectedShapes.splice(this.selectedShapes.indexOf(shape), 1);
    }

    this.selectShape({ shape, selected });
  }

  $onChanges(changes) {
    if (changes.selectedStyle) {
      this.selectedShapes.forEach((shape) => {
        Object.assign(shape.style, this.selectedStyle);
      });
    }
  }
}

export const svgDemo = {
  bindings: {
    shapes: '<',
    selectShape: '&',
    selectedStyle: '<'
  },
  controller: svgDemoController,
  controllerAs: 'svgDemo',
  template: `
    <svg width="100%"
         height="100%"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg">

      <g ng-include="::svgDemo.logo"></g>

      <hexagon ng-repeat="shape in svgDemo.shapes track by shape.id"
               shape-style="shape.style"
               select-shape="svgDemo.onSelect(shape, selected)"></hexagon>
    </svg>
  `
};
