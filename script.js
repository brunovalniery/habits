const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) //adiciona algo que vai ficar ouvindo um evento (click)
form.addEventListener("change", save)

function add() {
  //usada quando o evento for acionado

  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluído!")
    return
  }

  alert("Adicionado com sucesso!")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem[("NLWSetup@Habits", JSON.stringify(nlwSetup.data))]
}

/*
const data = {
  gym: [
    "01-09",
    "01-10",
    "01-11",
    "01-12",
    "01-13",
    "01-16",
    "01-17",
    "01-18",
    "01-19",
    "01-20",
    "01-21",
  ],
  read: ["01-01", "01-02"],
  water: ["01-01", "01-02", "01-03"],
}
*/
const data = JSON.parse(localStorage.getItem("NLWSetup@Habits")) || {}

nlwSetup.setData(data) //espera um objeto
nlwSetup.load()

/*
imprimir data de hoje
const date = new Date()
alert(date)
*/
