export const Container = ({children, ContainerClass}) => {
    
    return(
        <div className={ContainerClass}>
            {children}
        </div>
    )
}