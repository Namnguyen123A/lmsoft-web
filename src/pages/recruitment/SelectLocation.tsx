import "./SelectLocation.scss";
import { useState } from "react";
import { ReactComponent as DropdownIcon } from "../../assets/caret-down-solid.svg";
function SelectLocation({selectedLocation,setSelectedLocation,}: {selectedLocation: string, setSelectedLocation: any,}){
  const [isActive, setIsActive] = useState(false);
  const options = ["Vietnam", "Japan"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selectedLocation}
        <DropdownIcon style={{ width: 16, color: "#fff" }} />
      </div>

      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelectedLocation(option);
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

export default SelectLocation;
