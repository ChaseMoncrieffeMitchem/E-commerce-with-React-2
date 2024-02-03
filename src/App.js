import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import './index.css'
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from './data'
import BookInfo from "./pages/BookInfo.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;