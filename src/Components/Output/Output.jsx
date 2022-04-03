import style from "../Output/Output.module.css";
const Output = (props) => {
  const listUpdatevalue = props.listUpDate;
  console.log(listUpdatevalue);
  return (
    <div className={style.maindiv}>
      <div className={style.output}>
        <h2 className={style.h2} >CUSTOMER'S NAME </h2>
        <div>
          <ul>
            {listUpdatevalue.map((data, index) => {
              return (
                <li className={style.li}
                  key={index}
                >{`${data.name} gave tip of ${data.tipgiven}`}</li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={style.btn}>
        <button
          type="button"
          className="btn btn-success"
          onClick={props.calculateHandler}
        >
          CALCULATE
        </button>
      </div>

      <div className={style.result}>
        <h3>Totoal number of customer's = {listUpdatevalue.length} </h3>

        <h3>Total Tip = {props.lastCalculate} </h3>
      </div>
    </div>
  );
};
export default Output;
