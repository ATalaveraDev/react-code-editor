import { Tree, TreeNode } from './tree';

export const getTree = (files: any) => {
  const newTree = new Tree();

  files.forEach((file: any) => {
    const segments = file.webkitRelativePath.split('/');
    segments.forEach((segment: string, index: number) => {
      const nodeId = segments.slice(0, index+1).join('_');
      const parentId = index-1 > -1 ? segments.slice(0, index).join('_') : null;
      
      const nodeExists = newTree.findById(nodeId);
      if (nodeExists) {
        return;
      }

      if (index === segments.length - 1) {

        newTree.add(new TreeNode({type: 'file', name: segment, contents: file, id: nodeId}), parentId);
      } else {
        newTree.add(new TreeNode({type: 'folder', name: segment, id: nodeId, opened: false}), parentId);
      }
    });
  });

  return newTree;
};

export const removeChildrenTabs = (node: TreeNode, currentTabs: any[]) => {
  if (!currentTabs.length || !node.children.length) {
    return currentTabs;
  } else {
    for (let i = 0; i < node.children.length; i++) {
      const found = currentTabs.findIndex((tab) => {
        return node.children[i].data.id === tab.id
      })
      if (found > -1) {
        currentTabs.splice(found, 1);
      }
      removeChildrenTabs(node.children[i], currentTabs)
    }

    return currentTabs;
  }
};