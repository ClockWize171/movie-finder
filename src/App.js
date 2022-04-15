import './App.css';
import { Home, MovieDetail, NotFound } from './containers'
import Footer from './components/Footer/Footer';
import { Container } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Container maxW="container.xl">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/movie/:imdbID' exact element={<MovieDetail />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
