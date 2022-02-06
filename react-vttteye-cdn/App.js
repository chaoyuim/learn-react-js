const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const withRouter = ReactRouterDOM.withRouter;


class Modal_Dialog extends React.Component {
    state = {
        singleOrderView: null
    }
    componentDidMount = () => {
        this.setState({
            singleOrderView: this.props.singleOrderView
        })
    }
    onCloseClickHandler = () => {
        document.getElementsByClassName('cl_modal_dialog')[0].style.display = 'none';
    }
    onInputOrderStatusChange = (e) => {
        // let newValue = e.target.value;
        // copySingleOrderView.order_status = newValue;
        // this.setState({
        //     singleOrderView: copySingleOrderView
        // })
    }
    OnSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onSingleOrderSubmitHandler(this.state.singleOrderView);
    }

    render() {
        if (this.state.singleOrderView) {
            return (
                <div className="cl_modal_dialog w3-modal-content w3-animate-bottom">
                    <h4>Test YOOO</h4>
                </div>
                // <div className="cl_modal_dialog w3-modal-content w3-animate-bottom">
                //     <button onClick={this.onCloseClickHandler}><i class="fas fa-window-close" ></i > Close</button >
                //     <div className="cl_content">
                //         <form onSubmit={this.OnSubmitHandler}>
                //             TEST
                //             <label>
                //                 Order ID:
                //                 <input type="number" name="order_id" Value={this.state.singleOrderView.order_id} disabled />
                //             </label>
                //             <br></br>
                //             <label>
                //                 Order Date:
                //                 <input type="Text" name="order_date" Value={this.state.singleOrderView.order_date} disabled></input>
                //             </label>
                //             <br></br>
                //             <label>
                //                 Order Status:
                //                 <input type="number" name="order_status" Value={this.state.singleOrderView.order_status} onChange={this.onInputOrderStatusChange}></input>
                //             </label>
                //             <br></br>
                //             <input type="submit" value="Submit" />
                //         </form>
                //     </div>
                // </div >
            )
        } else {
            return (
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

            )
        }

    }
}



class Slider_Tanks extends React.Component {
    render() {
        return (
            <div>
                <h3>Tank</h3>
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
        );
    }
}
class Slider_Orders extends React.Component {

    render() {
        console.log(this.props)
        const orders = this.props.OrdersData.orders;
        // console.log(orders)
        const orders_cards = orders.length ? (
            orders.map(order => {
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
        );
        return (
            <div>
                <h3>Orders</h3>
                {orders_cards}
            </div>);
    }
}
class Slider_Jetties extends React.Component {
    render() {
        return (
            <div>
                <h3>Jetties</h3>
                <div>test</div>
            </div>);
    }
}
class Slider_Contacts extends React.Component {
    render() {
        return (
            <div>
                <h3>Contacts</h3>
                <div>test</div>
            </div>
        );
    }
}

class Slider_Notifications extends React.Component {
    render() {
        return (
            <div>
                <h3>Notifications</h3>
                <div>test</div>
            </div>
        );
    }
}

class Slider_Settings extends React.Component {
    render() {
        return (
            <div>
                <h3>Settings</h3>
                <div>test</div>
            </div>
        );
    }
}


const SlickComponent = (props) => {
    // console.log(props)
    return (
        <div className="for_slick_slider">
            <div className="slick_slider_items" id="Slider_Tanks">
                <Slider_Tanks />
            </div>
            <div className="slick_slider_items" id="Slider_Orders">
                <Slider_Orders OrdersData={props.appRootState} onUpdateClickHandler={() => { props.onUpdateClickHandler() }} />
            </div>
            <div className="slick_slider_items" id="Slider_Jetties">
                <Slider_Jetties />
            </div>
            <div className="slick_slider_items" id="Slider_Contacts">
                <Slider_Contacts />
            </div>
            <div className="slick_slider_items" id="Slider_Notifications">
                <Slider_Notifications />
            </div>
            <div className="slick_slider_items" id="Slider_Settings">
                <Slider_Settings />
            </div>
        </div>
    )
}


const BottomNavBar = ({ onOrderNaviBarClickHandler }) => {
    const onClickNavHandler = (e) => {
        let index = '';
        if (e.target.nodeName !== 'A') {
            index = e.target.parentElement.getAttribute("data-navslick-index");
        } else {
            index = e.target.getAttribute("data-navslick-index");
        }
        // console.log(index)
        $('.for_slick_slider').slick("slickGoTo", index);

        if (index == 1) {
            onOrderNaviBarClickHandler();
        }
    }
    return (
        < div className="navbar" >
            <a id="navbar-item-000" data-navslick-index="0" onClick={onClickNavHandler} href="#" className="navitem active" >
                <i className="fas fa-database"></i>
                <div>Tanks</div>
            </a>

            <a id="navbar-item-001" data-navslick-index="1" onClick={onClickNavHandler} href="#" className="navitem">
                <i className="fas fa-scroll"></i>
                <div>Orders</div>
            </a>
            <a id="navbar-item-002" data-navslick-index="2" onClick={onClickNavHandler} href="#" className="navitem">
                <i className="fas fa-ship"></i>
                <div>Jetties</div>
            </a>
            <a id="navbar-item-003" data-navslick-index="3" onClick={onClickNavHandler} href="#" className="navitem">
                <i className="far fa-id-card"></i>
                <div>Contact</div>
            </a>
            <a id="navbar-item-004" data-navslick-index="4" onClick={onClickNavHandler} href="#" className="navitem">
                <i className="far fa-bell"></i>
                <div>Notification</div>
            </a>
            <a id="navbar-item-005" data-navslick-index="5" onClick={onClickNavHandler} href="#" className="navitem">
                <i className="fas fa-cog"></i>
                <div>Settings</div>
            </a>
        </div >

    )
}


class App extends React.Component {
    state = {
        orders: [],
        hash_value: null,
        loading: true,
        singleOrderView: null,
        showSingleView: false
    }
    callAjaxTogetOrderData = () => {
        this.setState({
            orders: [],
            hash_value: null,
            loading: true
        })
        const result = apex.server.process("init_Orders");
        result.done((data) => {
            this.setState({
                orders: data.data,
                hash_value: data.hash_key,
                loading: false
            })
            // console.log(CryptoJS.MD5(this.state.orders).toString())
        });
    }
    onOrderNaviBarClickHandler = () => {
        this.callAjaxTogetOrderData();
    }
    componentDidMount = () => {
        // console.log('ComponentDidMount');
        this.callAjaxTogetOrderData();
    }
    onSingleOrderSubmitHandler = (singleOrderObj) => {
        console.log(singleOrderObj)
        const result = apex.server.process("update_Order", {
            x01: singleOrderObj
        });
        result.done((data) => {
            console.log(data)
            document.getElementsByClassName('cl_modal_dialog')[0].style.display = 'none';
            this.callAjaxTogetOrderData();

        })

    }
    onUpdateClickHandler = (order_id) => {
        console.log(order_id);
        const orderEntry = this.state.orders.filter((e) => {
            return e.order_id == order_id
        })
        console.log(orderEntry);
        this.setState({
            singleOrderView: orderEntry[0],
            showSingleView: true
        })
        // document.getElementsByClassName('cl_modal_dialog')[0].style.display = 'block';
        // get element based on id 

    }
    render() {

        return (
            <React.Fragment>
                <SlickComponent appRootState={this.state} onUpdateClickHandler={() => { this.onUpdateClickHandler() }} />
                <BottomNavBar onOrderNaviBarClickHandler={this.onOrderNaviBarClickHandler} />
                {this.state.showSingleView ?
                    (<Modal_Dialog singleOrderView={this.state.singleOrderView} onSingleOrderSubmitHandler={this.onSingleOrderSubmitHandler} />)
                    : (void (0))
                }


            </React.Fragment>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("App"))

$('.for_slick_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    responsive: [
        {
            breakpoint: 400,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                touchThreshold: 6
            }
        }
    ]
});
$('.for_slick_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    // console.log("nextSlide", nextSlide);

    const navitems = document.getElementsByClassName("navitem");
    for (var i = 0; i < navitems.length; i++) {
        navitems[i].classList.remove('active');
    }
    document.querySelector(`[data-navslick-index="${nextSlide}"]`).classList.add("active");

});