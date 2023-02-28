export type NodeItem<T> = {
    value: T,
    left: NodeItem<T> | null
    right: NodeItem<T> | null
}