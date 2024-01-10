import { useParams } from 'react-router-dom';
import contentnavi from './data/navi.json';

const Contents = (props) =>{
    const { language } = useParams(); // 1

  


   
    return(
        <section>
            { props.children }
            {language}사이트입니다.
            {
                  contentnavi[language].navi.map((e)=>e.d1text )
            }
            
        </section>
    )
}
export default Contents;