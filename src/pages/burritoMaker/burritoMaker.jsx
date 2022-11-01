import burritoPic from "../../assets/images/burrito.jpg";
export default function Purrito() {
    return (
        <div>
            <div className="flex-container">
                <img src={burritoPic} className="purrito-banner" />
                <div className="info-panel" style={{padding:"1rem", float:"right"}}>
                    <h2>1 Large Purrito</h2>
                    <h3>$10.99</h3>
                </div>
            </div>
            <div className="widget-panel">
                <h2><center>
                    The standard large purrito comes with your choice of protein, 
                    tortilla, rice, peppers, onions, & cheese!
                </center></h2>
                <div id="burrito-options" className="info-panel" style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div>
                        <div>
                            <h1>Protein</h1>
                            <h3>
                                <input type="radio" value="Beef" name="Protein" /> Beef
                            </h3>
                            <h3>
                                <input type="radio" value="Chicken" name="Protein" /> Chicken
                            </h3>
                            <h3>
                                <input type="radio" value="Carne Asada" name="Protein" /> Carne Asada
                            </h3>
                            <h3>
                                <input type="radio" value="Black Beans" name="Protein" /> Black Beans
                            </h3>
                        </div>
                        <div>
                            <h1>Tortilla</h1>
                            <h3>
                                <input type="radio" value="Jalapeno Tortilla" name="Tortilla" /> Jalapeno Tortilla
                            </h3>
                            <h3>
                                <input type="radio" value="Cholula Tortilla" name="Tortilla" /> Cholula Tortilla
                            </h3>
                            <h3>
                                <input type="radio" value="Maiz Tortilla" name="Tortilla" /> Maiz Tortilla
                            </h3>
                            <h3>
                                <input type="radio" value="Blue Corn Tortilla" name="Tortilla" /> Blue Corn Tortilla
                            </h3>
                        </div>
                        <div>
                            <h1>Rice</h1>
                            <h3>
                                <input type="radio" value="White" name="Rice" /> White
                            </h3>
                            <h3>
                                <input type="radio" value="Brown" name="Rice" /> Brown
                            </h3>
                            <h3>
                                <input type="radio" value="No Rice" name="Rice" /> No Rice
                            </h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Peppers & Onions</h1>
                            <h3>
                                <input type="radio" value="None" name="Peppers & Onions" /> None
                            </h3>
                            <h3>
                                <input type="radio" value="Peppers Only" name="Peppers & Onions" /> Peppers Only
                            </h3>
                            <h3>
                                <input type="radio" value="Onions Only" name="Peppers & Onions" /> Onions Only
                            </h3>
                            <h3>
                                <input type="radio" value="Peppers & Onions" name="Peppers & Onions" /> Peppers & Onions
                            </h3>
                        </div>
                        <div>
                            <h1>Cheese</h1>
                            <h3>
                                <input type="radio" value="Monterrey Jack" name="Cheese" /> Monterrey Jack
                            </h3>
                            <h3>
                                <input type="radio" value="Queso Blanco" name="Cheese" /> Queso Blanco
                            </h3>
                            <h3>
                                <input type="radio" value="Cotija" name="Cheese" /> Cotija
                            </h3>
                            <h3>
                                <input type="radio" value="No Cheese" name="Cheese" /> No Cheese
                            </h3>
                        </div>
                        <div>
                            <h1 style={{marginBottom:"0rem"}}>Include Cat-Friendly Purrito</h1>
                            <p style={{marginTop:"0rem"}}>(Rice paper tortilla, fish, and nip seasoning)</p>
                            <h3>
                                <input type="radio" value="Monterrey Jack" name="Cheese" /> Give my cat a purrito!
                            </h3>
                            <h3>
                                <input type="radio" value="No Cheese" name="Cheese" /> No purrito
                            </h3>
                        </div>
                    </div>
                </div>
                <center style={{marginTop:"0rem", display:"flex", justifyContent:"space-evenly"}}>
                    <button className="info-panel">
                        <h1 style={{margin:"0.1rem"}}>¡Add Purrito!</h1>
                    </button>
                    <button className="info-panel">
                        <h1 style={{margin:"0.1rem"}}>¡Purchase Purrito(s)!</h1>
                    </button>
                </center>
            </div>
        </div>
    );
}