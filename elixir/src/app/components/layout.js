'use client'
import '../css/bulma.css';
import BackgroundImage from './backgroundImage';

export default function Layout() {
    return (
        <>
           
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                    <div id="navbarBasicExample" className="navbar-menu ">
                    <div className="navbar-start">
                        <a className="navbar-item" href='/'>
                            My Drinks
                        </a>

                        <a className="navbar-item" href="/users">
                            Trending 
                        </a>

                        <a className="navbar-item" href="/commerce">
                            Following 
                        </a>

                        <a className="navbar-item" href="/airlines">
                            Profile
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons" id='nav-button'>
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            
          
        </>
    )
}