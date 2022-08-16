// import * as React from 'react';

// export interface IServicesItemProps {
// }

// export default function ServicesItem (props: IServicesItemProps) {
//   return (
//     <div>
      
//     </div>
//   );
// }

import { ReactComponent as LearnMore} from '../../assets/learnmore.svg';

export default function ServicesItem(props:any) {
    const { src, href, title, description } = props.item;
    return (
        <div className="item">
            <a className='svg' href={href} target="_blank" rel="noreferrer">
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
                {href &&
                    <span className="learn">
                        Learn more
                        <LearnMore />
                    </span>}
            </a>
        </div>
    )
}