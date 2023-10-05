import React from 'react';
import wine from '../assets/images/wine.png';
import food from '../assets/images/food.png';
import bar from '../assets/images/bar.png';

const RestaurantMenu = () => {
    
    return (
        <>
            <section className='restaurantmenu_section'>
                <div className='restaurantmenu_content'>
                    <div className='restaurant_menu'>
                        <div className="menu_item">
                            <img src={wine} alt="wine"  className='restaurant_wine'/>
                            <p className='wines_text'>Vinuri</p>
                        </div>
                        <div className="menu_item">
                            <img src={food} alt="food"  className='restaurant_wine'/>
                            <p className='wines_text'>Mancare</p>
                        </div>
                        <div className="menu_item">
                            <img src={bar} alt="bar"  className='restaurant_wine'/>
                            <p className='wines_text'>Bar</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default RestaurantMenu;