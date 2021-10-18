import React from "react";
import stocks from "../stockData";

function Stock(props) {
    // const [stock, setStock] = React.useState(null);

    // React.useEffect(()=>{
    //     setStock(props.name)
    // },[]);
    const symbol = props.match.params.symbol;

    for(let i = 0; i < stocks.length; i++){
        if(stocks[i].symbol== symbol){
            return(
                <div>
                    <h1>This is theStock page</h1>
                    <h2>{stocks[i].name}</h2>
                    <h2>{stocks[i].symbol}</h2>
                    <h2>last price: {stocks[i].lastPrice}</h2>
                    <h2>change: {stocks[i].change}</h2>
                </div>
            );
        }
    }

};

export default Stock;