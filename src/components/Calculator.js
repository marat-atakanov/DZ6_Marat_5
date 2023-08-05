import {useDispatch, useSelector} from "react-redux";
import {add, subtract, multiply, divide} from "../store/calculatorSlice";
import {useState} from "react";

export default function Calculator() {
    const dispatch = useDispatch()
    const {result} = useSelector(state => state.calculatorReducer)
    const [firstValue, setFirstValue] = useState("")
    const [secondValue, setSecondValue] = useState("")
    const [error, setError] = useState("")
    const handleClick = (e) => {
        if (firstValue !== "" && secondValue !== "") {
            switch (e.target.value) {
                case "+": dispatch(add({firstValue: firstValue, secondValue: secondValue}))
                    break;
                case "-": dispatch(subtract({firstValue: firstValue, secondValue: secondValue}))
                    break;
                case "*": dispatch(multiply({firstValue: firstValue, secondValue: secondValue}))
                    break;
                case "/": dispatch(divide({firstValue: firstValue, secondValue: secondValue}))
                    break;
                default:
                    break
            }
        } else {
            setError("Заполните все поля")
        }

    }

    const changeFirstValue = (e) => {
        setFirstValue(e.target.value)
        setError('')
    }

    const changeSecondValue = (e) => {
        setSecondValue(e.target.value)
        setError('')
    }

    return (
        <>
            <div>
                <input type="text" value={firstValue} onChange={changeFirstValue}/>
                <input type="text" value={secondValue} onChange={changeSecondValue}/>
            </div>
            <div>
                <button onClick={handleClick} value={"+"}>+</button>
                <button onClick={handleClick} value={"-"}>-</button>
                <button onClick={handleClick} value={"*"}>*</button>
                <button onClick={handleClick} value={"/"}>/</button>
            </div>
            <h1>{result}</h1>
            <h2>{error}</h2>
        </>
    )
}