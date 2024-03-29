export class TreeNode {
  data: any;
  parent: TreeNode | null;
  children: TreeNode[];

  constructor(data: any) {
    this.data = {...data};
    this.parent = null;
    this.children = [];
  }
}

export class Tree {
  root: TreeNode | null = null;
  
  constructor() { }
  
  add(newNode: TreeNode, parent: string): void {
    if (!this.root) {
      this.root = newNode;
    } else {
      const parentNode = this.findById(parent);
      newNode.parent = parentNode;
      parentNode!.children.push(newNode);
      // parentNode.children.sort((a: TreeNode, b: TreeNode) => a.data.name.localeCompare(b.data.name));
    }
  }

  findById(nodeId: string): TreeNode | null {
    if (!this.root) {
      return null;
    }

    if (this.root.data.id === nodeId) {
      return this.root;
    } else {
      return this.traverse(nodeId, this.root);
    }
  }

  traverse(nodeId: string, root = this.root): TreeNode | null {
    let found = false;
    let target = null;

    const depthTraverser = (currentNode: TreeNode) => {
      for (let i = 0; i < currentNode.children.length; i++) {
        if (currentNode.children[i].data.id === nodeId) {
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
