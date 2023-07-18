import PostFeed from "../components/posts/PostFeed"
import Header from "../components/Header"
import Form from "../components/Form"

const Home = () => {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  )
}

export default Home
