import './Clients.scss';
import { clientData } from './ClientData';
import Navigator from '../../components/Navigator/Navigator';
import ClientForm from '../../components/ClientForm/ClientForm';
import { useState } from 'react';

const Clients = () => {
  const [clientForm, setClientForm] = useState(false);

  const handleClient = () => {
    setClientForm(!clientForm);
  }
  
  return (
    <section>
      <div className="client-container">
        <Navigator />
        <div className="add-client">
          <button onClick={handleClient}>+</button>
        </div>
        <div className="content">
          <ul>
            {clientData.map((item, index) => {
              return (
                <li key={index} className='client'>
                  <h2>{item.nome}</h2>
                  <div className="status">
                    <span>{item.contato}</span>
                    <span>{item.status}</span>
                    <span>{item.nicho}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {clientForm ? <ClientForm active = {setClientForm} /> : ''}
    </section>
  )
}

export default Clients