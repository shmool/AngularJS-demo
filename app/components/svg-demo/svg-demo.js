import logo from 'assets/images/AngularJS_logo.svg';

class svgDemoController {
  // @ngInject
  constructor($sce) {
    this.logo = $sce.trustAsResourceUrl(logo);
    this.logoShape = {
      style: {
        x: 0,
        y: 0
      }
    };
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

  toggleSelectLogo() {
    this.logoShape.selected = !this.logoShape.selected;
    this.onSelect(this.logoShape, this.logoShape.selected);
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

      <svg ng-class="{selected: svgDemo.logoShape.selected}"
           ng-attr-x="{{svgDemo.logoShape.style.x}}"
           ng-attr-y="{{svgDemo.logoShape.style.y}}">
        <g ng-include="::svgDemo.logo"
           ng-attr-transform="scale({{svgDemo.logoShape.style.scale}})"
           ng-click="svgDemo.toggleSelectLogo()"></g>
      </svg>

      <svg ng-repeat="shape in svgDemo.shapes track by shape.id"
           ng-attr-x="{{shape.style.x}}"
           ng-attr-y="{{shape.style.y}}">
        <hexagon shape-style="shape.style"
                 select-shape="svgDemo.onSelect(shape, selected)"></hexagon>
      </svg>
    </svg>
  `
};
