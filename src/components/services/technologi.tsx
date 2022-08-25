
export default function TechnologyItem(props:any) {
    const { src, title, items } = props.item;
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

            <ul>
                {
                    items.map((temp:any, index:any) => {
                        return (
                            <li key={index}>
                                {temp?.href ? (
                                    <a href={temp?.href}
                                        target="_self">{temp.title}</a>
                                ) : temp.title}
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}