import { Link } from "react-router-dom"
import { Container } from "../container"

export const ListCategories = ({ listItem, cardItem }) => {

    return (
        <Container>
            {listItem.map((item) => (
                <Link to={`/categoria/${item.category}`} key={item.id} >
                    <Container ContainerClass={cardItem}>
                        <h3>{item.provider}</h3>
                    </Container>
                </Link>
            ))}
        </Container>
    )
}