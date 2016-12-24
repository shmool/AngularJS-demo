describe('movable Directive', () => {
  let element, $scope, createDirective;

  beforeEach(angular.mock.module('AngularjsExpertDays.directives'));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    createDirective = (scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<movable></movable>');
      element = $compile(element)($scope);
      $scope.$apply();
    };
  }));

  it('should be true', () => {
    createDirective({});
    expect(true).toBeTruthy();
  });
});
