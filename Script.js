const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click',add)
form.addEventListener("change",save)

function add( ) {

    const today = new Date().toLocaleDateString('fr').slice(0,-5)
    //const today ="24/01"
    const dayExists = nlwSetup.dayExists(today)

    if( dayExists) {

        alert("Jour déjà inclus ❌")
        return
    }

    alert('Inclus ✅')


    nlwSetup.addDay(today)


}

function save() {
    localStorage.setItem('nlwHabitsPT',JSON.stringify(nlwSetup.data))
}

  
 const data = JSON.parse(localStorage.getItem("nlwHabitsPT")) || {}

nlwSetup.setData(data)
nlwSetup.load()