import "../assets/blog.css";
import BlogCart from "../component/BlogCart.tsx";

function Blog(){
    return (
        <section className="container">
            <h1 className="text-center">Latest News</h1>
            <div className="mt-3 row  align-items-center jusfity-content-center">
                <BlogCart/>
                <BlogCart/>
                <BlogCart/>
                <BlogCart/>
                <BlogCart/>
                <BlogCart/>
            </div>
        </section>
    )
}
export default Blog