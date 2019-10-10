import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';


class LoginModel extends React.Component {
 
    render () {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                
                >
            <Modal.Header closeButton className="about-body">
                <Modal.Title id="contained-modal-title-vcenter" className="para-center">
                Login For Owner Only
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="about-body">
                
                <Form >
                <Form.Control type="text" placeholder="Enter username" />
                <br />
                <Form.Control type="text" placeholder="Enter password" />
                <br />
                <Form.Control type="submit" value="submit" />
                </Form>
            </Modal.Body>
            <Modal.Footer className="about-body">
                <Button variant="outline-light" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        )
    }
}

export default LoginModel;