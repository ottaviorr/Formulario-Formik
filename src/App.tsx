import './App.css'
import { useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      tel: ""
    }, onSubmit: (value) => {
      console.log(value)
    }
  })

  return (
    <>

      <h1>Formulário - Formik</h1>

      <form onSubmit={formik.handleSubmit}>

        <div>
          <label>Nome:</label>
          <input placeholder="Seu nome..." className="input" type="text" name='nome' value={formik.values.nome} onChange={formik.handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input placeholder="Seu email..." className="input" type="text" name='email' value={formik.values.email} onChange={formik.handleChange} />
        </div>

        <div>
          <label>Telefone:</label>
          <input placeholder="Seu telefone..." className="input" type="text" name='tel' value={formik.values.tel} onChange={formik.handleChange} />
        </div>

        <button type='submit'>Salvar</button>

      </form>

    </>
  )
}

export default App
