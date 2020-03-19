import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const navigateTo = url => window.history.pushState(null, null, url);

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname : window.location.pathname
        }
    }

    handleMenuClick = () => {
        this.setState(() => ({pathname : window.location.pathname}));
    };

    render() {
        return (
            <div className="Menu" onClick={this.handleMenuClick}>
                {this.props.children(this.state.pathname)}
            </div>
        )
    }
}

const MenuItem = ({link, children, pathname}) => {
    const classes = ['Menu-Item'];
    if (pathname === link) {
        classes.push('Menu-Item--Selected')
    }
    return (
        <div className={classes.join(' ')} onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React 15 Portal</h1>
                </header>
                <div className="App-content">
                    <Menu>
                        {(pathname) => (
                            <div>
                                <MenuItem pathname={pathname} link='/'>All applications</MenuItem>
                                <MenuItem pathname={pathname} link='/angular'>Angular 8 application 1</MenuItem>
                                <MenuItem pathname={pathname} link='/angular2'>Angular 8 application 2</MenuItem>
                            </div>
                        )}
                    </Menu>
                    <div className="App-container">
                        {/* <div id="angular-app-1"/>
                        <div id="angular-app-2"/> */}
                        <div id="angular-app-3" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
