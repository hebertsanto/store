import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import { DefaultPage } from '../pages/defaulPage'
import { Home } from '../pages/home'
import { CategoriesItem } from '../pages/categories'

export const RouterDefault = () => {
    return (
        <Router>
            <Routes>
                 <Route path='/' element={<DefaultPage />}>
                    <Route  path='/' element={<Home />}/>
                 </Route>
                 <Route  path='/categoria/:Category' element={<CategoriesItem />}/>
            </Routes>
        </Router>
    )
}