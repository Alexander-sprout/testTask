import { NodeItem } from "./type"

export class BinaryTreeSearch {
    private root: NodeItem<number> | null = null

    public insert(val: number) {
        if (!this.root) {
            const newNode: NodeItem<number> = {
                value: val,
                left: null,
                right: null
            }
            this.root = newNode
            console.log('add number')
            return
        }
        let nodeIter = this.root

        while (true) {
            if (val < nodeIter.value) {
                if (nodeIter.left) {
                    nodeIter = nodeIter.left
                } else {
                    nodeIter.left = { value: val, left: null, right: null }
                    console.log('addLeft')
                    return
                }
            } else if (val > nodeIter.value) {
                if (nodeIter.right) {
                    nodeIter = nodeIter.right
                } else {
                    nodeIter.right = { value: val, left: null, right: null }
                    console.log('addRight')
                    return
                }
            } else {
                return
            }
        }
    }

    public printTree(node = this.root) {
        if (!node) {
            return
        }
        this.printTree(node.left)
        // console.log(node.value)
        this.printTree(node.right)
    }

    public getTreeInstanceOrEmpty() {
        return this.root || { value: 0, left: null, right: null }
    }
}