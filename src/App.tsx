import './App.css';
import {Header} from "./layout/header/Header";
import {Hero} from "./layout/sections/hero/Hero";
import {Projects} from "./layout/sections/projects/Projects";
import {Technologies} from "./layout/sections/technologies/Technologies";
import {Experience} from "./layout/sections/experience/Experience";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Projects/>
            <Technologies/>
            <Experience/>
            <Footer/>
        </div>
    );
}

export default App;
