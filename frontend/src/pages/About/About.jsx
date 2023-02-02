import React, {useState} from "react";
import './About.css'
import Modal from '../../components/Modal/Modal'

const About = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="aboutPage">
            <h1>ABOUT</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada magna ante, tincidunt laoreet lectus venenatis eget. In in diam eu lorem molestie lacinia. Vestibulum sed neque metus. In accumsan at quam eu porttitor. Maecenas a ullamcorper metus. Ut purus neque, cursus nec leo sit amet, placerat pretium nulla. Nunc vestibulum eleifend diam, in cursus nulla ullamcorper eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas et finibus nisi, quis malesuada leo. Donec gravida dui eget bibendum finibus. Integer vitae mauris in metus placerat feugiat vitae at sapien. Mauris et justo ut augue congue tincidunt. Aenean non auctor risus.

In aliquam imperdiet pharetra. Aliquam imperdiet nunc augue, eu sodales urna facilisis id. Curabitur et lacus at tortor faucibus sagittis non non mi. Phasellus malesuada feugiat ultricies. Donec sed finibus quam. Morbi eget tempus mauris. Aenean in egestas urna, sed lobortis felis.

Etiam et leo scelerisque, laoreet turpis sed, lobortis quam. Maecenas eu ipsum at justo elementum finibus ut vel tellus. Aenean vitae sapien rhoncus, vestibulum massa ac, viverra risus. Ut a dolor convallis, ultrices urna non, dapibus tellus. Mauris ac maximus purus. Nullam lobortis euismod laoreet. Vestibulum iaculis metus non sem volutpat, a pretium urna faucibus.

Mauris ornare urna est, eu faucibus eros facilisis nec. Fusce eget porta elit, a aliquet urna. Suspendisse fringilla justo eu ante eleifend, aliquet porta sem facilisis. Fusce sagittis tortor nec fringilla volutpat. Nam iaculis id eros a dapibus. Nunc nec tempus purus, rutrum faucibus nisl. Maecenas placerat turpis at lectus tempor accumsan. Nunc nibh ligula, mattis sit amet neque eu, tristique congue arcu.

Praesent a lacus aliquam, feugiat lacus eu, dictum lorem. Nam volutpat libero non est iaculis volutpat. Proin fermentum posuere diam at tincidunt. Nulla tempor velit sem, eu porttitor purus porta et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed tincidunt ex. Quisque in tortor volutpat diam fringilla ultrices dignissim tempor diam. Aenean blandit id purus sit amet pellentesque. Vestibulum molestie est vel porttitor vestibulum. Vivamus molestie iaculis gravida.
            <p></p><strong>Our logo:</strong><br></br>
            <img onClick={()=> setShow(1)} className="imglogoabout" src="logo_biosbike.png" />
            <Modal onClose={() => setShow(false)} show={show}/>
        </div>
    )
};

export default About