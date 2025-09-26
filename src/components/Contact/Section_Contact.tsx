// pages/contact.js
import GoogleSheetsAuth from '../../app/api/GoogleSheetsAuth';


export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl'>Formulario de Contacto</h1>
      <form className='flex flex-col justify-center  w-1/3 mt-10 mb-10 gap-y-4'>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor="name" className=''>Nombre y Apellido</label>
          <input type="text" id="name" className='outline-none p-1 rounded-md text-black' name="name" required />
        </div>

        <div className='flex flex-col gap-y-2'>
          <label htmlFor="email">Correo Electronico</label>
          <input type="email" className='outline-none p-1 rounded-md text-black' id="email" name="email" required />
        </div>

        <div className='flex flex-col gap-y-2'>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" className='outline-none p-1 rounded-md text-black' required></textarea>
        </div>

        <div className='flex flex-row justify-center'>
          <button className=' border border-gray-200 rounded-lg p-1 duration-200 transition-all hover:bg-red-500 w-1/3 text-center' type="submit">Enviar</button>

        </div>
      </form>

      <GoogleSheetsAuth />
    </div>
  );
}


