const ProductRow = ({ productName, productPrice }) => {
    return (
        <>
            <tbody>
                <tr>
                    <td>{productName}</td>
                    <td>{productPrice}</td>
                </tr>
            </tbody>
        </>
    );
};

export default ProductRow;
