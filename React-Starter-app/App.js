const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const withRouter = ReactRouterDOM.withRouter;
const useHistory = ReactRouterDOM.useHistory;
const Redirect = ReactRouterDOM.Redirect;

class Orders extends React.Component {
    state = {
        data: [{
            "order_id": 2458, "order_date": "18-02-2021 02:34", "order_mode": "direct",
            "customer_id": 101, "order_status": 0, "order_total": 78279.6, "sales_rep_id": 153
        },
        {
            "order_id": 2397, "order_date": "24-05-2021 03:41", "order_mode": "direct",
            "customer_id": 102, "order_status": 1, "order_total": 42283.2, "sales_rep_id": 154
        },
        {
            "order_id": 2454, "order_date": "06-04-2021 04:49", "order_mode": "direct",
            "customer_id": 103, "order_status": 1, "order_total": 6653.4, "sales_rep_id": 154
        },
        {
            "order_id": 2354, "order_date": "17-01-2022 05:18", "order_mode": "direct",
            "customer_id": 104, "order_status": 0, "order_total": 46257, "sales_rep_id": 155
        },
        {
            "order_id": 2358, "order_date": "13-07-2021 06:03", "order_mode": "direct",
            "customer_id": 105, "order_status": 2, "order_total": 7826, "sales_rep_id": 155
        },
        {
            "order_id": 2381, "order_date": "17-11-2021 07:59", "order_mode": "direct",
            "customer_id": 106, "order_status": 3, "order_total": 23034.6, "sales_rep_id": 156
        }]
    }
    html = () => {
        return this.state.data.length ?
            (
                this.state.data.map(order => {
                    return (
                        <div className="card" key={order.order_id}>
                            <img src="" class="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Order Id: {order.order_id}</h5>
                                <p className="card-text">Order was ade at {order.order_date} with {order.order_mode} mode</p>
                                <button className="btn btn-warning" onClick={() => { this.props.onUpdateClickHandler(order.order_id) }}>Update</button >
                                <button className="btn btn-danger">Delete</button >
                                <button className="btn btn-primary">{order.order_total} $</button >
                            </div>
                        </div >

                    )
                })
            ) : (
                <div>
                    <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-picture"></div>
                            <div className="ph-row">
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-4 empty big"></div>
                                <div className="ph-col-2 big"></div>
                                <div className="ph-col-4"></div>
                                <div className="ph-col-8 empty"></div>
                                <div className="ph-col-6"></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-col-12"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-picture"></div>
                            <div className="ph-row">
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-4 empty big"></div>
                                <div className="ph-col-2 big"></div>
                                <div className="ph-col-4"></div>
                                <div className="ph-col-8 empty"></div>
                                <div className="ph-col-6"></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-col-12"></div>
                            </div>
                        </div>
                    </div>
                </div >
            )
    }

    render() {
        return (
            <React.Fragment>
                <div className="content-wrapper">
                    <h3 className="h3-header">Orders</h3 >
                    <div className="items-wrapper">
                        {this.html()}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
const Jetties = () => {
    return (
        <div>
            Jetties
        </div>)
}
const Contact = () => {
    return (
        <div>
            Contact
        </div>)
}
const Notification = () => {
    return (
        <div>
            Notification
        </div>)
}

const Settings = () => {
    return (
        <div>
            Settings
        </div>)
}
const Tanks = () => {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <h3 className="h3-header">Tanks</h3>
                <div className="items-wrapper">
                    <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-picture"></div>
                            <div className="ph-row">
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-4 empty big"></div>
                                <div className="ph-col-2 big"></div>
                                <div className="ph-col-4"></div>
                                <div className="ph-col-8 empty"></div>
                                <div className="ph-col-6"></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-col-12"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-picture"></div>
                            <div className="ph-row">
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-4 empty big"></div>
                                <div className="ph-col-2 big"></div>
                                <div className="ph-col-4"></div>
                                <div className="ph-col-8 empty"></div>
                                <div className="ph-col-6"></div>
                                <div className="ph-col-6 empty"></div>
                                <div className="ph-col-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


const BottomNavBar = () => {
    return (

        < div className="navbar" >
            <NavLink id="navbar-item-000" data-navslick-index="0" className="navitem" to="/Tanks">
                <i className="fas fa-database"></i>
                <div>Tanks</div>
            </NavLink>
            <NavLink id="navbar-item-001" data-navslick-index="1" className="navitem" to="/Orders">
                <i className="fas fa-scroll"></i>
                <div>Orders</div>
            </NavLink>
            <NavLink id="navbar-item-002" data-navslick-index="2" className="navitem" to="/Jetties">
                <i className="fas fa-ship"></i>
                <div>Jetties</div>
            </NavLink>
            <NavLink id="navbar-item-003" data-navslick-index="3" className="navitem" to="/Contact">
                <i className="far fa-id-card"></i>
                <div>Contact</div>
            </NavLink>
            <NavLink id="navbar-item-004" data-navslick-index="4" className="navitem" to="/Notification">
                <i className="far fa-bell"></i>
                <div>Notification</div>
            </NavLink>
            <NavLink id="navbar-item-005" data-navslick-index="5" className="navitem" to="/Settings">
                <i className="fas fa-cog"></i>
                <div>Settings</div>
            </NavLink>
        </div >
    )
}
const BottomNavBarwithRouter = withRouter(BottomNavBar);

class App extends React.Component {
    ComponentDidMount = () => {
        let history = useHistory();
        history.push('/Tanks')
    }
    render() {
        // let history = useHistory();
        // history.push('/Tanks');
        return (
            <React.Fragment>
                <BrowserRouter>
                    <BottomNavBarwithRouter></BottomNavBarwithRouter>
                    <Redirect exact from="/" to="/Tanks" />
                    <Route path='/Tanks' component={Tanks} />
                    <Route path='/Orders' component={Orders} />
                    <Route path='/Jetties' component={Jetties} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Notification' component={Notification} />
                    <Route path='/Settings' component={Settings} />
                </BrowserRouter>

            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("App"))