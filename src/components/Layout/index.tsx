import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import "./style.scss";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
    return (
        <>
            <main className="layout">
                <Sidebar />

                <section className="right">
                    <Navbar />
                    <div className="body">{children}</div>
                </section>
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
