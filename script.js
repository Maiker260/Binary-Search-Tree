class Node {
    constructor(value) {
        this.value =  value;
        this.left =  null;
        this.right = null;
    }
}

class Tree { 
    constructor(arr) {
        //Avoid Adding Duplicate Values in the Tree.
        arr = [...new Set(arr)];

        this.root = this.buildTree(arr, 0, arr.length -1);
    }

    buildTree(arr, start, end) {
        if (start > end) return null;
        
        const mid = Math.floor((start + end) / 2);
        const node = new Node(arr[mid]);
    
        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);

        return node;
    }
}


function sortArray(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const leftSide = sortArray(arr.slice(0, mid));
    const rightSide = sortArray(arr.slice(mid));
    const result = [];

    while (leftSide.length > 0 && rightSide.length > 0) {
        const lowestValue = leftSide[0] < rightSide[0] ? leftSide : rightSide;
        const splitValue = lowestValue.shift();
        result.push(splitValue);
    }

    return result.concat(leftSide, rightSide);
}

// Print Tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };



const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = sortArray(arr)

const root = new Tree(sortedArray);

console.log(sortedArray)
prettyPrint(root.root);