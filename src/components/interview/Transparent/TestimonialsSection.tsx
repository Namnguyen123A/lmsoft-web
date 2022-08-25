/* eslint-disable jsx-a11y/anchor-has-content */

export default function TestimonialsSectionItem(props:any) {
    const { image, info } = props.item;
    const { backgroundImage, href } = image;
    const { description, name, post } = info;
    return (
        <div className="item">
            <div className="image">
                <div className="has-video"
                    style={{ backgroundImage: backgroundImage }}>

                    <a href={href}
                        className="play-video"></a>
                </div>
            </div>

            <div className="info">
                <blockquote>{description}</blockquote>

                <div className="author-block">
                    <span className="name">{name}</span>

                    <span className="post">{post}</span>
                </div>
            </div>
        </div>
    )
}