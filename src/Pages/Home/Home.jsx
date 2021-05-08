import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Hero from './subcomponents/Hero';
import FootballTipsComponent from './subcomponents/FootballTipsComponent';
import AffliateCard from './subcomponents/AffliateCard';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home | Augurs Tips</title>
        </Helmet>
        <div className="wrapper">
            <Hero />
            <div className="body">
                <Container className="content-wrapper border-top">
                    <Row>
                        <Col xl={8} lg={8}>
                            <Container className="border-bottom pb-3">
                                <div className="header">
                                    <h5>Today's Football Tips <i className="fas fa-futbol"></i></h5>
                                    <Link to="/football-tips">See More</Link>
                                </div>
                                <Row>
                                    <FootballTipsComponent />          
                                </Row>
                            </Container>
                            <Container className="border-bottom pb-3">
                                <div className="header">
                                    <h5>Featured Match <i className="fas fa-football-ball"></i> </h5>
                                    <Link to="/featured-match">See More</Link>
                                </div>
                                <Row>
                                    <FootballTipsComponent />          
                                </Row>
                            </Container>
                            <Container className="border-bottom pb-3">
                                <div className="header">
                                    <h5>Featured Leagues <i className="fa fa-futbol"></i> </h5>
                                    <Link to="/featured-leagues">See More</Link>
                                </div>
                                <Row>
                                    <FootballTipsComponent />          
                                </Row>
                            </Container>
                            <Container className="border-bottom pb-3">
                                <div className="header">
                                    <h5>Latest News <i className="fas fa-newspaper    "></i> </h5>
                                    <Link to="/featured-leagues">See More</Link>
                                </div>
                                <Row>
                                    <FootballTipsComponent />          
                                </Row>
                            </Container>
                        </Col>
                        <Col xl={4} lg={4}>
                            <Container className="border-bottom pb-3">
                                <div className="header">
                                    <h5>Affliates and Freebies</h5>
                                </div>
                                <Row>  
                                    <AffliateCard />    
                                    <AffliateCard />    
                                    <AffliateCard />    
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default Home;