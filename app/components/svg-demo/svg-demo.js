import logo from 'assets/images/AngularJS_logo.svg';

class svgDemoController {
  // @ngInject
  constructor($sce) {
    this.logo = $sce.trustAsResourceUrl(logo);
  }
}

export const svgDemo = {
  bindings: {},
  controller: svgDemoController,
  controllerAs: 'svgDemo',
  template: `
    <svg width="100%" height="100%" version="1.1"
     xmlns="http://www.w3.org/2000/svg">
          <g ng-include="::svgDemo.logo"></g>
          <hexagon></hexagon>
    </svg>
  `
};
