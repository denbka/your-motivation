import React from 'react';
import Select from '../components/Select'
import { TextField, Button, FormControl } from '@material-ui/core'
const PageFinances = () => {
    const options = [
        { name: 'Еда', value: 'food' },
        { name: 'Одежда', value: 'clothes' },
        { name: 'Транспорт', value: 'transport' },
        { name: 'Подарки', value: 'gifts' },
        { name: 'Другое', value: 'etc' },
    ]
    const [category, setCategory] = React.useState('')

    return (
        <React.Fragment>
            <form className="container">
                <FormControl margin="dense">
                    <Select placeholder="На что потратил" options={options} value={category} setValue={setCategory}></Select>
                </FormControl>
                <FormControl margin="dense">
                    <TextField id="standard-basic" label="Сумма" />
                </FormControl>
                <FormControl margin="dense">
                    <Button variant="contained" color="primary">Добавить</Button>
                </FormControl>
            </form>
        </React.Fragment>
    )
}

export default PageFinances
