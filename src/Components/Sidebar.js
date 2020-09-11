import React from 'react'; 
import { Row, Col } from 'react-bootstrap';
// import '../App.css'

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // determine if admin, agency, or client
            userType: 3,
            rowColor: {
                "dashboard": "#023e8a",
            },
            isActive: "dashboard",
        };

        this.handleMouseOver= this.handleMouseOver.bind(this);
        this.hanldeMouseOut= this.hanldeMouseOut.bind(this);
    }

    componentDidMount = () => {
        this.setState({
            userType: this.props.userType
        });
    }

    handleMouseOver = (e) => {

        let rowColor= {...this.state.rowColor};
        if(this.state.isActive !== e.target.id){
            rowColor[e.target.id] = "#5390d9"
        }
        this.setState({rowColor});
    }

    hanldeMouseOut = (e) => {
        let rowColor= {...this.state.rowColor};
        if(this.state.isActive !== e.target.id){
            rowColor[e.target.id] = "#5e60ce"
        }
        this.setState({rowColor});
    }

    handleClick = (e) => {
        let rowColor = {...this.state.rowColor};
        rowColor[this.state.isActive] = "#5e60ce";
        rowColor[e.target.id] = "#023e8a";
        this.setState({
            rowColor, 
            isActive: e.target.id
        });
    }

    render(){
        return(
            <div className="m-3">
              <Row>
                  <h4 style={{ cursor: "pointer", color: "#f1faee" }}>Agency/Client Name</h4>
              </Row>
              <Row className="my-2 mt-4">
                <small style={{ color: "#a8dadc"}}>ACTIVITY</small>
              </Row>
              <div style={{ color: "#f1faee"}}>
                <Row className="py-2" id="dashboard" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["dashboard"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Dashboard
                </Row>
                <Row className="py-2" id="orders" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["orders"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Orders
                </Row>
                <Row className="py-2" id="clients" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["clients"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Clients
                </Row>
                <Row className="py-2" id="tickets" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["tickets"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Tickets
                </Row>
              </div>

              <Row className="my-2 mt-4">
                <small style={{ color: "#a8dadc"}}>BILLING</small>
              </Row>
              <div style={{ color: "#f1faee"}}>
                <Row className="py-2" id="invoices" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["invoices"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Invoices
                </Row>
                <Row className="py-2" id="subscriptions" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["subscriptions"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Subscriptions
                </Row>
              </div>

              <Row className="my-2 mt-4">
                <small style={{ color: "#a8dadc"}}>MARKETING</small>
              </Row>
              <div style={{ color: "#f1faee"}}>
                <Row className="py-2" id="coupons" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["coupons"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Coupons
                </Row>
                <Row className="py-2" id="affiliates" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["affiliates"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Affiliates
                </Row>
              </div>

              <Row className="my-2 mt-4">
                <small style={{ color: "#a8dadc"}}>SETUP</small>
              </Row>
              <div style={{ color: "#f1faee"}}>
                <Row className="py-2" id="services" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["services"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Services
                </Row>
                <Row className="py-2" id="orderForms" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["orderForms"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Order forms
                </Row>
                <Row className="py-2" id="modules" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["modules"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Modules
                </Row>
                <Row className="py-2" id="integrations" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["integrations"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Integrations
                </Row>
                <Row className="py-2" id="settings" onClick={e => this.handleClick(e)} style={{ cursor: "pointer", backgroundColor: this.state.rowColor["settings"], borderRadius: "5px" }} onMouseOver={e => this.handleMouseOver(e)} onMouseOut={e => this.hanldeMouseOut(e)}>
                  Settings
                </Row>
              </div>
            </div>
        );
    }
}

export default Sidebar;