const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const withRouter = ReactRouterDOM.withRouter;
const Home = () => {
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo pariatur eveniet ea quod.
                Vel quos ab dolores aperiam, molestiae eveniet laboriosam minus,
                corrupti ut eum possimus exercitationem nam impedit.</p>
        </div>
    )
}
const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo pariatur eveniet ea quod.
                Vel quos ab dolores aperiam, molestiae eveniet laboriosam minus,
                corrupti ut eum possimus exercitationem nam impedit.</p>
        </div>
    )
}
const Contact = (props) => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo pariatur eveniet ea quod.
                Vel quos ab dolores aperiam,
                molestiae eveniet laboriosam minus, corrupti ut eum possimus exercitationem nam impedit.</p>
        </div>
    )
}


const NavBar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/poketimes-cdn/about');
    // }, 3000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke Game</a>
                <ul className="right">
                    <li><NavLink to="/poketimes-cdn/home">Home</NavLink></li>
                    <li><NavLink to="/poketimes-cdn/about">About</NavLink></li>
                    <li><NavLink to="/poketimes-cdn/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
const NavBarwithRouter = withRouter(NavBar);


const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'blue', 'green'];
    const randomColor = colors[Math.floor(Math.random() * 3)];
    const classname = randomColor + '-text';
    return (props) => {
        return (
            <div className={classname}>
                <WrappedComponent {...props} />
            </div >
        )
    };
}
const Contact_R = Rainbow(Contact);

class App extends React.Component {
    render() {


        return (
            <BrowserRouter>
                <div className="App">
                    <NavBarwithRouter />
                    <Route path='/poketimes-cdn/home' component={Home} />
                    <Route path='/poketimes-cdn/about' component={About} />
                    <Route path='/poketimes-cdn/contact' component={Contact_R} />
                </div>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"))