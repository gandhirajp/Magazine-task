import logo from './logo.svg';
import './App.css';
import Category from './Category';
import Language from './Language';


function App() {


  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <div className="row mt-3 d-flex justify-content-evenly">
            <div className="col-4 ">
              <div className='mx-3'>
                <Category />
              </div>
            </div>
            <div className="col-4">
              <div className='mx-3'>
                <Language />
              </div>
            </div>
           
           
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
