import { Tree, TreeNode } from '../tree';

describe('Tree Node', () => {
  test('should be possible to create nodes passing data', () => {
    const node = new TreeNode('value');

    expect(node.parent).toBeNull();
    expect(node.data.value).toBe('value');
    expect(node.children).toEqual([]);
  });

  test('should be possible to set the parent', () => {
    const node = new TreeNode('children');
    node.parent = new TreeNode('parent');

    expect(node.parent.data.value).toBe('parent');
  });
});

describe('Tree', () => {
  let tree: Tree;

  beforeEach(() => tree = new Tree());

  test('should be created with empty root', () => {
    expect(tree.root).toBeNull();
  });

  test('should be possible to find nodes', () => {
    const node = new TreeNode('root');
    
    tree.add(node, null);

    expect(tree.findById(node.data.id)?.data.value).toBe('root');
  });

  describe('Adding nodes', () => {
    test('should add the node as a children of the parent param', () => {
      const child = new TreeNode('child');
      const rootNode = new TreeNode('parent').data.id;
      tree.root = rootNode;

      tree.add(child, rootNode);

      expect(tree.root!.children[0].data.value).toBe('child')
    });

    test('should add the node as the root if the tree is empty', () => {
      const node = new TreeNode('value');

      tree.add(node, null);

      expect(tree.root!.data.value).toBe(node.data.value);
    });
  });
});