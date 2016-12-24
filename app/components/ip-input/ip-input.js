const IP_OCTATES_NUM = 4;

class ipInputController {
  // @ngInject
  constructor($log, $element) {
    $log.log($element);
    this.$element = $element;
  }

  $postLink() {
    this.inputs = this.$element.find('input');
    this.inputs.on('input', () => this.updateModel());
  }

  $onInit() {
    // console.log(this.ngModelCtrl.$viewValue); // not initialized yet - NaN
    // this.model = this.ngModelCtrl.$viewValue;
  }

  $doCheck() { // with every $digest cycle
    if (this.ngModelCtrl.$viewValue && this.ngModelCtrl.$viewValue !== this.model) {
      this.model = this.ngModelCtrl.$viewValue;
      this.ipAddress = this.ngModelCtrl.$viewValue.split('.');
    }
  }

  updateModel() {
    const inputs = [];
    angular.forEach(this.inputs, (input, index) => inputs[index] = input.value);
    this.model = inputs.join('.');
    this.ngModelCtrl.$setViewValue(this.model);
  }
}

export const ipInput = {
  bindings: {},
  require: {
    ngModelCtrl: 'ngModel'
  },
  controller: ipInputController,
  controllerAs: 'ipInput',
  template: `
    <div class="ip-input inline-block">
      <input
        ng-value="ipInput.ipAddress[0]">.<input
        ng-value="ipInput.ipAddress[1]">.<input
        ng-value="ipInput.ipAddress[2]">.<input
        ng-value="ipInput.ipAddress[3]">
    </div>
  `
};
