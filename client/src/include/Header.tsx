import{Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
//{['sm', 'md', 'lg', 'xl', 'xxl'].map((expand)=>(
const Header = () => {
    return(
<>{/*false*/}
{['md'].map((expand)=>(
    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
    <Container fluid>
        <Navbar.Brand href="#">로고</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                오프캔퍼스 메뉴
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Link</Nav.Link>
                <NavDropdown 
                title="버거킹"
                id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                    <NavDropdown.Item href="">주니어와퍼</NavDropdown.Item>
                    <NavDropdown.Item href="">와퍼</NavDropdown.Item>
                    <NavDropdown.Item href="">롱치킨버거</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/*검색창*/}
            <Form className='d-flex'>
                <Form.Control
                type='search'
                placeholder='search'
                className='me-2'/>
                <Button variant="outline-success">search</Button>
            </Form>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Container>
    </Navbar>
))}
</>
    )
}
export default Header;