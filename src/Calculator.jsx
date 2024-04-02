import React,{ useState } from 'react';
import './Calculator.css'

function Calculator() {
    const [displayValue, setDisplayValue] = useState('');

    function handleButtonClick(value) {
        setDisplayValue(displayValue + value);
    }

    function handleClear() {
        setDisplayValue('');
    }

    function handleDelete() {
        setDisplayValue(displayValue.slice(0, -1));
    }

    function handleEquals() {
        try {
            const result = eval(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    }

    return (
        <div className="container">
            <div className="calculator">
                <form>
                    <div className="display">
                        <input type="text" name="display" value={displayValue} id="display" />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={handleClear}  class="color"/>
                        <input type="button" value="DE" onClick={handleDelete} class="color" />
                        <input type="button" value="." onClick={() => handleButtonClick('.')}  class="color"/>
                        <input type="button" value="/" onClick={() => handleButtonClick('/')}  class="color"/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={() => handleButtonClick('7')} />
                        <input type="button" value="8" onClick={() => handleButtonClick('8')} />
                        <input type="button" value="9" onClick={() => handleButtonClick('9')} />
                        <input type="button" value="*" onClick={() => handleButtonClick('*')}  class="color"/>
                    </div>
                    <div>
                        <input type="button" value="6" onClick={() => handleButtonClick('6')} />
                        <input type="button" value="5" onClick={() => handleButtonClick('5')} />
                        <input type="button" value="4" onClick={() => handleButtonClick('4')} />
                        <input type="button" value="-" onClick={() => handleButtonClick('-')} class="color" />
                    </div>
                    <div>
                        <input type="button" value="3" onClick={() => handleButtonClick('3')} />
                        <input type="button" value="2" onClick={() => handleButtonClick('2')} />
                        <input type="button" value="1" onClick={() => handleButtonClick('1')} />
                        <input type="button" value="+" onClick={() => handleButtonClick('+')}  class="color"/>
                    </div>
                    <div>
                        <input type="button" value="00" onClick={() => handleButtonClick('00')} />
                        <input type="button" value="0" onClick={() => handleButtonClick('0')} />
                        <input type="button" value="=" onClick={handleEquals} class="color"  id="equal"/>
                        {/* <input type="button" value="=" id="equal" class="color" /> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Calculator;
