import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { Faqs } from './pages/faqs/Faqs';
import { Contact } from './pages/contact/Contact';
import { Login } from './pages/login/Login';
import { Recipes } from './pages/recipes/recipes';
import { PaymentPage } from './pages/payment/Payment';
import { PaymentsList } from './pages/payment/PaymentsList';


import './index.css'
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

const App = () => (
    <div>
        <Navbar />
        <Routes>
            {/* Establecemos rutas */}
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/preguntas-frecuentes" element={<Faqs />} />
            <Route path="/preguntas" element={<Faqs />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recetas" element={<Recipes />} />
            <Route path="/pagar-suscripcion" element={<PaymentPage />} />
            <Route path="/mis-pagos" element={<PaymentsList/>} />
        </Routes>
        <Footer />
    </div>
);

export default App;