
import { useState } from 'react';
import './style.css';

export default function Calculadora(){

    const [ operator, setOperator ] = useState('');

    const [ number1, setNumber1 ] = useState('');

    const [ number2, setNumber2 ] = useState('');

    const [ result, setResult ] = useState('');

    const handleButton = (o) => {
        console.log(o.target.id);
        setOperator(o.target.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.fisrtNumber.value);
        console.log(e.target.secondNumber.value);
        let num1 = parseInt(e.target.fisrtNumber.value);
        let num2 = parseInt(e.target.secondNumber.value);

        if ( operator === '+' ){
            console.log(num1 + num2);
            setOperator('+');
            setNumber1(num1);
            setNumber2(num2);
            setResult(num1 + num2);

        }

        if ( operator === '-' ){
            console.log(num1 - num2);
            setOperator('-');
            setNumber1(num1);
            setNumber2(num2);
            setResult(num1 - num2);
        }

        if ( operator === '*' ){
            console.log(num1 * num2);
            setOperator('*');
            setNumber1(num1);
            setNumber2(num2);
            setResult(num1 * num2);
        }

        if ( operator === '/' ){
            if ( num1 != 0 && num2 === 0 ){
                console.log('error');
                setOperator('/');
                setNumber1(num1);
                setNumber2(num2);
                setResult('error');
            }else{
                console.log(num1/num2);
                setNumber1(num1);
                setNumber2(num2);
                setResult(num1/num2);
            }
            
        }


        
    }

    return(
        <>
            <div className="calculadora">
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                        <label>First Number : </label>
                        <input name='fisrtNumber' type={'number'} placeholder={0} required></input>
                    </div>
                    <div className='inputs'> 
                        <label>Second Number : </label>   
                        <input name='secondNumber' type={'number'} placeholder={0} required></input>
                    </div>
                    
                    <div className='operators'>
                        <button type='Submit' onClick={handleButton} id={'+'}>+</button>
                        <button type='Submit' onClick={handleButton} id={'-'}>-</button>
                        <button type='Submit' onClick={handleButton} id={'*'}>*</button>
                        <button type='Submit' onClick={handleButton} id={'/'}>/</button>
                    </div>
                </form>

                <div className={ ( (number1 === '') && (number2 === '') ? 'result' : '' ) } >
                    { `${number1}  ${operator}  ${number2} = ${result}` }
                </div>
                
            </div>
        </>
    )
}