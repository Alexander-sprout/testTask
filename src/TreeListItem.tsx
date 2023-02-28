import React from 'react'
import styled from 'styled-components'

type Props = {
    value: number | null,
    left: Props | null,
    right: Props | null
}

export const TreeListItem = ({ value, left, right }: Props) => {
    const [opened, setOpened] = React.useState(false)
    return (
        <Container onClick={(e) => {
            e.stopPropagation()
            setOpened(!opened)
        }}>
            <p>Число:{value}</p>
            {!opened && (
                <>
                    {left !== null && <TreeListItem value={left.value} left={left.left} right={left.right} />}
                    {right !== null && <TreeListItem value={right.value} left={right.left} right={right.right} />}
                </>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    padding: 16px;
    border: 1px solid #111;
    box-sizing: border-box;
    cursor: pointer;
`