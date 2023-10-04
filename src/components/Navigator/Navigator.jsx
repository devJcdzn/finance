import './Navigator.scss';

const Navigator = () => {
  return (
    <section>
      <div className="navigator-container">
        <ul className="navs">
          <li><a href="#">A contatar</a></li>
          <li><a href="#">Em curso</a></li>
          <li><a href="#">Fechado</a></li>
          <li><a href="#">Concluídos</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Navigator