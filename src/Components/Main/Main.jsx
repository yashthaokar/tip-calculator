import style from "../Main/Main.module.css";
import React, { useState } from "react";
import Input from "../Input/Input";
import Output from "../Output/Output";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = () => {
 
  const defaultShowcase = "Plese add customer's Name. . . !";
  const [amount, setAmount] = useState("");   // amount
  const [service, setService] = useState("");  // service
  const [addName, setAddName] = useState("");  // adding name
  const [listUpDate, setListUpDate] = useState([]); // adding list into output.
  const [lastCalculate, setLastCalculate]= useState(''); // this is use for final calculate.

  //  this is use in input text for customer name.
  const changeHandler3 = (event) => {
    setAddName(event.target.value);
    console.log(amount);
  };

  // this is use for select item of input
  const changeHandler2 = (event) => {
    setService(event.target.value);
    console.log(service);
  };

  // this is use for amount of input
  const changeHandler1 = (event) => {
    setAmount (event.target.value);
    console.log(addName);
  };
  // this is use for button of input to addName
  const onClickHandler = (event) => {
    const ob = {
      amount:  amount ,
      service:  service ,
      name:  addName ,
      
    };

    setListUpDate([...listUpDate, ob]); // stelistupdate value.


    let  tip = Number(service)/100 * amount;  // function for add with amount offer the customer name
    console.log(tip);
    ob.tipgiven = tip;
    console.log(listUpDate);
  };

  const calculateHandler=()=>{
     let tip = Number(service)/100 * amount; 
     setLastCalculate(Number(lastCalculate)+tip);
     

  };

  return (
    <div className={style.main}>
      <Navbar />
      <br />
      <Input
        changeHandler1={changeHandler1}
        changeHandler2={changeHandler2}
        changeHandler3={changeHandler3}
        onClickHandler={onClickHandler}
      />
      <br />

      <Output  listUpDate={listUpDate} calculateHandler={calculateHandler} lastCalculate={lastCalculate} />
      <br />
      <Footer />
    </div>
  );
};
export default Main;
