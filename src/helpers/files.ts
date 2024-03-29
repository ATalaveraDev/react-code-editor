import { Tree, TreeNode } from './tree';

export const getTree = (files: any) => {
  const newTree = new Tree();

  files.forEach((file: any) => {
    const segments = file.path.split('/');
    segments.forEach((segment: string, index: number) => {
      const nodeId = segments.slice(0, index+1).join('_');
      const parentId = index-1 > -1 ? segments.slice(0, index).join('_') : null;
      
      const nodeExists = newTree.findById(nodeId);
      if (nodeExists) {
        return;
      }

      if (index === segments.length - 1) {

        newTree.add(new TreeNode({type: 'file', name: segment, contents: file.contents, id: nodeId}), parentId);
      } else {
        newTree.add(new TreeNode({type: 'folder', name: segment, id: nodeId, opened: false}), parentId);
      }
    });
  });

  return newTree;
};