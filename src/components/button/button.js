import '../button/button.css'

const alertar = (label) =>{
    alert(`A label desse botão é: "${label}"`)
}

const Button = ({label}) => {
    return (
        <button className="btn" onClick={()=> {alertar(label)}}> {label} </button>
    );
}

export default Button;