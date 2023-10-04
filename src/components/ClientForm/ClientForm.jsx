import './ClientForm.scss';

const ClientForm = ({ active }) => {
    const closeForm = () => {
        active(false);
    }

    return (
        <div className="form-container">
            <form action="" className='content'>
                <h2>Cliente</h2>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' />
                <label htmlFor="contact">Contato</label>
                <input type="text" id='contact' />
                <label htmlFor="status">Status</label>
                <select id="status">
                    <option value="">A contratar</option>
                    <option value="">Em curso</option>
                    <option value="">Fechado</option>
                    <option value="">Concluído</option>
                </select>
                <label htmlFor="nicho">Nicho</label>
                <input type="text" id='nicho' />
                <input type="submit" className='submit' />
                <button onClick={closeForm} >Cancelar</button>
            </form>
        </div>
    )
}

export default ClientForm