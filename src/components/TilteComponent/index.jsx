import style from './logo.module.css'
import { Container } from '../container'

export const PropText = ({Text}) => {
    return <Container><h1 className={style.logo}>{Text}</h1></Container>
}