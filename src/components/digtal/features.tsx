export default function FeaturesInfoItem(props:any) {
    const { alt, src, title } = props.item;
    return (
        <li className="item">
            <div className="icon">
                <img alt={alt}
                    data-src={src}
                    className="lazyload"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img
                        src={src}
                        alt={alt} /></noscript>
            </div>

            {title}
        </li>
    )
}