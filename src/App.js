import React, { Component } from 'react';
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import dark_green from './assets/dark_green_.jpg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useParams,
    withRouter
} from 'react-router-dom';

function MarketPlace() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                <a className="navbar-brand" to="/home">The Little Things</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/product">Product</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="/contact">Contact</Link>
                    </li>
                    </ul>
                    <AuthButton/>
                </div>


                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/product" component={Product} />
                </Switch>
            </div>
            </nav>
        </Router>
    )
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p id="logout">Welcome!
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/home"));
                }}>
                <p>Sign out</p>
            </button>
        </p>
    ) : (
            <p id="warning-log" >
                You are not Log in!
            </p>
        )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

function Home() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
                <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> 
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

function Product() {

    let { path, url } = useRouteMatch();

    return (
        <div className="container">
            <div className="col-lg-3">
                <h1 className="my-4">List Product</h1>
                <div className="list-group">
                    <ul>
                        <li className="list-group-item">
                            <Link to={`${url}/NSG`}>Natural Short Glossy</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to={`${url}/OSM`}>Oval Short Matte</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path={path}>

                        </Route>
                        <Route path={`${path}/:dataId`}>
                            <DataBody />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

function DataBody() {
    let { dataId } = useParams();

    if (dataId === "NSG") {
        return (
            <div className="row">

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img src={dark_green} alt="gambar"/>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a>Dark Green</a>
                            </h4>
                            <h5>$24.99</h5>
                            <p className="card-text">Natural Short Glossy - Dark Green</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (dataId === "OSM") {
        return (
            <div className="row">

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <img src={dark_green} alt="gambar"/>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a>Dark Green</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Natural Short Glossy - Dark Green</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

class Login extends Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div className="Login">
              <footer className="py-5 by-dark">
                  <div className="container">
                      <p className="m-0 text-center text-while">You Must Login First</p>
                  </div>
              </footer>
        </div>
        );
    }
}

export default MarketPlace;