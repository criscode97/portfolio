import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import "./contact.scss";

function Contact(){
    return (
        <section>
            <div className="box">
                <div className='bar'>
                    <a href="https://github.com/criscode97" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/cristopher-soto-870106224/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="mailto:info@criscodes.dev" target="_blank" rel="noopener noreferrer">
                        <FaRegEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
