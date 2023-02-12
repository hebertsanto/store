import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import style from './home.module.css'
import { Container } from "../../components/container"
import { PropText } from "../../components/TilteComponent"
export const Home = () => {
    const items = useSelector(state => state.newProducts);
    
    console.log(items)

    return (
        < Container ContainerClass={style.mainContent}>
            <PropText Text="Bem vindo A loja, Veja as " />

            <Container ContainerClass={style.containerCard}>
                {items.map((item) => (
                    <Link key={item.id} to={`/categoria/${item.category}`} className={style.container}>
                        <Container ContainerClass={style.card}>
                            <img
                                className={style.thumbnail}
                                src={item.thumbnail}
                                alt="img-products"
                            />
                            <h1 className={style.category}>{item.category}</h1>
                        </Container>
                    </Link>
                ))}
            </Container>
        </Container>
    )
}