var mergeSort = function(a) {
  var sorted = [];
  if (a.length < 2) {
    return a;
  }

  var middleIndex = Math.floor(a.length / 2);
  var leftArray = a.splice(0, middleIndex);
  var rightArray = a;

  var left = mergeSort(leftArray);
  var right = mergeSort(rightArray);
  return merge(left, right);
}

var merge = function(left, right) {
  left = left || [];
  right = right || [];
  var merged = [];
  var leftCount = 0;
  var rightCount = 0;
  var length = left.length + right.length;
  while (merged.length < length) {
    if (left[leftCount] === undefined) {
      merged.push(right[rightCount]);
      rightCount++;
    } else if (right[rightCount] === undefined) {
      merged.push(left[leftCount]);
      leftCount++;
    } else if (left[leftCount] <= right[rightCount]) {
      merged.push(left[leftCount]);
      leftCount++;
    } else if (left[leftCount] > right[rightCount]) {
      merged.push(right[rightCount]);
      rightCount++;
    }
  }

  return merged;
}

var unsortedArray = [5,3,7,2,4,1,9,11,6, 67,68,69,70,71,72,73,74,1.5];
mergeSort(unsortedArray);