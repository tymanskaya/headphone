import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {LastCollection} from "./layout/sections/LastCollection/LastCollection";
import {Specifications} from "./layout/sections/specifications/Specifications";
import {LatestProduct} from "./layout/sections/latestProduct/LatestProduct";
import {ContentsHeadPhones} from "./layout/sections/contentsHeadPhones/ContentsHeadPhones";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";



function App() {
    return (
        <div className="App">
        <Header/>
        <Main/>
        <LastCollection/>
            <Specifications/>
            <LatestProduct/>
            <ContentsHeadPhones/>
            <Contact/>
            <Footer/>
        </div>

    );
}

export default App;

