import './index.css';

const Input = (props) => {
    const whenTyped = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className='input'>
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;