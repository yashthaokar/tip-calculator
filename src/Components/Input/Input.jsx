import style from '../Input/Input.module.css';
const Input = (props) => {
    return (
        <div className={style.Input} >
            <h3> ENTER YOUR BILL AMOUNT </h3>

            <div>
                <input className={style.inputtext1}type="text" placeholder="$" style={{ width: '45%' }}  onChange={props.changeHandler1}/>
            </div>
            <hr />

            <div>
                <h4>HOW WAS THE SERVICE</h4>
               
            <select name="experience" id="select"  onChange={props.changeHandler2}>
                <option value="20">excellent</option>
                <option value="10">good </option>
                <option value="5">normal</option>
            </select>

                <br />
                <hr />
                <input className={style.inputtext2} type="text" placeholder="type here  customer name"  onChange={props.changeHandler3}/>

                <button type="button" className="btn btn-warning" onClick={props.onClickHandler}>ADD NAME </button>

            </div>
        </div>
    );
};
export default Input;