import Collaborator from '../Collaborator';
import './index.css';

const Team = (props) => {
    return (
        props.collaborators.length > 0 && <section className='team' style={{backgroundColor: props.pColor}}>
            <h3 style={{borderColor: props.sColor}}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator key={collaborator.name} name={collaborator.name} pet={collaborator.pet} image={collaborator.image} bColor={props.sColor} />)}
            </div>
        </section>
    )
}

export default Team;