const shapes = [
  {
    id: 1,
    style: {
      color: '#663399',
      scale: 0.5,
      x: 130,
      y: 170
    }
  },
  {
    id: 2,
    style: {
      color: '#555555',
      scale: 0.4,
      x: 10,
      y: 10
    }
  },
  {
    id: 3,
    style: {
      color: '#000080',
      scale: 0.5,
      x: 140,
      y: 160
    }
  },
  {
    id: 4,
    style: {
      color: '#ffff00',
      scale: 0.2,
      x: 130,
      y: 170
    }
  }
];

export class HomeController {

  // @ngInject
  constructor() {
    this.shapes = shapes;
  }

  onSelectShape(shape) {
    this.currentStyle = angular.copy(shape.style);
  }

  changeSelectedShapesStyle(style) {
    this.selectedStyle = style;
  }

}
