import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import IndexView from './views'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexView />,
    },
])

const Router: React.FC<{}> = props => <RouterProvider router={router}></RouterProvider>

export default Router