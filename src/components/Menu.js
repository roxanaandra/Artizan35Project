import React from 'react';

const Menu = ({setIsVisible}) => {

    const handleClose = () => {
        setIsVisible(false);

    }

    return (
        <>
        <div className='menu_content'>
            <h2 className='menu_title'>Menu</h2>
            <div className='menu_food'>
                <div className='menu_food__content'>
                    <p className='menu_food__text'>Oua boieresti cu ceapa verde, unt, branza de capra .... 36lei</p>
                    <p className='menu_food__text'>Zacusca facuta in casa din crap .... 28lei</p>
                    <p className='menu_food__text'>Hummus din naut, pasta de susan .... 29lei</p>
                    <p className='menu_food__text'>Supa de rosii .... 34lei</p>
                    <p className='menu_food__text'>Bol vegan plin cu orez .... 44lei </p>
                    <p className='menu_food__text'>Paste Amatriciana .... 52lei</p>
                </div>
                <div className='menu_food__content'>
                    <p className='menu_food__text'>Risotto cu texturi de dovleac .... 38lei</p>
                    <p className='menu_food__text'>Burger Artizan35 .... 58lei</p>
                    <p className='menu_food__text'>Platou pentru Vin cu gorgonzola .... 89lei</p>
                    <p className='menu_food__text'>Legume la gratar .... 30lei</p>
                    <p className='menu_food__text'>Paine facuta in casa (fara gluten) .... 24lei</p>
                    <p className='menu_food__text'>File de Dorada .... 68lei</p>
                    <p className='menu_food__text'>Ficat de Vitel* 250gr cu sos (lactate) de vin alb si hribi .... 51lei</p>
                    <button onClick={handleClose} className='restaurant_content__button'>Inchide</button>
                </div>
                
            </div>
            

        </div>

        </>
    )
}

export default Menu;