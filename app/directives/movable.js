import { event, drag, select } from 'd3';
import throttle from 'lodash/throttle';

const DIGEST_INTERVAL = 17;

function linkFn($scope, $element, attrs) {
  const item = $scope.$eval(attrs.movable);
  const throttleDigest = throttle($scope.$apply.bind($scope), DIGEST_INTERVAL);

  function onDrag() {
    item.x += event.dx;
    item.y += event.dy;
    throttleDigest();
  }

  function onDragstart() {
    event.sourceEvent.stopPropagation();
  }

  const dragAction = drag()
    .on('drag', onDrag)
    .on('start', onDragstart);

  select($element[0]).call(dragAction);
}

export function movable() {
  return {
    restrict: 'A',
    link: linkFn
  };
}