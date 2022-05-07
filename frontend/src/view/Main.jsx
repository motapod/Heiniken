import React, { Component } from "react";
import { Link } from "react-router-dom";
import { host } from '../backend';

class Main extends Component {
    state = {
        rowsPerPage: 50,
        page: 0,
        userList: [],
        questions: [],
        answers: [],
        actual: 0,  
        mail: "",
        phone: "",
        name: "",
        actual_a: '',
        actual_b: '',
        actual_c: '',
        actual_d: '',
        correct : 0,
        press: false,
        terms: false,
        edad: null,
        data: []
    };





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
        //pasos a seguir, si es false tira el que debe ser mayor

        //si es true debe mandar el aceptar (cuando lo clike manda al next si no se queda ahi o con volver)

        // else de lo demas donde se mandan los datos y las preguntas con respuestas 
    }


    componentWillMount() {
        fetch(host + "/getQuestion", {
            method: "GET",
            headers: {
            },
        }) // subtipos

            .then((response) => response.json())
            .then((json) => {
                var datos = [];
                console.log("json", json.data)
                var element = (
                    <div>
                        <div>
                            <p>¿Eres mayor de edad?</p>
                        </div>
                        <div>
                            <button>

                            </button>
                            <button>

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
                <div>
                    <img src="../../assets/fondo.jpg">
                                       
                    </img>
                    {this.state.data}   
                </div>
        );
    }
}


export default Main;