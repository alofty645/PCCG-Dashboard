import React from "react";
import { Breadcrumb, Button, ButtonGroup, Row, Col, InputGroup, Form, Dropdown, Card, Table } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faCog, faCheck, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import products from '../data/products';
import backorderdata from '../data/backorderdata'
export default () => {
    return ( 
        <div>
            <div className="mb-4 mb-lg-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>PCCG</Breadcrumb.Item>
            <Breadcrumb.Item active>Backorder</Breadcrumb.Item>
        </Breadcrumb>
        <h4>Backorder</h4>
    </div>
    <div className="btn-toolbar mb-2 mb-md-0">
        <Button variant="primary" size="sm">
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Add to Backorder
        </Button>
        <ButtonGroup className="ms-3">
            <Button variant="outline-primary" size="sm">Export</Button>
        </ButtonGroup>
    </div>
        <div className="table-settings mb-4">
    <br></br>
    <Row className="justify-content-between align-items-center">
        <Col xs={9} lg={4} className="d-flex">
            <InputGroup className="me-2 me-lg-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Search" />
            </InputGroup>
            <Form.Select className="w-25">
                <option defaultChecked>All</option>
                <option value="1">In Stock</option>
                <option value="2">Out of Stock</option>
            </Form.Select>
        </Col>
        <Col xs={3} lg={8} className="text-end">
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                    <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faCog} />
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    </Row>
    <br></br>
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body>
            <Table hover className="user-table align-items-center">
                <thead>
                    <tr>
                        <th className="border-bottom">Date Purchased</th>
                        <th className="border-bottom">Order Number</th>
                        <th className="border-bottom">Product</th>
                        <th className="border-bottom">Qty(Inv)</th>
                        <th className="border-bottom">Qty Req/Avail</th>
                        <th className="border-bottom">Customer</th>  
                        <th className="border-bottom">ETA</th>
                    </tr>
                </thead>
                <tbody>
                {backorderdata.map(u => (
                    <tr key={u.key}>
                        <td>
                            <Card.Link className="d-flex align-items-center">
                               
                                <div className="d-block">
                                    <span className="fw-normal">{u.datepurch}</span>

                                </div>
                            </Card.Link>
                        </td>
                        <td><span className="fw-normal"><div className="small text-gray">{u.ordernum}</div></span></td>
                        <td><span className="fw-normal"><div className="small text-gray">{u.Model}</div></span></td>
                        <td><span className="fw-normal"><div className="small text-gray">{u.qty}</div></span></td>
                        <td><span className="fw-normal"><div className="small text-gray">{u.qtyreq}</div></span></td>
                        <td><span className="fw-normal"><div className="small text-gray">{u.customer}</div></span></td>                   
                        <td><span className="fw-normal"><div className="small text-gray">{u.eta}</div></span></td>

                        
                         </tr>
                        ))}
                </tbody>
            </Table>
        </Card.Body>
    </Card>
</div>
</div>
        



    );
};