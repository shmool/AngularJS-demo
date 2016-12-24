class shapeStylePickerController {
  // @ngInject
  constructor() {
    this.stylePickerForm = [
      {
        type: 'color',
        name: 'color',
      },
      {
        type: 'number',
        name: 'scale'
      },
      {
        type: 'number',
        name: 'x'
      },
      {
        type: 'number',
        name: 'y'
      }
    ];
  }

  $onChanges(changes) {
    if (changes.defaults) {
      this.formValues = angular.copy(this.defaults);
    }
  }
}

export const shapeStylePicker = {
  bindings: {
    changeStyle: '&',
    defaults: '<'
  },
  controller: shapeStylePickerController,
  controllerAs: 'shapeStylePicker',
  template: `
    <form name="shapeStylePicker.form">
      <div class="style-picker-item"
           ng-repeat="inputItem in ::shapeStylePicker.stylePickerForm">
        <label>{{inputItem.name}}
          <input type="{{ inputItem.type }}"
                 name="{{ inputItem.name }}"
                 ng-model="shapeStylePicker.formValues[inputItem.name]"
                 ng-change="shapeStylePicker.changeStyle({style: {[inputItem.name]: shapeStylePicker.formValues[inputItem.name]}})">
        </label>
      </div>
    </form>
  `
};
