import "./Home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerFluidExample() {
    return (
        <>

            <Container fluid>
                <Row className="row">
                    <Col className="col-1">
                            <h1> Side</h1>

                    </Col>
                    <Col className="col-2">
                        <h1> Side</h1>
                    </Col>
                </Row>
            </Container>

        </>

    );
}

export default ContainerFluidExample;