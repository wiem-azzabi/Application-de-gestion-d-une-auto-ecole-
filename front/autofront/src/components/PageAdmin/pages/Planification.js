import React ,{ useState} from "react";
import {Checkbox} from "@material-ui/core";

export default function Planification() {
  
const [isChecked, setIsChecked] = useState(false);
const handleOnChange = () => {
  setIsChecked(!isChecked);
};
  return (
    <div className="planification">
      <Checkbox
        value="reparations"
        checked={isChecked}
        onChange={handleOnChange}
      />
    </div>
  );
}
