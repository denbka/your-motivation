import React, { useEffect } from 'react'
import PageTime from './views/PageTime'
import PageFinances from './views/PageFinances'
import ComponentMenu from './components/ComponentMenu/container'
import ComponentHeader from './components/ComponentHeader/container'
import { Switch, Route, BrowserRouter, Link, useHistory } from 'react-router-dom'

const list = [
    { path: '/', name: 'Главная' },
    { path: '/finances', name: 'Мои финансы' },
]

const ROUTES = [
    {
        path: '/',
        key: 'base',
        exact: true,
        component: () => <div style={{width: '100%'}}>
            <ComponentHeader></ComponentHeader>
            <PageTime></PageTime>
        </div>
    },
    {
        path: '/finances',
        key: 'finances',
        exact: true,
        title: 'Мои финансы',
        component: () => <div style={{width: '100%'}}>
                <ComponentHeader title="Мои финансы"></ComponentHeader>
                <PageFinances></PageFinances>
            </div>
    }
]

export default ROUTES

const RouteWithSubRoutes = (route) => {
    return (
        <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
        />
    )
}

export function RenderRoutes({ routes }) {
    return (
        <BrowserRouter>
            <ComponentMenu list={list}></ComponentMenu>
            <div className="container__content">
                <Switch>
                    {routes.map((route, i) => {
                    return <RouteWithSubRoutes key={route.key} {...route} title="1231" />
                    })}
                    <Route component={() => <h1>Не существует</h1>} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}