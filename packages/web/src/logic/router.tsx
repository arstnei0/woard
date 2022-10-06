import Dashboard from '../views/Dashboard'
import { Redirect, Route, Switch } from 'wouter'
import NotFound from '../views/NotFound'

export const RouterComponent: React.FC<{}> = (props) => {
    return (
        <Switch>
            <Route path='/'>
                <Redirect to='/dashboard' />
            </Route>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
            {/* 404 -> */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default RouterComponent

export * from 'wouter'
