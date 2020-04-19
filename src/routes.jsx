import React, { useEffect } from 'react'
import PageTime from './views/PageTime'
import PageFinances from './views/PageFinances'
import ComponentMenu from './components/ComponentMenu/container'
import ComponentHeader from './components/ComponentHeader/container'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

const list = [
    { path: '/', name: 'Главная' },
    { path: '/finances', name: 'Мои финансы' },
]

const ROUTES = [
    {
        path: '/',
        key: 'base',
        exact: true,
        component: () => <PageTime></PageTime>
    },
    {
        path: '/finances',
        key: 'finances',
        exact: true,
        title: 'Мои финансы',
        component: () => <PageFinances></PageFinances>
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
            <ComponentHeader title={'прикольный заголовок'}></ComponentHeader>
            <Switch>
                {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />
                })}
                <Route component={() => <h1>Не существует</h1>} />
            </Switch>
        </BrowserRouter>
    )
}