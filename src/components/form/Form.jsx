import './Form.css';

export const Form = () => {
    return (
        <>
            <div id="home-form-container">
                <form id='home-form'>
                    <h2 className='home-form-title'>Envíanos tu mensaje!</h2>
                    <input type="text" id="home-input" placeholder='Ingresa tu nombre' />
                    <input type="password" id="home-input" placeholder='Ingresa tu email' />
                    <textarea rows={4} name="message" id="home-textarea" type="text" placeholder='Escribe tu mensaje'></textarea>
                    <button className='home-submit' type='button'>Enviar</button>
                </form>
            </div>
        </>
    )
}

