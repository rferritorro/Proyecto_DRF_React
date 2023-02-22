import React, {useState} from "react";
import './About.css'
import Modal from '../../components/Modal/Modal'

const About = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="aboutPage">
            <div className="image_place">
                <img onClick={()=> setShow(1)} className="imglogoabout" src="logo_biosbike.png" />
            </div>
            <div class="row info">
                <div class="col-4 layer">
                    <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                    <a class="list-group-item list-group-item-action" id="list-stations-list" data-toggle="list" href="#list-stations" role="tab" aria-controls="stations">Stations</a>
                    <a class="list-group-item list-group-item-action" id="list-history-list" data-toggle="list" href="#list-history" role="tab" aria-controls="history">history</a>
                    </div>
                </div>
                <div class="col-8 text">
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                        Es la parte principal de la página web, la primera que se muestra, en ella tenemos los componentes de
                        Carrousel encargado de mostrar un bucle de las mismas imagenes y Categories, encargado de mostrar información
                        al cliente de los porcentajes de uso de nuestros equipos
                    </div>
                    <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                        Es tu perfil, podrás ver tus datos personificados y tus notificaciones de cualquier incidencia,
                        notificación de reserva y conrtestaciones del administrador
                    </div>
                    <div class="tab-pane fade" id="list-stations" role="tabpanel" aria-labelledby="list-stations-list">
                        Aqui podrás encontrar todas nuestras instalaciones, para poder realziar una reserva deberá logearse primero.Una
                        vez logeado podrá reservar en cualquier estación donde haya una bici disponible
                    </div>
                    <div class="tab-pane fade" id="list-history" role="tabpanel" aria-labelledby="list-history-list">
                        Aqui podrás encontrar el historial de tus reservas, de donde la alquilaste y donde finalizaste tu reserva
                    </div>
                    </div>
                </div>
            </div>
            <Modal onClose={() => setShow(false)} show={show}/>
        </div>
    )
};

export default About