import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Contents from './Contents';

function App() {
  const navi = [
    {
       d1text : "한국어",
       cls : "naver",
       href : "kr"
    },
    {
        d1text : "영어",
        cls : "daum",
        href : "en"
     }
  ]
  return (
    <div className="App">
      <header> 
        {
          navi.map((e, i) => {
              return(
                  <Link to={`/kr/${e.href}`} key={`navi${i}`}>{e.d1text}</Link>
              )
          })
        }     
    
      </header>
      <section>
          <Routes>
            <Route path="/kr/:language" element={<Contents><p>나 한국어로</p></Contents>}></Route>              
          </Routes>

      </section>
    </div>
  );
}

export default App;
