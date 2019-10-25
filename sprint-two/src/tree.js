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

  var recurse = function (input, target) {
    if (input.value === target) {
      return true;
    } else {
      for (var i = 0; i < input.children.length; i++) {
        if (recurse(input.children[i], target)) {
          return true;
        }
      }
    }
  };

  return recurse(this, target) || false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
