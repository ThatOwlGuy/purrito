import Home from "./pages/home";
import Purrito from "./pages/burritoMaker/burritoMaker";
import Thanks from "./pages/thanksForPurrito";
import Error from "./pages/error";

export default function SimpleResolver(path)
{
    let component;
    switch(path) {
        case "/":
        case "/home":
            component = <Home />;
            break;
        case "/purrito-burrito":
            component = <Purrito />;
            break;
        case "/thanks":
            component = <Thanks />
            break;
        default:
            component = <Error />;
            break;
    }

    return (
        <>
            {component}
        </>
    );
}