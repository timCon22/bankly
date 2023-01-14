"use strict"

class timeWords {
    
    //Converts the number to a string of words

    async convert(num){
        let convNum = String(num).split('').map(Number)
        convNum.splice(2,1)
        this.newNum(convNum)
    }

    // number to string converter
    async newNum(convNum){
        
        let firstDigts = []
        let lastDigts = []
        let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
        let tens = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty']
        let first = convNum.slice(0,1)
        let second = convNum.slice(1,2)
        let third = convNum.slice(2,3)
        let fourth = convNum.slice(3,4)
        let ampm = []
        let time = [firstDigts, lastDigts]

        
        if(first[0] * 10 + second[0] < 12){
            ampm.push('am')
        } else {
            ampm.push('pm')
        }
        
        
        if(first[0] === 0 && second[0] === 0){
            firstDigts.push('twelve')
        }
        
        if(fourth === third){
            for(let i = 0; i < 10; i++){
                if(third === i){
                    lastDigts.push(tens[i])
                }
                if(fourth === i){
                    lastDigts.push(ones[i])
                }
            }
        }
        
        
        if(first[0] === 1 || third[0] === 1){
            for(let i = 0; i < 10; i++){
                if(first[0] === i){
                    firstDigts.push(ones[i])
                }
                if(second[0] === i){
                    firstDigts.push(ones[i + 10])
                    firstDigts.splice(0,1)
                }
                if(third[0] === i){
                    lastDigts.push(tens[i])
                }
                if(fourth[0] === i){
                    lastDigts.push(ones[i])
                }
            }
        }
        
        
        if(first[0] !== 1 || third[0] !== 1){
            for(let i = 0; i < 10; i++){
                if(first[0] === i){
                    firstDigts.push(ones[i])
                }
                if(second[0] === i){
                    firstDigts.push(ones[i])
                }
                if(third[0] === i){
                    lastDigts.push(tens[i])
                    lastDigts.pop()
                }
                if(fourth[0] === i){
                    lastDigts.push(ones[i])
                    lastDigts.pop()
                }
            }
        }
        
        
        if(firstDigts[0].length > 1){
            firstDigts.pop()
            firstDigts.pop()
        }
        
        console.log(time, ampm)
    }
    
}

module.exports = new timeWords