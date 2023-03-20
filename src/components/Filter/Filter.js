import { useDispatch} from "react-redux";
import {PropTypes} from 'prop-types';
import { Label, FindInput } from "./Filter.styled";
import { filterChange } from "redux/contacts/filterSlice";


export const Filter = () =>  {
    const dispatch = useDispatch();
    const onWrite = e => {
        dispatch(filterChange(e.currentTarget.value));
    };

  
    return (
        <Label>
            <FindInput
            type="text"
            name="filter"
            placeholder="Find contacts by name"
            onChange={onWrite}
            />
        </Label>
    );
};



Label.propTypes = {
    filter: PropTypes.string,
};