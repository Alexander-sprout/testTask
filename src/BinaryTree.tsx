import { BinaryTreeSearch } from './Classes';
import React, { useCallback } from 'react'
import { TreeListItem } from './TreeListItem';
import { NodeItem } from 'type';


export const BinaryTree = () => {
    const [tree, setTree] = React.useState<NodeItem<number>>({ value: 0, right: null, left: null })


    const binaryTree = React.useRef(new BinaryTreeSearch())
    const randomNumber = React.useCallback(() => {
        const random = (Math.trunc(Math.random() * 101))
        return (
            random <= 50 ?
                Math.trunc(Math.random() * 101)
                :
                Math.trunc(Math.random() * -101)
        )
    }, [])
    const [num, setNum] = React.useState(randomNumber())

    const handleUserKeyPress = useCallback(event => {
        const { keyCode } = event;
        if (keyCode === 32) {
            setNum(randomNumber())
            binaryTree.current.insert(num)
            setTree(binaryTree.current.getTreeInstanceOrEmpty())
        }
    }, [randomNumber()])

    React.useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress)
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress)
        };
    }, [handleUserKeyPress])
    return (
        <div>
            Нажмите пробел
            {tree &&
                <TreeListItem value={tree.value} right={tree.right} left={tree.left} />
            }
        </div>
    )
}
