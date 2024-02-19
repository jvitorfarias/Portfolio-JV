import './index.css'

export default function ProjectList(props) {
  return(
    <div id="card">
      <h4 className="nome">{props.nome}</h4>
      <h5 className="description">{props.description}</h5>
    </div>
  )
}