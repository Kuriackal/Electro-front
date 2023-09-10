import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () =>(
    <nav>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link h6">
                   DASHBOARD
                    </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/product" className="nav-link h6">
                   PRODUCT
                    </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/products" className="nav-link h6">
                   PRODUCTS
                    </Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/category" className="nav-link h6">
                  CATEGORY
                    </Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/sub" className="nav-link h6">
                  SUB-CATEGORY
                    </Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/coupon" className="nav-link h6">
                 COUPON
                    </Link>
            </li>

            <li className="nav-item">
                <Link to="/user/Password" className="nav-link h6">
                 PASSWORD
                    </Link>
            </li>
        </ul>

    </nav>
)

export default AdminNav