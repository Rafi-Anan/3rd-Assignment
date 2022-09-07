import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import BlogSection from './Components/BlogSection';
import { Provider } from "react-redux"
import store from './redux/store';


function App() {
  return (
    <Provider store={store}> 
    <div>
      <NavBar />
      <SearchBar />
      <BlogSection />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
