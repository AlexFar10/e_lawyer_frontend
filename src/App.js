import Home from "./Home";
import {AuthProvider} from "./context/AuthProvider";

function App() {
    return (
        <>
            <AuthProvider>
            <Home/>
                </AuthProvider>
        </>
    );
}

export default App;
