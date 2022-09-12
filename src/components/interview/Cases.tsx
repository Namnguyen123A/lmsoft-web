import '../../global.css';
import "./cases.scss"

export default function NoCases() {
    return (
        <div className="section no-cases animate" data-background="#ffffff" data-theme="header-white" style={{marginTop: '50px'}}>
            <div className="container">
                <div className="h2">Haven't found the case in your business sector?</div>

                <p style={{marginBottom: '20px', fontSize: '20px'}}>Discover more projects developed by our software development company</p>

                <a href="https://riseapps.co/cases/" className="button" target="_blank" rel="noreferrer">View More Cases</a>
            </div>
        </div>
    )
}