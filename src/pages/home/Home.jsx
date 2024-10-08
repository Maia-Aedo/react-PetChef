import './Home.css';
import { Form } from '../../components/form/Form';

export const Home = () => {
    return (
        <>
            <section className="home-main">
                <div className="home-main-text">
                    <h1>Recetas deliciosas y saludables para tus mascotas</h1>
                    <p>Descubre las mejores recetas para mantener a tus amigos peludos felices y saludables.</p>
                    <a href="#about" className="btn">Saber más</a>
                </div>
            </section>

            {/* Sección About */}
            <section id="about" className="home-about">
                <h2>Comida saludable para mascotas</h2>
                <p>Conoce sobre comida que fácilmente puedes realizar en casa, llena de nutrientes, y
                    vitaminas que los ayudarán a mantenerse activo y felices.</p>
            </section>

            {/* Sección de Cards de recetas  */}
            <section className="recipes-section">
                <h2>Recetas Destacadas</h2>
                <div className="card-container">
                    <div className="card">
                        <img src="https://i.pinimg.com/236x/00/7f/af/007faf928ab08b3895d2ab4751908c4d.jpg" alt="Receta 1"></img>
                        <h3>Galletas de Calabaza</h3>
                        <p>Perfectas para perros con digestión sensible.</p>
                        <button>Ver receta</button>
                    </div>
                    <div className="card">
                        <img src="https://wakyma.com/blog/wp-content/uploads/2017/10/Recetas-caseras-f%C3%A1ciles-de-comida-para-perros" alt="Receta 2"></img>
                        <h3>Pollo con Verduras</h3>
                        <p>Una comida completa y equilibrada para perros y gatos.</p>
                        <button>Ver receta</button>
                    </div>
                    <div className="card">
                        <img src="https://i.pinimg.com/564x/4b/58/0c/4b580c63dc8512d70e7855cdb76be6e7.jpg" alt="Receta 3"></img>
                        <h3>Gomitas de Frutilla</h3>
                        <p>Una opción de snack ideal para que los amigos de 4 patas disfruten en el verano.</p>
                        <button>Ver receta</button>
                    </div>
                </div>
            </section>
            {/* Sección de Contacto */}
            <Form/>
            {/* Parallax Section */}
            <section className="home-parallax">
                <div className="home-parallax-text">
                    <h2>Comida es amor</h2>
                    <p>Ofrecerle a tus mascotas la mejor nutrición es uno de los más grandes regalos que puedes hacer.</p>
                </div>
            </section>
        </>
    )
}
