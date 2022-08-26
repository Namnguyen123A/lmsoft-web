import '../../global.css'
export default function OurWorkItem(props:any) {
    const { color, src, alt, info } = props.item;
    const { dataSrc, title, tags, description, href } = info;
    return (
        <div className="section slides" style={{ backgroundColor: `${color} `, height: '465,5px'}} data-background={color}
            data-theme="header-dark">
            <div className="container" style={{display: 'flex'}}>
                <div className="image">
                    <img loading="lazy" style={{width: '100%'}}
                        src={src}
                        alt={alt} />
                </div>

                <div className="info" style={{width: '48%'}}>
                    <div className="title">
                        <div className="icon">
                            <img loading="lazy" alt="" style={{height: '100px'}}
                                data-src={dataSrc}
                                className="lazyload"
                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img
                                    loading="lazy" src={dataSrc}
                                    alt="" /></noscript>
                        </div>

                        <h3>{title}</h3>
                    </div>

                    <ul className="tags" style={{marginBottom: '25px', color: 'white'}}>
                        {tags?.map((tag :any, index:any) => {
                            return <li key={index}>{tag}</li>
                        })}
                    </ul>

                    <p>{description}</p>

                    <a href={href} className="button" target="_blank" rel="noreferrer">View Case</a>
                </div>
            </div>
        </div>
    )
}