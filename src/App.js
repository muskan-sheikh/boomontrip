import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import TermsPage from "./pages/TermsPage";
import RefundPolicy from "./pages/RefundPolicy";
import Loader from "./components/Loader";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route
                            path="/refund-policy"
                            element={<RefundPolicy />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
