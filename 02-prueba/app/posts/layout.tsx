import Counter from "./components/Counter"

interface Props {
    children: React.ReactNode
}
const PostsLayout = ({children}: Props) => {
  return (
    <>
        <h2>Seccion de los post</h2>
        <Counter />
        <hr />
        {children}
    </>
  )
}

export default PostsLayout
