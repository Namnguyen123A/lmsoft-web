
export default function NicheItem (props:any) {
    const { src, title, description } = props.item;
    return (
        <div className="item">
        <div className="icon-holder">
            <img alt=""
                data-src={src}
                className="lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img
                    src={src}
                    alt="" /></noscript>
        </div>

        <div className="h5">{title}</div>
        <p>{description}</p>
    </div> 
    )
}