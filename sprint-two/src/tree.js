var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;

};

treeMethods.deleteChild = function(childIndex) {
  this.children = _.filter(this.children, function(item, index, collection) {
    if (index !== childIndex) {
      return true;
    } else {
      return false;
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
