import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";

function App(){
    return(
        <>
            <Header nama="Chevalier Laboratory"/>
            <Header/>
            <h1>Hello, React!</h1>
            <Footer/>
            <Card nama="Lala" umur="19"/> //build many component
            <Card nama="Budi" umur="20"/>
            <Card nama="Siti" umur="21"/>
        </>
    );
}

export default App;