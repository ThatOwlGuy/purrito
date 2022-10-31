import Home from "./pages/home";
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