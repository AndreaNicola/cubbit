import './Footer.css'

function AppFooter(props) {
    return (<div className={'fixed-bottom my-2'}>{props.currentLanguage.footerText}</div>)
}

export default AppFooter