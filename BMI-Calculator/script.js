const form = document.querySelector('form')
// This usecase will give you Empty.
// const height = parseInt(document.querySelector('#Height').value)

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#Height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if (height === '' || height < 0 || isNaN(height) ){
        result.innerHTML = `Please give a valid Height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight) ){
        result.innerHTML = `Please give a valig Height ${weight}`;
    }else{
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2)  // tofixed means less numbers
        // show the result
        result.innerHTML = `<span>${bmi}</span>`
        // if (result <= 18.6 ) {
        //     result.innerHTML = `<span>${bmi} (Your Under Weight.)</span>`
        // }
        // if(result > 18.6 || result <= 24.9){
        //     result.innerHTML = `<span>${bmi} (Your Normal Weight.)</span>`
        // }
        // if(result > 24.9){
        //     result.innerHTML = `<span>${bmi} (Your Over Weight.)</span>`
        // }
    }
});