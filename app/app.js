class ShopItemHeader extends React.Component {
    render() {
        return (
            <header>
                <h1 style={{color:"#333", textAlign:"center", textTransform:"uppercase"}}>W Twoim koszyku:</h1>
                <h2 style={{textAlign:"center"}}>{this.props.title}</h2>
                <img style={{height:"240px", marginLeft:"180px", width:"240px"}} src={this.props.image}/>
            </header>
        );
    }
}

class ShopItemDescription extends React.Component {
    render() {
        return (
            <article>
                <p style={{color:"#333", fontSize:"20px", textAlign:"justify"}}>{this.props.description}</p>
            </article>
        );
    }
}

class ShopItemPricing extends React.Component {
    render() {
        return (
            <footer>
                <p style={{fontSize:"20px", marginLeft:"230px"}}>Cena: {this.props.price} zł</p>
                <button style={{background:"#ddd", border:"1px solid #333", borderRadius:"4px", borderRadius:"5px", boxShadow:"2px 2px 2px #333", fontSize:"20px", marginLeft:"220px", padding:"8px", width:"160px" }}>Kup!</button>
            </footer>
        );
    }
}

// jako przykładowe dane:
const item = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
}

class ShopItem extends React.Component {
    render() {
        return (
            <div style={{border:"1px solid #333", borderRadius:"5px", boxShadow:"4px 4px 4px #333", margin:"20px auto", padding:"10px", width:"600px"}}>
                <ShopItemHeader title={item.title} image={item.image}/>
                <ShopItemDescription description={item.description}/>
                <ShopItemPricing price={item.price}/>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return <ShopItem />
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root") 
);
