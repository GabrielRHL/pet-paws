import { useState } from 'react';
import Button from '../Button';
import DropDown from '../DropDown';
import Input from '../Input';
import './index.css';

const Form = (props) => {
    const [name, setName] = useState('')
    const [pet, setPet] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.newCollaborator({name, pet, image, team})
        setName('')
        setPet('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os seus dados</h2>
                <Input value={name} whenChanged={value => setName(value)} required={true} label="Nome" placeholder="Digite o seu nome" />
                <Input value={pet} whenChanged={value => setPet(value)} required={true} label="Nome do pet" placeholder="Digite o nome do seu pet" />
                <Input value={image} whenChanged={value => setImage(value)} label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropDown value={team} whenChanged={value => setTeam(value)} required={true} label="Pet" itens={props.teams}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form;