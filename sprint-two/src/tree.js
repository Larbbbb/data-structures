var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  var containsOrNah = false;

  var recurse = function (input, target) {
    if (input.value === target) {
      containsOrNah = true;
    } else {
      for (var i = 0; i < input.children.length; i++) {
        recurse(input.children[i], target);
      }
    }
    return containsOrNah;
  };

  return recurse(this, target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
