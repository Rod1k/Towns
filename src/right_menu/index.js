import ButtonMenu from "../button_menu/index.js";

function RightMenu() {
    return (
        <div className="right-menu">
            <ButtonMenu name="Город" status={true} />
            <ButtonMenu name="Статус" status={false} />
            <ButtonMenu name="Улучшения" status={false} />
        </div>
    )
}

export default RightMenu;