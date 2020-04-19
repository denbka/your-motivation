import React from 'react'
const PageFinances = () => {
    return (
        <React.Fragment>
            <div className="container">
                <input type="text" placeholder="На что потратил" />
                <input type="number" placeholder="Сумма"/>
                <button>Добавить</button>
            </div>
        </React.Fragment>
    )
}

export default PageFinances
