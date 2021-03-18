import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dark_green from './assets/dark_green_.jpg';
import light_blue from './assets/light_blue_.jpg';
import light_grey from './assets/light_grey_.jpg';
import light_purple from './assets/light_purple_.jpg';
import skin from './assets/skin_.jpg';

import cheese from './assets/cheese.jpg';
import deep_coffee from './assets/deep_coffee_.jpg';
import mulberry from './assets/mulberry_.jpg';
import sky from './assets/sky_.jpg';
import sunflower from './assets/Sunflower_.jpg';

import Background from './assets/Home.jpg';

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
                        <Link class="nav-link" to="/product">Product</Link>
                    </li>
                    </ul>
                </div>
                </div>
                <AuthButton/>
            </nav>
            
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/product" component={Product} />
                </Switch>
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
        <p id="logout">
            <button
                className='btn btn-warning'
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
                            <img className="d-block img-fluid" src={Background} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
                        </div>
                    </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
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
                            <Link to={`/product/NSG`}>Natural Short Glossy</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to={`/product/OSM`}>Oval Short Matte</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-9'>
                <Switch>
                    <Route exact path={`/product/NSG`}>
                        <br />
                        <div className='container'>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={dark_green} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Dark Green</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Natural Short Glossy - Dark Green</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={light_blue} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Light Blue</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Natural Short Glossy - Light Blue</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={light_grey} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Light Grey</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Natural Short Glossy - Light Grey</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={light_purple} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Light Purple</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Natural Short Glossy - Purple</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={skin} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Skin</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Natural Short Glossy - Skin</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path={`/product/OSM`}>
                        <br />
                    <div className='container'>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={cheese} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Cheese</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Oval Short Matte - Chese</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={mulberry} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Mulberry</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Oval Short Matte - Mulberry</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={sunflower} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Sunflower</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Oval Short Matte - Sunflower</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={sky} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Sky</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Oval Short Matte - Sky</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img src={deep_coffee} alt="gambar"/>
                                        <div className="card-body">
                                            <h4 className="card-title">
                                                <a>Deep Coffee</a>
                                            </h4>
                                            <h5>Rp 30.000</h5>
                                            <p className="card-text">Oval Short Matte - Deep Coffee</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path={path}></Route>
                    <Route exact path={path}></Route>
                    <Route path={`${path}/:dataId`}>
                        <DataBody />
                     </Route>
                </Switch>
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
                  <button
                    className='btn btn-primary'
                    onClick={this.login}> Login </button>
              </footer>
        </div>
        );
    }
}

export default MarketPlace;