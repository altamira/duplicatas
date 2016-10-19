
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
  Checkbox,
  Tooltip
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

var clientId = 'mqtt_' + (1+Math.random()*4294967295).toString(16);

import mqtt from 'mqtt/lib/connect';

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
      ],
      messages: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentWillMount() {
    var opts = {
      host: 'ws://192.168.0.1', //'test.mosquitto.org'
      port: 61614,
      protocol: 'ws',
      qos: 0,
      retain: false,
      clean: true,
      keepAlive: 30, // 30 sec.
      clientId: 'mqtt_' + (1+Math.random()*4294967295).toString(16)
    }

    var host = 'ws://192.168.0.1:61614';
    this.client = mqtt.connect(host, {clientId: 'mqtt_' + (1+Math.random()*4294967295).toString(16)});

    this.client.on('connect', function() {
      this.client.subscribe("duplicata/inserir");
      this.client.subscribe("duplicata/gravar");
      this.client.subscribe("duplicata/excluir");
      this.client.subscribe("duplicata/imprimir");
      this.client.subscribe("duplicata/listar");
      this.client.subscribe("duplicata/busca");
      this.client.subscribe("duplicata/calcular");
    }.bind(this));

    
    this.client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      //this.client.end()
    }.bind(this))


    /*
    // this is an "echo" websocket service for testing pusposes
    this.connection = new WebSocket('wss://echo.websocket.org');
    // listen to onmessage event
    this.connection.onmessage = evt => { 
      // add the new message to state
        this.setState({
        messages : this.state.messages.concat([ evt.data ])
      })
    };

    // for testing: sending a message to the echo service every 2 seconds, 
    // the service sends it right back
    setInterval( _ =>{
      this.connection.send( Math.random() )
    }, 2000 )
    */
  }

  componentWillUnmount() {
      this.client.end();
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
      <Row>
        
          <Col md={1} />
          <Col md={10} >

            <Panel header={'Cadastro de Duplicadas'} bsStyle="primary" >


                <Row style={{borderBottom: 'solid', borderBottomWidth: 1, borderBottomColor: '#337ab7', paddingBottom: 20}}>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Cadastrar uma Nova Duplicata</Tooltip>)}
                    >
                        <Button
                          bsSize="large"
                          disabled={!canSave}
                          onClick={!canSave ? this.handleClick : null}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="plus" />
                          <div><span>Novo</span></div>
                        </Button>
                    </OverlayTrigger>

                  </Col>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Salvar as Alterações</Tooltip>)}
                    >

                        <Button
                          bsSize="large"
                          disabled={!canSave}
                          onClick={!canSave ? this.handleClick : null}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="floppy-disk" />
                          <div><span>Gravar</span></div>
                        </Button>

                    </OverlayTrigger>

                  </Col>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Imprimir Espelho desta Duplicata</Tooltip>)}
                    >

                        <Button
                          bsSize="large"
                          disabled={!canSave}
                          onClick={!canSave ? this.handleClick : null}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="print" />
                          <div><span>Imprimir</span></div>
                        </Button>

                    </OverlayTrigger>

                  </Col>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Calcular Datas das Parcelas</Tooltip>)}
                    >

                        <Button
                          bsSize="large"
                          onClick={!canSave ? this.handleClick : null}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="calendar" />
                          <div><span>Calcular</span></div>
                        </Button>

                    </OverlayTrigger>

                  </Col>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Consultar Duplicatas</Tooltip>)}
                    >

                        <Button
                          bsSize="large"
                          onClick={!canSave ? this.handleClick : null}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="search" />
                          <div><span>Buscar</span></div>
                        </Button>

                    </OverlayTrigger>

                  </Col>
                  <Col xs={6} md={2} >

                    <OverlayTrigger 
                      placement="top" 
                      overlay={(<Tooltip id="tooltip">Excluir esta Duplicata</Tooltip>)}
                    >
                        <Button
                          bsSize="large"
                          onClick={!canSave ? this.handleClick : null}
                          style={{width: 100}}
                        >
                          <Glyphicon glyph="trash" />
                          <div><span>Excluir</span></div>
                        </Button>

                    </OverlayTrigger>

                  </Col>
                </Row>

                <Row style={{paddingTop: 20}} >
                  <Col xs={12} md={2}>Número</Col>
                  <Col xs={12} md={2}>
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" defaultValue="216558" />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={2}>Emissão</Col>
                  <Col xs={12} md={2}>
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      {/*<FormControl type="text" defaultValue="10/10/2016" />*/}
                      {/*<FormControl.Feedback />*/}
                      <DatePicker value={this.state.value} onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={2}>Entrega</Col>
                  <Col xs={12} md={2}>
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      {/*<FormControl type="text" defaultValue="10/10/2016" />*/}
                      {/*<FormControl.Feedback />*/}
                      <DatePicker value={this.state.value} onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={2}>Pedido</Col>
                  <Col xs={12} md={2}>
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" defaultValue="74655" />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={1}>CNPJ/CPF</Col>
                  <Col xs={12} md={3}>
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" defaultValue="63.394.915/0001-62" />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                  <Col xs={12} md={2}>Representante</Col>
                  <Col xs={12} md={2}>
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" defaultValue="001" />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={2}>Razão Social</Col>
                  <Col xs={12} md={10}>
                    <FormGroup controlId="formValidationSuccess2" validationState="success">
                      {/*<ControlLabel>Input with success and feedback icon</ControlLabel>*/}
                      <FormControl type="text" defaultValue="ALEGRIA NA VIDA AGROINDUSTRIAL LTDA" />
                      <FormControl.Feedback />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={12}>
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
                  </Col>
                </Row>
           

            </Panel>

          </Col>
          <Col md={1} />

        </Row>
      
    );
  }
}

export default App;
