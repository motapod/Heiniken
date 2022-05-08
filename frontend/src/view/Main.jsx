import React, { Component } from "react";
import { Link } from "react-router-dom";
import { host } from '../backend';
import background from "../assets/fondo.jpg";
class Main extends Component {
    
    state = {
        rowsPerPage: 50,
        page: 0,
        userList: [],
        questions: [],
        answers: [],
        actual: 0,
        mail:  null,
        phone:  null,
        name: null,
        actual_a: '',
        actual_b: '',
        actual_c: '',
        actual_d: '',
        id: '',
        correct: 0,
        press: false,
        terms: false,
        edad: null,
        data: []
    };

    updateName(evt){
        const val = evt.target.value;
        this.setState({
            name: val
          });
    }
    updateMail(evt){
        const val = evt.target.value;
        this.setState({
            mail: val
          });
    }
    handleChange(arg){
        console.log("arg", arg)
        this.setState({
            press: true
        });
        this.handleNext(arg)
    }
    updatePhone(evt){
        const val = evt.target.value;
        this.setState({
            phone: val
          });
    }
    getBadgeColor = (role) => {
        switch (role) {
            case "developer":
                return "primary";

            case "manager":
                return "success";

            case "designer":
                return "warning";

            default:
                return "primary";
        }
    };


    handleNext = (arg) => {
        console.log(arg)
        if (arg == -1) {
            var datos = [];
            var element = (
                <div style={{ alignContent: 'end', marginTop: '68vh', marginLeft: '10vh', position: 'absolute' }}>
                    <div >
                        <text style={{ fontFamily: 'Futura Medium Condensed BT', color: '#ffec00', fontSize: 28, textAlign: 'center', marginLeft: '13vh' }}>LO SIENTO</text>

                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px', marginLeft: '5vh', width: '300px' }}>
                        <text style={{ fontFamily: 'Futura Bold Condensed BT', color: 'white', fontSize: 24 }}>Solo mayores de edad tienen acceso a este juego</text>
                    </div>
                    <div style={{ marginTop: '40px', marginLeft: '13vh' }}>
                        <button style={{ width: '140px', height: '60px', color: 'white' }} value={0} onClick={e => this.handleNext(e.target.value)}>
                            <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>Volver</text>
                        </button>
                    </div>
                </div>
            );
            datos.push(element);
            this.setState({
                data: datos,
            });
        } else if (arg == 0) {
            var datos = [];
            var element = (

                <div style={{ alignContent: 'end', marginTop: '70vh', marginLeft: '10vh', position: 'relative', overflow: 'auto', display: 'inline-block' }}>
                    <div >
                        <text style={{ fontFamily: 'Futura Medium Condensed BT', color: 'white', fontSize: 28, textAlign: 'center', marginLeft: '7vh' }}>¿Eres mayor de edad?</text>
                    </div>
                    <div style={{ marginTop: '40px' }}>
                        <button style={{ width: '140px', height: '60px', color: 'white' }} value={1} onClick={e => this.handleNext(e.target.value)}>
                            <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>Si</text>
                        </button>
                        <button style={{ width: '140px', height: '60px', color: 'white', marginLeft: '100px' }} value={-1} onClick={e => this.handleNext(e.target.value)}>
                            <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>No</text>
                        </button>
                    </div>
                </div>
            );
            datos.push(element);


            this.setState({
                data: datos
            });
        }else if( arg == 1){
            var datos = [];
            var element = (
                <form>
                <div style={{ alignContent: 'end', marginTop: '68vh', marginLeft: '15vh', position: 'absolute' }}>
                    <div >                       
                        <input 
                        type="text" 
                        required
                        name="name" 
                        placeholder="NOMBRE"  
                        style={{placeholderTextColor:'#007743',fontFamily: 'Futura Medium Condensed BT', color: '#007743', fontSize: 24, textAlign: 'left'}}
                        onChange = {evt => this.updateName(evt)} />
                    </div>
                    <div >                       
                        <input 
                        type="text" 
                        required
                        name="mail" 
                        placeholder="MAIL"  
                        style={{placeholderTextColor:'#007743', fontFamily: 'Futura Medium Condensed BT', color: '#007743', fontSize: 24, textAlign: 'left'}}
                        onChange = {evt => this.updateMail(evt)} />
                    </div>
                    <div >                       
                        <input 
                        type="text" 
                        required
                        name="phone" 
                        placeholder="CELULAR"  
                        style={{placeholderTextColor:'#007743',fontFamily: 'Futura Medium Condensed BT', color: '#007743', fontSize: 24, textAlign: 'left'}}
                        onChange = {evt => this.updatePhone(evt)} />
                    </div>
                    <div style={{ marginTop: '40px', marginLeft: '8vh' }}>
                        <button type="submit" style={{ width: '140px', height: '60px', color: 'white' }} value={4}  onClick={e => this.handleForm(e.target.value)}>
                            <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>ENVIAR</text>
                        </button>
                    </div>
                </div>
                </form>
            );
            datos.push(element);
            this.setState({
                data: datos,
            });
           
        }else if(arg == 2){
            var datos = [];
            var element = (
                <div style={{ alignContent: 'end', marginTop: '68vh', marginLeft: '10vh', position: 'absolute' }}>
                    <div >
                        <text style={{ fontFamily: 'Futura Medium Condensed BT', color: 'white', fontSize: 24, textAlign: 'center' }}>¿Cuánto sabes de la Champions League?</text>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px', width: '400px' }}>
                        <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#ffec00', fontSize: 24 }}>Responde esta Trivia y si aciertas a todas las preguntas estarás participando por un año gratis de Heineken</text>
                    </div>
                    <div style={{ marginTop: '40px', marginLeft: '13vh' }}>
                        <button style={{ width: '140px', height: '60px', color: 'white' }} value={6} onClick={e => this.handleNext(e.target.value)}>
                            <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>¡A JUGAR!</text>
                        </button>
                    </div>
                </div>
            );
            datos.push(element);
            this.setState({
                data: datos,
            });
        }else if(arg == 3){
            var datos = [];
            var element = (
                <div style={{ alignContent: 'end', marginTop: '68vh', marginLeft: '20vh', position: 'absolute' }}>
                    <div >
                        <text style={{ fontFamily: 'Futura Medium Condensed BT', color: 'white', fontSize: 34, textAlign: 'center' }}>¡GRACIAS!</text>

                    </div>
                    <div style={{ marginTop: '60px', marginLeft: '2vh' }}>
                        <button style={{ width: '140px', height: '60px', color: 'white' }} value={2} onClick={e => this.handleNext(e.target.value)}>
                            <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>SEGUIR</text>
                        </button>
                    </div>
                </div>
            );
            datos.push(element);
            this.setState({
                data: datos,
            });
        }else if(arg == 4){
            var datos = [];
            var element = (
                <div style={{ alignContent: 'end', marginTop: '68vh', marginLeft: '10vh', position: 'absolute' }}>
                    
                        
                    <div style={{width: '400px',  marginBottom:'10vh', position:'absolute'}}>
                    <button style={{ width: '60px', height: '60px', color: 'white'}} value={3} onClick={e => this.handleNext(e.target.value)} />
                   
                    <text style={{ fontFamily: 'Futura Medium Condensed BT',marginLeft:'2px', marginBottom:'10vh', position:'absolute', color: 'white', fontSize: 28, textAlign: 'center' }}>Acepto término y condiciones</text>
                        
                    <text style={{ fontFamily: 'Futura Medium Condensed BT', marginLeft:'4px', color: 'white', fontSize: 34 }}>de bases legales</text>
                      
                    </div>
                    
                    <div style={{ marginTop: '40px', marginLeft: '13vh' , marginTop:'10vh' }}>
                        <button style={{ width: '140px', height: '60px', color: 'white' }} value={0} onClick={e => this.handleNext(e.target.value)}>
                            <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>Volver</text>
                        </button>
                    </div>
                </div>
            );
            datos.push(element);
            this.setState({
                data: datos,
            });
        }else if(arg == 6){
            var datos = [];
            var actual = this.state.actual;
            var a = this.state.questions[actual].correct == 1 ? '#007743' : '#e20613 ';
            var b = this.state.questions[actual].correct == 2 ? '#007743' : '#e20613 ';
            var c = this.state.questions[actual].correct == 3 ? '#007743' : '#e20613 ';
            var d = this.state.questions[actual].correct == 4 ? '#007743' : '#e20613 ';
            if(this.state.colors == true){
                var element = (
                    <div style={{ alignContent: 'end', marginTop: '60vh', marginLeft: '10vh', position: 'absolute' }}>
                        <div style={{ textAlign: 'center', width: '400px' }}>
                            <text style={{ fontFamily: 'Futura Medium Condensed BT', color: 'white', fontSize: 24, textAlign: 'center' }}>{this.state.questions[actual].quest} </text>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <button style={{ width: '200px', height: '50px', backgroundColor: a, marginLeft: '-4vh' }} >
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: 'white', fontSize: 20 }}>{this.state.questions[actual].option_a} </text>
                            </button>
                            <button style={{ width: '200px', height: '50px', backgroundColor: b, color: '#007743', marginLeft: '6vh'  }} >
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: 'white', fontSize: 20 }}>{this.state.questions[actual].option_b}</text>
                            </button>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <button style={{ width: '200px', height: '50px', backgroundColor: c, color: '#007743', marginLeft: '-4vh'  }} >
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: 'white', fontSize: 20 }}>{this.state.questions[actual].option_c}</text>
                            </button>
                            <button style={{ width: '200px', height: '50px', backgroundColor: d, color: '#007743', marginLeft: '6vh'  }} >
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: 'white', fontSize: 20 }}>{this.state.questions[actual].option_d}</text>
                            </button>
                        </div>
                        <div style={{ marginTop: '40px', marginLeft: '13vh' }}>
                            <button style={{ width: '140px', backgroundColor: '#007743', height: '60px', color: 'white' }} value={actual==5? 7 : 6} onClick={e => this.handleNext(e.target.value)}>
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: 'white' , fontSize: 24 }}>Siguiente</text>
                            </button>
                        </div>
                    </div>
                );
                datos.push(element);
                this.setState({
                    data: datos,
                    actual: actual+1,
                    colors: false
                });
            }else{
                var element = (
                    <div style={{ alignContent: 'end', marginTop: '60vh', marginLeft: '10vh', position: 'absolute' }}>
                        <div style={{ textAlign: 'center', width: '400px' }}>
                            <text style={{ fontFamily: 'Futura Medium Condensed BT', color: 'white', fontSize: 24, textAlign: 'center' }}>{this.state.questions[actual].quest} </text>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <button style={{ width: '200px', height: '50px',  marginLeft: '-4vh' }} value={6} onClick={e => this.handleNext(e.target.value)}>
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 20 }}>{this.state.questions[actual].option_a} </text>
                            </button>
                            <button style={{ width: '200px', height: '50px',  color: '#007743', marginLeft: '6vh'  }} value={6} onClick={e => this.handleNext(e.target.value)}>
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 20 }}>{this.state.questions[actual].option_b}</text>
                            </button>
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <button style={{ width: '200px', height: '50px',  color: '#007743', marginLeft: '-4vh'  }} value={6} onClick={e => this.handleNext(e.target.value)}>
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 20 }}>{this.state.questions[actual].option_c}</text>
                            </button>
                            <button style={{ width: '200px', height: '50px',  color: '#007743', marginLeft: '6vh'  }} value={6} onClick={e => this.handleNext(e.target.value)}>
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 20 }}>{this.state.questions[actual].option_d}</text>
                            </button>
                        </div>
                        <div style={{ marginTop: '40px', marginLeft: '13vh' }}>
                            <button style={{ width: '140px', backgroundColor: '#007743', height: '60px', color: 'white' }}>
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: 'white' , fontSize: 24 }}>Siguiente</text>
                            </button>
                        </div>
                    </div>
                );
                datos.push(element);
                this.setState({
                    data: datos,
                    colors: true
                });
            }
            
        }else if(arg == 7){
            var datos = [];
            var actual = this.state.actual;
            var element = (
                <div style={{ alignContent: 'end', marginTop: '68vh', marginLeft: '10vh', position: 'absolute' }}>
                    <div style={{ textAlign: 'center', width: '400px' }}>
                        <text style={{ fontFamily: 'Futura Medium Condensed BT', color: 'white', fontSize: 28, textAlign: 'center' }}>Muchas gracias por participar, el sorteo se realizará para la final el día 28 de mayo</text>
                    </div>
                    <div style={{ marginTop: '40px'}}>
                        <button style={{ width: '140px', height: '60px', color: 'white' , marginLeft: '120px'}} value={8} onClick={e => this.handleFormQuest(e.target.value)}>
                            <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>Terminar</text>
                        </button>
                    </div>
                </div>
            );
            datos.push(element);
            this.setState({
                data: datos,
            });
        }
        //pasos a seguir, si es false tira el que debe ser mayor

        //si es true debe mandar el aceptar (cuando lo clike manda al next si no se queda ahi o con volver)

        // else de lo demas donde se mandan los datos y las preguntas con respuestas 
    }

    handleForm(arg){
        console.log("entre")
        fetch(host + "/addUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.state.name,
              mail: this.state.mail,
              phone: this.state.phone
            }),
          }) 
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    id: json.data[0].id,
                });
            })
            this.handleNext(4);
    }
    handleFormQuest(arg){
        console.log("entre")
        fetch(host + "/addAnswers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: this.state.id,  
              answers_questions: this.state.questions,
              marked: this.state.answers,
              correct: this.state.questions
            }),
          }) 
            .then((response) => response.json())
            .then((json) => {
            })
            this.handleNext(8);
    }
    componentWillMount() {
        fetch(host + "/getQuestion", {
            method: "GET",
            headers: {
            },
        }) 

            .then((response) => response.json())
            .then((json) => {
                var datos = [];
                console.log("json", json.data)
                var element = (

                    <div style={{ alignContent: 'end', marginTop: '70vh', marginLeft: '10vh', position: 'relative', overflow: 'auto', display: 'inline-block' }}>
                        <div >
                            <text style={{ fontFamily: 'Futura Medium Condensed BT', color: 'white', fontSize: 28, textAlign: 'center', marginLeft: '7vh' }}>¿Eres mayor de edad?</text>
                        </div>
                        <div style={{ marginTop: '40px' }}>
                            <button style={{ width: '140px', height: '60px', color: 'white' }} value={1 } onClick={e => this.handleNext(e.target.value)}>
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>Si</text>
                            </button>
                            <button style={{ width: '140px', height: '60px', color: 'white', marginLeft: '100px' }} value={-1} onClick={e => this.handleNext(e.target.value)}>
                                <text style={{ fontFamily: 'Futura Bold Condensed BT', color: '#007743', fontSize: 24 }}>No</text>
                            </button>
                        </div>
                    </div>
                );
                datos.push(element);


                this.setState({
                    data: datos,
                    questions: json.data,
                });

            })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{
                backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', position: 'absolute', overflow: 'hidden',
                width: '100%', height: '100vh', backgroundSize: 'contain', alignContent: ' center'
            }}>
                {this.state.data}
            </div>
        );
    }
}


export default Main;