import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
export default function RSelect({placeholder, options, value, setValue}) {

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <FormControl>
            <InputLabel htmlFor="value-native-simple">{placeholder}</InputLabel>
            <Select
            native
            value={value}
            onChange={handleChange}
            inputProps={{
                name: 'value',
                id: 'value-native-simple',
            }}
            >
            <option aria-label="None" value="" />
            {options.map((opt, index) => <option value={opt.value} key={index}>{opt.name}</option>)}
            </Select>
        </FormControl>
    )
}
