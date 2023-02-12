import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import style from './category.module.css'
import { Header } from "../../components/header";
import { ListCategories } from "../../components/listCategory";
import { Container } from "../../components/container";
import {PropText} from "../../components/TilteComponent";

export const CategoriesItem = () => {

     const {Category} = useParams();
     const itensCategories = useSelector(state => state.products).filter(item => item.category === Category);

    return (
        <Container ContainerClass={style.container}>
            <Header />
            <PropText Text={`Loja ${itensCategories[0].category}  `} />
             
            <Container ContainerClass={style.containerCard}>
                <ListCategories
                    listItem={itensCategories}
                    cardItem={style.cardItem}
                />
            </Container>

        </Container>
    )
}
