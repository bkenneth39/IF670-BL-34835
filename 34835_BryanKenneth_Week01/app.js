const calculateBtn = document.getElementById('calc-btn')
const resetBtn = document.getElementById('reset-btn')
const heightInput = document.getElementById('height-input')
const weightInput = document.getElementById('weight-input')

const bmiResult = document.getElementById('bmi-result')
const card = document.createElement('ion-card')

const calculateBMI = () => {
    const enteredHeight = +heightInput.value/100
    const enteredWeight = +weightInput.value

    const bmi = enteredWeight / (enteredHeight * enteredHeight)
    let category = ""
    if(bmi<18.5){
        category = "Kurus"
    } else if(bmi>=8.5 && bmi<=24.9){
        category = "Normal"
    } else if(bmi>=25 && bmi<=29.9){
        category = "Gemuk"
    } else if(isNaN(bmi)){
        category = "Data not valid"
    } else {
        category = "Obesitas"
    }

   
    card.innerHTML = `
                <ion-card-header class="ion-text-center">
                    <ion-card-content id="bmi-result">${bmi}</ion-card-content>
                    <ion-card-content style="font-size: 35px;" id="bmi-category">${category}</ion-card-content>
                </ion-card-header>`
    bmiResult.append(card)
    
    console.log(bmi)

}

const resetBMI = ()=>{
    card.innerHTML = ""
   
    heightInput.value = ``
    weightInput.value = ``
}


calculateBtn.addEventListener('click',calculateBMI)
resetBtn.addEventListener('click',resetBMI);