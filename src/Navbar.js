

const Navbar = (props) => {
    return (  
        <nav className="navbar">
            <h1 >React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <button onClick={props.function}>function</button>

            </div>
        </nav>
    );
}
 
export default Navbar;