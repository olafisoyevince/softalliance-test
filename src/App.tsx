import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Elements from "./pages/Elements";
import ElementsLink from "./pages/ElementsLink";
import "./App.scss";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/elements" element={<Elements />} />
                    <Route path="/elements-link" element={<ElementsLink />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
