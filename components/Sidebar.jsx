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
                                <a href="">Consoles </a>
                                <a href="indoor-access-points-wifi-5.html">
                                    WiFi{" "}
                                </a>
                                <a href="javascript:void(0)">
                                    Routing &amp; Switching{" "}
                                </a>
                                <a href="protect.html">Protect </a>
                                <a href="javascript:void(0)">UISP </a>
                                <a href="javascript:void(0)">LTU </a>
                                <a href="javascript:void(0)">Accessories </a>
                                <a href="javascript:void(0)">Routers </a>
                                <a href="javascript:void(0)">Switches </a>
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
                            <a href="javascript:void(0)">
                                Ubiquiti <span>(10)</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                MikroTik <span>(2)</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                Ruijie <span>(1)</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                Siklu <span>(3)</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                Grandway <span>(0)</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
