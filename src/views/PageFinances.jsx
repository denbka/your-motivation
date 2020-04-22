import React from 'react';
import Select from '../components/Select'
import { TextField, Button, FormControl } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { connect } from 'react-redux'
import { addWaste, deleteWaste } from '../store/actions'
import s from '../assets/scss/finances.module.scss'
const PageFinances = ({ wastes, addWaste, deleteWaste }) => {

    const columns = [
        { name: 'На что потратил', prop: 'reason' },
        { name: 'Сумма', prop: 'amount' }
    ]
    
    const options = [
        { name: 'Еда', value: 'food' },
        { name: 'Одежда', value: 'clothes' },
        { name: 'Транспорт', value: 'transport' },
        { name: 'Подарки', value: 'gifts' },
        { name: 'Другое', value: 'etc' },
    ]
    const [ form, setForm ] = React.useState({
        reason: '',
        amount: null,
        id: null
    })

    React.useEffect(() => {
        if (form.reason && form.amount) setErrorMessage('')
    }, [form])

    const [ errorMessage, setErrorMessage ] = React.useState('')

    const getTitle = (value) => {
        const response = options.find(e => {
            return value === e.value
        })
        if (response)
        return response.name
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        console.log(name, value);
        setForm({...form, [name]: value})
    }

    const addItem = () => {
        if (!form.amount) {
            setErrorMessage('Заполните сумму')
            return
        }
        if (!form.reason) {
            setErrorMessage('Выберите на что потратили')
            return
        }
        setForm({...form, id: wastes.length + 1})
        addWaste(form)
    }

    const [totalAmount, setTotalAmount] = React.useState(0)

    React.useEffect(() => {
        wastes.map(e => {
            setTotalAmount(totalAmount +  Number(e.amount))
        })
    }, [wastes])

    return (
        <div className={s.finances}>
            <span>Всего затрат: {totalAmount}</span>
            <form className={`${s.wastes} ${s.wastesForm}`}>
                <FormControl margin="dense">
                    <Select
                    placeholder="На что потратил"
                    options={options}
                    value={form.reason}
                    onChange={handleInputChange}>
                    </Select>
                </FormControl>
                <FormControl margin="dense">
                    <TextField
                    id="standard-basic"
                    name="amount"
                    label="Сумма"
                    type="number" onChange={handleInputChange} />
                </FormControl>
                <FormControl margin="dense">
                    <Button variant="contained" color="primary" onClick={() => addItem()}>Добавить</Button>
                    {errorMessage && <span className="underbutton-message-error">{errorMessage}</span>}
                </FormControl>
            </form>
            <div className={s.wastes}>
                <div className={s.wastesTitle}>
                    {columns.map((column, index) => <div className={s.wastesTitleItem} key={index}>
                        {column.name}
                    </div>)}
                    <div className={s.wastesTitleItem}>
                        Действия
                    </div>
                </div>
                <div className={s.tableList}>
                    {wastes.map(item => <div key={item.id} className={s.tableListRow}>
                        {columns.map((row, index) => <div key={index} className={s.tableListColumn}>
                            {row.prop === 'reason' ? getTitle(item[row.prop]) : item[row.prop]}
                        </div>)}
                        <div className={s.tableListColumn}>
                            <span onClick={() => deleteWaste(item.id)}>
                                <Delete></Delete>
                            </span>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    wastes: state.finances.wastes
})

const mapDispatchToProps = (dispatch) => ({
    addWaste: (value) => dispatch(addWaste(value)),
    deleteWaste: (id) => dispatch(deleteWaste(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageFinances)
