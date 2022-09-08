import '../../global.css';
import "./main.scss"

export default function MeetOurTeam() {
    return (
        <div className="section meet-our-team animate" data-background="#ffffff" data-theme="header-white">
            <div className="container">
                <div className="short-info">
                    <strong className="block-title">Our team</strong>

                    <h2>Mobile and Web Development Team</h2>

                    <p>We are always straightforward - either it’s our teammate or our client. Because for a
                        collaboration to be productive, everyone on the team has to be on the same page. We are
                        always there for you on your way to creating outstanding apps.</p>

                    <a href="https://riseapps.co/about-us/" className="button" target="_blank" rel="noreferrer">Get to know us</a>
                </div>

                <div className="photo">
                    <img src="https://riseapps.co/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/01/team.png.webp"
                        alt="Riseapps team" />
                </div>
            </div>
        </div>
    )
}