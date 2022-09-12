import "./SelectLevel.scss";
import { useState } from "react";
import { ReactComponent as DropdownIcon } from "../../assets/caret-down-solid.svg";
function SelectLevel({selected,setSelected,}: {selected: string, setSelected: any,}){
  const [isActive, setIsActive] = useState(false);
  const options = ["Internship", "Fresher", "Junior", "Pre-senior"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <DropdownIcon style={{ width: 16, color: "#fff", marginLeft: '10px' }} />
      </div>

      {isActive && (
        <div className="dropdown-content" >
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectLevel;
