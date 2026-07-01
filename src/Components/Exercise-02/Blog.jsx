const Header = () => {
  return <h1>Our Blogs</h1>;
}

const Footer = () => {
  return <footer>&copy; 2026 Our Blogs. All rights reserved.</footer>;
};

const Post = () => {
  return (
    <div>
        <h2>Blog Post Title</h2>
        <p>This is a sample blog post content. It provides information about a specific topic.</p>
    </div>
    )};  

const Blog =() => {
    return (
        <div>
            <Header />
            <main> 
            < Post />
            </main>
            <Footer />
        </div>
    )
}
export default Blog;

