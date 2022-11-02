export default class InCart extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            inCart : cookies.get('inCart') || null
        };
    }

    items = () => {
        const { cookies } = props;
        let itemsInCart = mockCart || cookies.get('inCart');
        return itemsInCart;
    };

    cartList = this.items.map((item, index) => {
        return (
            <li key={index} data-index={index}>
                <h3>1 x {item.protein} Burrito</h3>
            </li>
        );
    });

    render() {
        <div>
            {this.cartList}
        </div>
    }
}

var mockCart = {
    burritos : [
        {
            protein : "beef",
            tortilla : "flour tortilla",
            rice : "white",
            peppersAndOnions : "peppers",
            cheese : "cotija",
            purrito : true
        },
        {
            protein : "chicken",
            tortilla : "flour tortilla",
            rice : "white",
            peppersAndOnions : "peppers & onions",
            cheese : "chihuahua",
            purrito : false
        },
        {
            protein : "black beans",
            tortilla : "flour tortilla",
            rice : "brown",
            peppersAndOnions : "onions",
            cheese : "monterrey jack",
            purrito : false
        },
    ]
}