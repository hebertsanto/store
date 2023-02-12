import { Link } from 'react-router-dom'
import style from './navBar.module.css'

export const NavBar = () => {
    return (
        <nav className={style.Link}>
            <Link to="/">
                teste
            </Link>
            <Link to="/">
                teste
            </Link>
            <Link to="/">
                teste
            </Link>
        </nav>
    )
}