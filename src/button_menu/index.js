function ButtonMenu({name , status}) {
    return (
        <button className={status ? "right-menu_button--active" : "right-menu_button"}>
            {name}
        </button>
        
    )
}

export default ButtonMenu;