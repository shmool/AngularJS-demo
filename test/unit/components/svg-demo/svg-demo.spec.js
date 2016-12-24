describe('svgDemo Component', () => {
  let element, $scope, createComponent;

  beforeEach(angular.mock.module('AngularjsExpertDays.components'));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    createComponent = (scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<svg-demo></svg-demo>');
      element = $compile(element)($scope);
      $scope.$apply();
    };
  }));

  it('should be true', () => {
    createComponent({});
    expect(true).toBeTruthy();
  });
});
