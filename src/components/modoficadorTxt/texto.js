import "../modoficadorTxt/texto.css"

const Texto = ({text, cor}) => {
    return(
        <div className="txt">
            <p className="txt__p" style={{color:cor}}>{text.toUpperCase()} </p>
        </div>
    );
}

export default Texto;