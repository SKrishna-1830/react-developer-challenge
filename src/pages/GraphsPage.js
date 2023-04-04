import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import StocksGraph from '../components/StocksGraph';
import HeaderComp from '../components/HeaderComp';

function GraphsPage() {
    const [stocks, setStocks] = useState([])
    const [selected, setSelected] = useState('')
    const stockslist = localStorage.getItem('stockslist')
    useEffect(() => {
        setStocks(JSON.parse(stockslist))
    }, [stockslist])
    const handleOnSelect = (e) => {
        setSelected(e.target.value)
    }
    return (
        <>
            <Container fluid>
                <HeaderComp />

                <Container>
                    <br />

                    <select className="form-select  w-50 mb-3" onChange={handleOnSelect}>
                        <option value="">Select a stock to see graph</option>
                        {
                            stocks.map((ele) => {
                                return (<option value={ele}>{ele}</option>)

                            })
                        }
                    </select>
                </Container>
                <StocksGraph ticker={selected} />
            </Container>
        </>
    )
}
export default GraphsPage;