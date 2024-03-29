export class TreeNode {
  data: { value: any };
  parent: TreeNode | null;
  children: TreeNode[];

  constructor(value: any) {
    this.data = {
      value: value
    };
    this.parent = null;
    this.children = [];
  }
}

export class Tree {
  root: TreeNode | null = null;
  
  constructor() { }
  
  add(newNode: TreeNode, parent: TreeNode | null): void {
    if (!this.root) {
      this.root = newNode;
    } else {
      const parentNode = this.find(parent);
      newNode.parent = parentNode;
      parentNode!.children.push(newNode);
      // parentNode.children.sort((a: TreeNode, b: TreeNode) => a.data.name.localeCompare(b.data.name));
    }
  }

  find(node: TreeNode | null): TreeNode | null {
    if (!this.root) {
      return null;
    }

    if (this.root.data.value === node?.data.value) {
      return this.root;
    } else {
      return this.traverse(node as TreeNode, this.root);
    }
  }

  traverse(node: TreeNode, root = this.root): TreeNode | null {
    let found = false;
    let target = null;

    const depthTraverser = (currentNode: TreeNode) => {
      for (let i = 0; i < currentNode.children.length; i++) {
        if (currentNode.children[i].data.value === node.data.value) {
          found = true;
          target = currentNode.children[i];
          break;
        } else {
          depthTraverser(currentNode.children[i]);

          if (found) {
            break;
          }
        }
      }
    };

    depthTraverser(root as TreeNode);

    return target;
  }
}
