import './index.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <ul>
                    <li>
                        <a>
                         <img src='/imgs/ig.png' alt='logo instagram'></img>
                        </a>
                    </li>
                    <li>
                        <a>
                         <img src='/imgs/fb.png' alt='logo facebook'></img>
                        </a>
                    </li>
                    <li>
                        <a>
                         <img src='/imgs/tw.png' alt='logo twitter'></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='logo-organo'>
                <img src='/imgs/logo-petpaws.png' alt='logo organo'></img>
            </div>
            <div className='footer-text'>
                <p>Desenvolvido por Gabriel Rocha Lopes</p>
            </div>
        </footer>
    )
}

export default Footer;