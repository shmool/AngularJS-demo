import logo from 'assets/images/AngularJS_logo.svg';
import find from 'lodash/find';

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

  $onInit() {
    this._attachLinks();
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
    } else if (changes.links) {
      this._attachLinks();
    }
  }

  toggleSelectLogo() {
    this.logoShape.selected = !this.logoShape.selected;
    this.onSelect(this.logoShape, this.logoShape.selected);
  }

  _attachLinks() {
    this.connectedLinks = this.links.map((link) => {
      return {
        id: link.id,
        from: find(this.shapes, {id: link.from}),
        to: find(this.shapes, {id: link.to}),
      };
    });
  }
}

export const svgDemo = {
  bindings: {
    shapes: '<',
    links: '<',
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
           movable="svgDemo.logoShape.style"
           ng-attr-x="{{svgDemo.logoShape.style.x}}"
           ng-attr-y="{{svgDemo.logoShape.style.y}}">
        <g ng-include="::svgDemo.logo"
           ng-attr-transform="scale({{svgDemo.logoShape.style.scale}})"
           ng-click="svgDemo.toggleSelectLogo()"></g>
      </svg>

      <line ng-repeat="link in svgDemo.connectedLinks track by link.id"
            ng-attr-x1="{{ link.from.style.x + 75 }}"
            ng-attr-y1="{{ link.from.style.y + 65 }}"
            ng-attr-x2="{{ link.to.style.x + 75 }}"
            ng-attr-y2="{{ link.to.style.y + 65 }}"
            class="svg-link"></line>

      <svg ng-repeat="shape in svgDemo.shapes track by shape.id"
           movable="shape.style"
           ng-attr-x="{{shape.style.x}}"
           ng-attr-y="{{shape.style.y}}">
        <hexagon shape-style="shape.style"
                 select-shape="svgDemo.onSelect(shape, selected)"></hexagon>
      </svg>
    </svg>
  `
};
