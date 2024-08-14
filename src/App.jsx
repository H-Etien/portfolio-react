import "./App.css";
import { useState } from "react";

import Input from "./components/forms/Input.jsx";
import Checkbox from "./components/forms/Checkbox.jsx";
import ProductCategoryRow from "./components/products/ProductCategoryRow.jsx";
import ProductRow from "./components/products/ProductRow.jsx";

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState("");

    const visibleProducts = PRODUCTS.filter((product) => {
        let productName = product.name.toLowerCase();
        let searchedProduct = search.toLowerCase();

        if (showStockedOnly && !product.stocked) {
            return false;
        }

        if (!productName.includes(searchedProduct)) {
            return false;
        }
        return true;
    });

    return (
        <>
            <SearchBar
                showStockedOnly={showStockedOnly}
                onStockedOnlyChange={setShowStockedOnly}
                search={search}
                onSearchChange={setSearch}
            />
            <ProductTable products={visibleProducts} />
        </>
    );
}

function SearchBar({
    showStockedOnly,
    onStockedOnlyChange,
    search,
    onSearchChange,
}) {
    return (
        <div className="searchbar">
            <Input
                placeholder="Search ..."
                value={search}
                onChange={onSearchChange}
            />
            <div>
                <Checkbox
                    checked={showStockedOnly}
                    onChange={onStockedOnlyChange}
                />
                Afficher les produits en stock
            </div>
        </div>
    );
}

function ProductTable({ products }) {
    let rows = [];
    let lastCategory = "";

    const addCategory = (product) => {
        rows.push(
            <ProductCategoryRow
                categoryName={product.category}
                key={product.category}
            />
        );
    };

    const addProduct = (product) => {
        rows.push(
            <ProductRow
                productName={product.name}
                productPrice={product.price}
                key={product.name}
            />
        );
    };

    for (let product of products) {
        if (product.category !== lastCategory) {
            addCategory(product);

            //ne pas recréer plusieurs mêmes catégories
            lastCategory = product.category;
        }
        addProduct(product);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            {/* <ProductCategoryRow categoryName={"1"} />
                <ProductCategoryRow categoryName={"2"} /> */}

            {rows}
        </table>
    );
}

export default App;
