import { shapeStylePicker } from './shape-style-picker/shape-style-picker';
import { svgDemo } from './svg-demo/svg-demo';
import angular from 'angular';

export default angular.module('AngularjsExpertDays.components', [])
  .component('svgDemo', svgDemo)
  .component('shapeStylePicker', shapeStylePicker);
