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
                        <button id="card-button">Ver receta</button>
                    </div>
                    <div className="card">
                        <img src="https://wakyma.com/blog/wp-content/uploads/2017/10/Recetas-caseras-f%C3%A1ciles-de-comida-para-perros" alt="Receta 2"></img>
                        <h3>Pollo con Verduras</h3>
                        <p>Una comida completa y equilibrada para perros y gatos.</p>
                        <button id="card-button">Ver receta</button>
                    </div>
                    <div className="card">
                        <img src="https://i.pinimg.com/564x/4b/58/0c/4b580c63dc8512d70e7855cdb76be6e7.jpg" alt="Receta 3"></img>
                        <h3>Gomitas de Frutilla</h3>
                        <p>Una opción de snack ideal para que los amigos de 4 patas disfruten en el verano.</p>
                        <button id="card-button">Ver receta</button>
                    </div>
                </div>
            </section>
            {/* Sección de Suscripción */}
            <Form />
            {/* Sección de Comentarios */}
            <section id="comments-section">
                <h2>Lo que dicen nuestros usuarios</h2>
                <p>Queremos saber qué piensan nuestros usuarios sobre las recetas. Comparte tus experiencias o sugerencias para ayudar a otros amantes de mascotas.</p>

                <div className="card-comment">
                    <div id="comment-image" className="image1"></div>
                    <div className="comment-content">
                        <div className="comment-title">Laura y Rocky</div>
                        <div className="comment-descripion">
                            <p>"Hice las galletas de calabaza para mi perro Rocky, ¡y no puede dejar de pedir más! Gracias por compartir esta receta."</p>
                        </div>
                    </div>
                </div>

                <div className="card-comment">
                    <div id="comment-image" className="image2"></div>
                    <div className="comment-content">
                        <div className="comment-title">Andrea</div>
                        <div className="comment-descripion">
                            <p>"Es genial encontrar recetas tan fáciles y nutritivas para nuestras mascotas. Gracias por esta iniciativa."</p>
                        </div>
                    </div>
                </div>

                <div className="card-comment">
                    <div id="comment-image" className="image3"></div>
                    <div className="comment-content">
                        <div className="comment-title">Juan y Luna</div>
                        <div className="comment-descripion">
                            <p>"Las gomitas de frutilla fueron un éxito durante el verano. Mi gata Luna las ama."</p>
                        </div>
                    </div>
                </div>
            </section>

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
