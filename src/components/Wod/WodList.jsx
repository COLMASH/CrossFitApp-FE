import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  assignWodToDelete,
  assignWodToUpdate,
} from "../../store/selectWodReducer";
import { getWod } from "../../store/selectWodReducer";

function WodList() {
  const [checkedValue, setIsChecked] = useState("");
  const dispatch = useDispatch();

  const handleSelect = (id) => {
    setIsChecked(id);
    dispatch(assignWodToDelete(id));
    dispatch(assignWodToUpdate(id));
  };

  const { wod } = useSelector((state) => {
    return {
      wod: state.selectWodReducer.wod,
    };
  });

  useEffect(() => {
    dispatch(getWod());
  }, [wod.activity]);

  const renderWodsTable = () => {
    return (
      !!wod &&
      wod.length > 0 &&
      wod.map((wod) => (
        <tr key={wod._id}>
          <th>
            <input
              type="radio"
              id={wod._id}
              name="wodToSelect"
              value={wod._id}
              onChange={(e) => handleSelect(e.target.value)}
            />
          </th>
          <td>{wod.activity}</td>
          <td>{wod.modality}</td>
          <td>
            {wod.exercice1}({wod.repetition1})
            {!!wod.exercice2 && ` - ${wod.exercice2}`}
            {!!wod.repetition2 && `(${wod.repetition2})`}
            {!!wod.exercice3 && ` - ${wod.exercice3}`}
            {!!wod.repetition3 && `(${wod.repetition3})`}
          </td>
          <td>{wod.capacity}</td>
          <td>{new Date(wod.startDate).toString()}</td>
          <td>{new Date(wod.endDate).toString()}</td>
          <td>{wod.notes}</td>
        </tr>
      ))
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>SELECT</th>
          <th>ACTIVITY</th>
          <th>MODALITY</th>
          <th>EXERCISES (Reps)</th>
          <th>CAPACITY</th>
          <th>START</th>
          <th>FINISH</th>
          <th>NOTES</th>
        </tr>
      </thead>
      <tbody>{renderWodsTable()}</tbody>
    </table>
  );
}

export default WodList;
