//import bootstrap npm instal react-bootstrap
import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

      <div className='contenedor-principal'>

        <Header 
          titulo='Galería de imágenes con React'
          />
          <div className='contenedor-secundario'>
        <Card
          imagen='quokka'
          nombre='Quokka'
          info='Se le conoce como el animal más feliz del mundo por su gran sonrisa. Lamentablemente se encuentra en peligro de extinción y eso no lo hace sentir contento.'
          />
                  <Card
          imagen='perezoso'
          nombre='Perezoso'
          info='Sorprendería saber que realmente no es un oso, es un mamifero que forma parte de los xenartros. Es curioso saber que todos los perezosos son daltónicos al carecer de células cónicas, además, son ciegos con luz diurna brillante.'
          />
                  <Card
          imagen='capibara'
          nombre='Capibara'
          info='Es el roedor más grande del mundo, puede pesar hasta 79 Kg. Hace un año 400 capibaras recuperaron su espacio en Nordelta, Argentina, una de las zonas más ricas del país.'
          />
                            <Card
          imagen='ajolote'
          nombre='Ajolote'
          info='Es una salamandra que conserva rasgos larvales en su adultez. Está en peligro de extinción debido a que es muy consumido en México y al ser muy requerido como mascota.'
          />

        </div>
        <div className='contenedor-footer'>
            <Footer/>
          </div>
      </div>
  );
}

export default App;
