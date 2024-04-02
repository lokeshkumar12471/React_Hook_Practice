import React, { useEffect, useMemo, useState } from 'react';

const MemoSecondExample = () => {
    const [Time, setTime] = useState(new Date().toLocaleTimeString());
    // eslint-disable-next-line
    const [products, setProduct] = useState([
        { id: 1, name: 'One Plus Nord CE2', price: 20000 },
        { id: 2, name: 'Oppo F21 S', price: 22000 },
        { id: 3, name: 'Samsung Galaxy M 33', price: 17000 },
    ]);
    const [searchText, updateSearchText] = useState('');

    const filteredProducts = useMemo(() => {
        return products.filter((item) => {
            return item.name.toLowerCase().includes(searchText.toLowerCase());
        });
    }, [products, searchText]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <h6>useMemo Hook In React, This is Second Example</h6>
            <input type='text' value={searchText} onChange={(e) => updateSearchText(e.target.value)} /><br />
            {Time}
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default MemoSecondExample;
