const allClear = document.querySelector("[data-all-clear]")
const del = document.querySelector("[data-delete]")
const operators = document.querySelectorAll("[data-operation]")
const numbers = document.querySelectorAll("[data-number]")
const equals = document.querySelector("[data-equals]")
const previousOutput = document.querySelector("[data-previous-operand]")
const currentOutput = document.querySelector("[data-current-operand]")

class Calculator {
    constructor(){
        this.currentInput = ""
        this.previousInput = 0
        this.operator = "" 
        this.numberClick()
        this.allClearClick()
        this.clearButton()
    }

    clearDisplay() {
        currentOutput.innerText = 0
        previousOutput.innerText = 0
        this.currentInput = ""
        this.previousInput = 0
    }

    deleteSingle() {
        if (this.currentInput.length === 1 || this.currentInput.length === 0) {
            this.currentInput = ""
            currentOutput.innerText = 0
        } else {
            const currentInputString = this.currentInput.toString()
            const newInputString = currentInputString.slice(0, -1)
            this.currentInput = newInputString
            this.updateDisplay()
        }
    }

    updateDisplay() {
        currentOutput.innerText = this.currentInput
        previousOutput.innerText = this.previousInput
    }

    changeInput(number) {
        if (this.currentInput === "0" || this.currentInput === "-0") {
            this.currentInput = number
        } else {
            this.currentInput += number
        }

        this.updateDisplay()
    }

    numberClick() {
        numbers.forEach((number) => {
            number.addEventListener("click", () => {
            this.changeInput(number.innerText)
        })
        })
    }  

    allClearClick() {
        allClear.addEventListener("click", () => {
            this.clearDisplay()
        })
    }

    clearButton() {
        del.addEventListener("click", () => {
            this.deleteSingle()
        })
    }
}


const calculator = new Calculator();