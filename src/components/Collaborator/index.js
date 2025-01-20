import './index.css';

const Collaborator = ({name, pet, image, bColor}) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{backgroundColor: bColor}}> 
                <img src={image || '/imgs/default-icon.jpg'} alt="foto de perfil do colaborador"></img>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>Nome do pet: {pet}</h5>
            </div>
        </div>
    )
}

export default Collaborator;