import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route element={<Outlet />}>
                        <Route index element={<Home />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/resources" element={<Resources />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
