import { useLocation } from 'react-router-dom';
import ProductList from './products/ProductList';
import { useEffect } from 'react';
const Content  = () => {
    const location = useLocation();

    return <div>
        <div>Current URL is {location.pathname}</div>
        <div>{location.pathname.includes('/categories/')?<ProductList/>:"Main content" }</div>
        </div>
};

export default Content;