import './Home.scss';
import { TfiMore } from 'react-icons/tfi';
import { AiOutlineCheck } from 'react-icons/ai';
import { GiConvergenceTarget } from 'react-icons/gi';
import { BiTransferAlt } from 'react-icons/bi';
import { BsPlay } from 'react-icons/bs';
import { IoStatsChartOutline } from 'react-icons/io5';
import { GrMoney } from 'react-icons/gr';

const Home = () => {
  return (
    <section className="home-container">
      <div className="container">
        <div className="cards-stats">
          <div className="card initialized">
            <div className="title-card">
              <BsPlay className='card-icon' />
              <h2 className="title">A começar</h2>
            </div>
            <span className="counter">12 projetos</span>
            <p className="max-date">20-12-2024</p>
          </div>
          <div className="card running">
            <div className="title-card">
              <BiTransferAlt className='card-icon' />
              <h2 className="title">Em processo</h2>
            </div>
            <span className="counter">12 projetos</span>
            <p className="max-date">20-12-2024</p>
          </div>
          <div className="card finished">
            <div className="title-card">
              <AiOutlineCheck className='card-icon' />
              <h2 className="title">Finalizado</h2>
            </div>
            <span className="counter">12 projetos</span>
            <p className="max-date">20-12-2024</p>
          </div>
        </div>
        <div className="stats">
          <div className="left-stats">
            <div className="target-card">
              <div className="title-area">
                <div className="title">
                  <GiConvergenceTarget className='target-icon' />
                  <h2>Meta Diária</h2>
                </div>
                <div className="setting">
                  <TfiMore className='settings-icon' />
                </div>
              </div>
              <div className="target-info">
                <h2>20 pessoas</h2>
                <div className="info-target">
                  <span>30 dias</span>
                  <p>sem alteração</p>
                </div>
              </div>
            </div>

            <div className="current-card">
              <div className="title-area">
                <div className="title">
                  <GrMoney className='current-icon' />
                  <h2>Alcance</h2>
                </div>
                <div className="setting">
                  <TfiMore className='settings-icon' />
                </div>
              </div>
              <div className="current-info">
                <h2>10 pessoas</h2>
                <div className="info-current">
                  <span>Faltam 10</span>
                  <p>pra alcançar a meta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-stats">
            <div className="box-stats">
              <div className="title-area">
                <div className="title">
                  <IoStatsChartOutline className='box-icon'/>
                  <h2>Estatísticas simples</h2>
                </div>
                <div className="setting">
                <TfiMore className='settings-icon' />
                </div>
              </div>
              <div className="content-area">
                <div className="succes-media">
                  <span>Contatos aceitos(%)</span>
                  <h2>15%</h2>
                </div>
                <div className="fee-media">
                  <span>Contratos por mês(pessoas)</span>
                  <h2>5/400</h2>
                </div>
                <div className="current">
                  <span>Faturamento mensal(k)</span>
                  <h2>5k</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home