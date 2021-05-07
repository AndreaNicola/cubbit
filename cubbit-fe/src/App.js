import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import AppNavbar from "./navbar/Navbar";
import AppFooter from "./footer/Footer"
import {useState} from "react";

const languages = {
    encrypted: {
        title: '`4!!(3=s 4+3',
        description: '^#5 -"$#=.-+(-$=%(+$=$-"18/3(.-= -#=#$"18/3(.-K=p$"41$= -8=%(+$=38/$= -#=, (-3 (-=8.41=/1(5 "8>',
        filePlaceholder: '`\'..2$=%(+$>',
        footer: 'q\'$=6\'.+$=(2=-$5$1=3\'$=24,=.%=3\'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-=\'.6=6$++=3\'$=(-#(5(#4 +2=6.1*=3.&$3\'$1'
    },
    english: {
        title: 'Cubbit vault',
        description: 'Advanced online file encryption and decryption. Secure any file type and maintain your privacy!',
        filePlaceholder: 'Choose file!',
        footer: 'The whole is never the sum of the parts - it is greater or lesser, depending on how well the individuals work together'
    }
}


function App() {
    const [currentLanguage, setCurrentLanguage] = useState(languages.encrypted)

    const changeLanguage = (language) => {
        setCurrentLanguage(languages[language] ? languages.encrypted : languages[language])
    }


    return (
        <div className="App">
            <AppNavbar changeLanguage={changeLanguage}/>
            <Container fluid>
                <Row>
                    <Col className={'mx-auto my-5'} xs={12} md={6}>
                        <h2>{currentLanguage.title}</h2>
                    </Col>
                </Row>
            </Container>
            <AppFooter currentLanguage={currentLanguage}/>
        </div>
    );

}

export default App;
