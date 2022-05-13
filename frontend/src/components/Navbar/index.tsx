
import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar(){

    return(
        <header>
            <nav className= "container">
                <div className="damicar-nav-content">
                    <h1>Damicar Veiculos</h1>
                    <a href="https://github.com/Dguinter">
                        <div className= "damicar-contact-container">
                            <GithubIcon />
                            <p className="damicar-contact-link">/dguinter</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;