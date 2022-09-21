import { ReactComponent as ArrowDown} from '../assets/arrow-down.svg' 
// import { ReactComponent as ArrowDownHolder} from '../assets/arrow-down-holder.svg' 

export default function Collaborate() {
    return (
        <div className="section collaborate animate" data-background="#fff" data-theme="header-white">
            <div className="h3">Ready to collaborate?</div>
            <p>Drop us a line</p>

            <div className="arrow-down-holder">
                {/* <ArrowDownHolder /> */}
            <div className="arrow-down"><ArrowDown/></div>
            </div>
        </div>
    )
}