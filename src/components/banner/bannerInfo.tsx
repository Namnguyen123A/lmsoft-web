import ImageRateStar from "./imageStar";


export default function RateInfoItem(props:any) {
    const { href, alt, title } = props.rateInfoItem;
    return (
        <li>
            <div className="firm">
                <a href={href} target="_blank" rel="noreferrer">
                    <img loading="lazy" width="31" height="22"
                        src={`https://riseapps.co/wp-content/webp-express/webp-images/doc-root/wp-content/themes/riseapps/dist/images/rate-0${props.index + 1}.png.webp`}
                        alt={alt} />
                </a>
            </div>
            <div className="rating">
                <strong>{title}</strong>

                <div className="stars">
                    <ImageRateStar />
                    <ImageRateStar />
                    <ImageRateStar />
                    <ImageRateStar />
                    <ImageRateStar />
                </div>
            </div>
        </li>
    )
}

