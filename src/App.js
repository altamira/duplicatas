import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  PageHeader, 
  ButtonGroup, 
  OverlayTrigger, 
  Button, 
  Popover, 
  Glyphicon, 
  Panel, 
  ListGroup, 
  ButtonToolbar, 
  Col, 
  Row, 
  Grid,
  FormGroup,
  ControlLabel,
  FormControl,
  Table,
  Checkbox
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      numero: '216558',
      pedido: '74655',
      emissao: new Date().toISOString(),
      entrega: new Date().toISOString(),
      cpnj: '63.394.915/0001-62',
      representante: '001',
      nome: 'ALEGRIA NA VIDA AGROINDUSTRIAL LTDA',
      parcelas: [
        {
          selecionada: false,
          data: new Date('2016-10-10').toISOString(),
          valor: 2198.74
        },
        {
          selecionada: false,
          data: new Date('2016-11-07').toISOString(),
          valor: 3572.96
        }        
      ]
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }

  handleChange(value) {
    // value is an ISO String. 
    this.setState({
      value: value
    });
  }

  render() {
    const canSave = true;

    return (
      <div>
        <Grid>
          <Row>
            <Col xd={0} md={2} />
            <Col xd={12} md={10} >
              <ButtonToolbar >
                <ButtonGroup style={{margin: 10}} >
                  <Button
                    bsSize="large"
                    disabled={!canSave}
                    onClick={!canSave ? this.handleClick : null}
                    style={{margin: 10}}
                  >
                    <Glyphicon glyph="plus" />
                    <div><span>Novo</span></div>
                  </Button>
                  <Button
                    bsSize="large"
                    disabled={!canSave}
                    onClick={!canSave ? this.handleClick : null}
                    style={{margin: 10}}
                  >
                    <Glyphicon glyph="floppy-disk" />
                    <div><span>Gravar</span></div>
                  </Button>
                  <Button
                    bsSize="large"
                    disabled={!canSave}
                    onClick={!canSave ? this.handleClick : null}
                    style={{margin: 10}}
                  >
                    <Glyphicon glyph="print" />
                    <div><span>Imprimir</span></div>
                  </Button>
                  <Button
                    bsSize="large"
                    onClick={!canSave ? this.handleClick : null}
                    style={{margin: 10}}
                  >
                    <Glyphicon glyph="calendar" />
                    <div><span>Calcular datas</span></div>
                  </Button>
                  <Button
                    bsSize="large"
                    onClick={!canSave ? this.handleClick : null}
                    style={{margin: 10}}
                  >
                    <Glyphicon glyph="search" />
                    <div><span>Consultar</span></div>
                  </Button>
                  <Button
                    bsSize="large"
                    onClick={!canSave ? this.handleClick : null}
                    style={{margin: 10}}
                  >
                    <Glyphicon glyph="trash" />
                    <div><span>Excluir</span></div>
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col md={2} />
          </Row>
        </Grid>
        <form style={{marginTop: 100}} >
          <Grid>
            <Row>
              <Col md={2}>Número</Col>
              <Col md={2}>
                <FormGroup controlId="formValidationSuccess2" validationState="success">
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  <FormControl type="text" defaultValue="216558" />
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
              <Col md={2}>Emissão</Col>
              <Col md={2}>
                <FormGroup controlId="formValidationSuccess2" validationState="success">
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  {/*<FormControl type="text" defaultValue="10/10/2016" />*/}
                  {/*<FormControl.Feedback />*/}
                  <DatePicker value={this.state.value} onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col md={2}>Entrega</Col>
              <Col md={2}>
                <FormGroup controlId="formValidationSuccess2" validationState="success">
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  {/*<FormControl type="text" defaultValue="10/10/2016" />*/}
                  {/*<FormControl.Feedback />*/}
                  <DatePicker value={this.state.value} onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={2}>Pedido</Col>
              <Col md={2}>
                <FormGroup controlId="formValidationSuccess2" validationState="success">
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  <FormControl type="text" defaultValue="74655" />
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
              <Col md={2}>CNPJ/CPF</Col>
              <Col md={2}>
                <FormGroup controlId="formValidationSuccess2" validationState="success">
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  <FormControl type="text" defaultValue="63.394.915/0001-62" />
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
              <Col md={2}>Representante</Col>
              <Col md={2}>
                <FormGroup controlId="formValidationSuccess2" validationState="success">
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  <FormControl type="text" defaultValue="001" />
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={2}>Razão Social</Col>
              <Col md={10}>
                <FormGroup controlId="formValidationSuccess2" validationState="success">
                  {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                  <FormControl type="text" defaultValue="ALEGRIA NA VIDA AGROINDUSTRIAL LTDA" />
                  <FormControl.Feedback />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Data</th>
                    <th>Valor da Duplicata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Checkbox defaultValue={true} /></td>
                    <td>10/10/2016</td>
                    <td>2.198,74</td>
                  </tr>
                  <tr>
                    <td><Checkbox defaultValue={true} /></td>
                    <td>07/11/2016</td>
                    <td>3.572,96</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td colSpan="2">Total das Parcelas: R$ 3.572,96</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Grid>
        </form>
      </div>
    );
  }
}

export default App;
