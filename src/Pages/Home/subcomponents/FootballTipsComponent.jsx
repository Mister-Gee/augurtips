import {Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const FootballTipsComponent = () => {
    return (
      <>
        <Col lg={6}>
            <Card className="tip-card">
                <Card.Body>
                    <Card.Title>Correct Score Tip</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">10th Jan, 2021 - 11:00am</Card.Subtitle>
                    <Card.Text as="div">
                        Three Full Time Correct Score tips in spanish La Liga
                    </Card.Text>
                    <Link to="#">View</Link>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={6}>
            <Card className="tip-card">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text as="div">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to="/">Card Link</Link>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={6}>
            <Card className="tip-card">
                <Card.Body>
                    <Card.Title>Correct Score Tip</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">10th Jan, 2021 - 11:00am</Card.Subtitle>
                    <Card.Text as="div">
                        Three Full Time Correct Score tips in spanish La Liga
                    </Card.Text>
                    <Link to="#">View</Link>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={6}>
            <Card className="tip-card">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text as="div">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to="/">Card Link</Link>
                </Card.Body>
            </Card>
        </Col>
      </>
    )
}

export default FootballTipsComponent;