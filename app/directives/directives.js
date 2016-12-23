import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('AngularjsExpertDays.directives', [])
  .directive('ifEnv', ifEnv);
