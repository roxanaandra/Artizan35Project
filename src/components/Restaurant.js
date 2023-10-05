import React, {useState} from 'react';
import Menu from './Menu';


const Restaurant = () => {
    const [isVisible, setIsVisible] = useState(false);

   const handleButton = () => {
        setIsVisible(true);
    }
    return (
        <>
            <section className="restaurant_section">
                <div className='restaurant_section__content'>
                    <div>
                        <h2 className='restaurant_content__title'>Artizan 35</h2>
                        <p className='restaurant_content__text'>Experimenteaza</p>
                        <button onClick={handleButton} className='restaurant_content__button'>Vezi meniul</button>
                    </div>
                </div>
                {isVisible &&
                <Menu setIsVisible={setIsVisible} />}

            </section>
        </>
    )
}

export default Restaurant;