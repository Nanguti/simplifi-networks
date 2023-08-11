import Link from "next/link";
const Sidebar = () => {
    return (
        <>
            <div className="uren-sidebar-catagories_area">
                <div className="category-module uren-sidebar_categories">
                    <div className="category-module_heading">
                        <h5>Categories</h5>
                    </div>
                    <div className="module-body">
                        <ul className="module-list_item">
                            <li>
                                <Link href="">Consoles </Link>
                                <Link href="indoor-access-points-wifi-5.html">
                                    WiFi{" "}
                                </Link>
                                <Link href="#">
                                    Routing &amp; Switching{" "}
                                </Link>
                                <Link href="protect.html">Protect </Link>
                                <Link href="#">UISP </Link>
                                <Link href="#">LTU </Link>
                                <Link href="#">Accessories </Link>
                                <Link href="#">Routers </Link>
                                <Link href="#">Switches </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="uren-sidebar_categories">
                    <div className="uren-categories_title">
                        <h5>Top Manufacturers</h5>
                    </div>
                    <ul className="sidebar-checkbox_list">
                        <li>
                            <Link href="#">
                                Ubiquiti <span>(10)</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                MikroTik <span>(2)</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Ruijie <span>(1)</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Siklu <span>(3)</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Grandway <span>(0)</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
