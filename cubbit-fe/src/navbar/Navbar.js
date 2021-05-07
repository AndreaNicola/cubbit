import {Button, ButtonGroup, Nav, Navbar} from "react-bootstrap";
import './Navbar.css'
import logo from './logo.svg'

function AppNavbar(props) {

    return (
        <Navbar expand="md">
            <Navbar.Brand className={'mx-5'} href="/"><img src={logo} alt="Logo"/></Navbar.Brand>
            <Nav className={"ml-auto"}>
                <ButtonGroup>
                    <Button variant="primary active" onClick={() => props.changeLanguage('encrypted')}>encrypt</Button>
                    <Button variant="primary" onClick={() => props.changeLanguage('english')}>english</Button>
                </ButtonGroup>
            </Nav>
        </Navbar>
    );
}

export default AppNavbar