export default function DigitalInfoItem(props:any) {
    const { count, title } = props.item;
    return (
        <li>
            <strong className="h3">
                <strong className="counter-value" data-count={count}>{`${count}+`}</strong>
            </strong>
            {title}
        </li>
    )
}