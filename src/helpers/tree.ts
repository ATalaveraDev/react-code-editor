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
  
  add(newNode: TreeNode, parent: string | null) {
    if (!this.root) {
      this.root = newNode;
    } else {
      const parentNode = parent ? this.findById(parent) : null;
      newNode.parent = parentNode;
      parentNode!.children.push(newNode);
      parentNode!.children.sort((a: TreeNode, b: TreeNode) => a.data.name.localeCompare(b.data.name));
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

  clone() {
    const newTree = new Tree();
    newTree.add(new TreeNode({...this.root!.data}), null);

    const cloner = (node: TreeNode) => {
      for(let i = 0; i < node.children.length; i++) {
        newTree.add(new TreeNode({...node.children[i].data}), node.data.id);

        if (node.children[i].children.length) {
          cloner(node.children[i]);
        }
      }
    };

    cloner(this.root!);

    return newTree;
  }

  removeNode(nodeId: string) {
    if (this.root!.data.id === nodeId) {
      this.root = null;
    } else {
      const parentNode = this.findById(nodeId)!.parent as TreeNode;
      const newChildren = [];
      for(let i = 0; i < parentNode.children.length; i++) {
        if (parentNode.children[i].data.id !== nodeId) {
          newChildren.push(parentNode.children[i]);
        }
      }
      parentNode.children = newChildren;
    }
  }
}
