import '../Blog/Blog.css'

const Blog = (props) => {
    return (
        <div className="blog">
            
            <div>
            <a href="https://github.com/howardjake/My_Coding_Dairy">
                <img  className="blog-img" src="projects/Blog.png" alt="" />
            </a>
            
            </div>
            <h2 className="blog-message">I record my code challenge journey in this repository. Follow along if you'd like to challenge yourself too. 
            <br />
            <a href="https://github.com/howardjake/My_Coding_Dairy"> <i className="fas fa-arrow-circle-right"></i>My Coding Diary</a></h2>
            
        </div>
    )
}

export default Blog;