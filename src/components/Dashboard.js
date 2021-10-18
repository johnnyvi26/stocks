import React from "react";
import { Link } from "react-router-dom";
import stocks from "../stockData";

function Dashboard(props) {
    return (
        <div className="stocks">
            <h1>This is Dashboards page</h1>
            {stocks.map((stock)=>{
                const { name, symbol} = stock;

                return(
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );

            })}
        </div>
    );
};

export default Dashboard;