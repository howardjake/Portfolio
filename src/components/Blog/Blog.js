import '../Blog/Blog.css'

const Blog = (props) => {
    return (
        <div className="blog">
            
            <div>
            <a target="_blank" rel="noreferrer" href="https://github.com/howardjake/leet-coder">
                <img  className="blog-img" src="projects/leet-code.png" alt="" />
            </a>

            <h2 className="blog-message">This is where I have been keeping track of my LeetCode progress.
            <br />
            <a target="_blank" rel="noreferrer" href="https://github.com/howardjake/leet-coder"> <i className="fas fa-arrow-circle-right"></i>leet-coder</a></h2>
            </div>

            <div>
            <a target="_blank" rel="noreferrer" href="https://github.com/howardjake/My_Coding_Dairy">
                <img  className="blog-img" src="projects/Blog.png" alt="" />
            </a>

            <h2 className="blog-message">In the past I recorded my code challenge journey in this repository.
            <br />
            <a target="_blank" rel="noreferrer" href="https://github.com/howardjake/My_Coding_Dairy"> <i className="fas fa-arrow-circle-right"></i>My Coding Diary</a></h2>
            </div>
            
        </div>
    )
}

export default Blog;