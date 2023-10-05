import React from 'react';
import description from '../assets/images/description.png';
import vector from '../assets/images/vector.png';


const Description = () => {
    return (
        <>
            <section class="description__section">
                <div className='description_content'>
                    
                    <div class="description_textarea">
                        <h3 className='description_title'>Acasa.</h3>
                        <h4 className='description_title'>La noi.</h4>
                        <p className='description_text'>Mai, 2021. Artizan35 isi intra in drepturi dar nu ca Gradinita, ci ca Stabiliment de Bucatarie si Bauturi cu atingeri artizanale. Descoperind si pastrand elementele originale ale cladirii, reinviem atmosfera 
                            interbelica adaugand accente contemporane.
                        </p>

                        <p className='description_text'>Anterior fiind o gradinita, multi dintre voi regasesc camerele copilariei. Dar stiti, oamenii schimba locurile si pe ei cu timpul. Ce sta la baza nu dispare niciodata, se transforma. 
                            Artizan35 te invita la socializare, cu o bucatarie contemporana bazata pe principii sanatoase, asa cum o vedem noi si bauturi alese, atat in interior cat si in generoasa gradina de vara. Un loc care imbina lejeritatea si relaxarea vorbelor spuse la un pahar de vin intr-un decor deconstruit, cu o personalitate puternica. 
                            Si da, respectand aceste lucruri, locul acesta nu putea sa se numeasca decat Artizan35.
                        </p>
                        <p className='description_text'>Hai pofta mare si spor la cafea!</p>
                        
                    </div>
                    <div>
                        <img className='description_image' src={description} />
                    </div>
                    
                </div>

            </section>
        </>
    )
}


export default Description;