import Container from 'react-bootstrap/Container';
import AddingStocks from '../components/AddingStocks';
import Header from '../components/Header';

function Home() {
    return (
        <>
            <Container fluid>

                <Header />
                <br />
                <AddingStocks />
            </Container>
        </>
    )
}
export default Home;