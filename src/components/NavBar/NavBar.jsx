import './navbar.scss';

function NavBar(){
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#mainpage" className='name'>
                        Cristopher Soto 
                    </a>
                </div>
                <div className='right'>
                    <div className='titles'>
                    <a href="#aboutme">
                        About Me
                    </a>
                    <a href="#projects">
                        Projects 
                    </a>
                    <a href="#resume">
                        Resume
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;