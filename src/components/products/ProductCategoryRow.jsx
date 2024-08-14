const ProductCategoryRow = ({ categoryName }) => {
    return (
        <>
            <thead>
                <tr>
                    <th colSpan={2}>{categoryName}</th>
                </tr>
            </thead>
        </>
    );
};

export default ProductCategoryRow;
