import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validación con Yup
const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),
  message: Yup.string().required('El mensaje es obligatorio'),
});

const ContactForm = () => {

  // Función de envío de datos (solo muestra en consola)
  // const handleSubmit = (values: { name: string; email: string; message: string }) => {
  //   console.log('Formulario enviado con los siguientes datos:');
  //   console.log(values);
  // };

  const handleSubmit = async (values: { name: string; email: string; message: string }) => {
    try {
      const response = await fetch('/api/route.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <article>
      <div className="flex flex-row justify-center">
        <h1 className="font-bold text-4xl mb-10">Contáctame</h1>
      </div>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}  
      >
        {({ isSubmitting }) => (
          <Form id="contactForm" className="contact-form flex flex-col gap-4 p-4 max-w-xl mx-auto">
            <div className="form-group flex flex-col">
              <label htmlFor="name" className="text-white mb-2">Nombre y Apellido</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Facundo Pettersson"
                className="input-field py-2 px-2 rounded-md text-black "
              />
              <ErrorMessage name="name" component="span" className="error text-red-500" />
            </div>

            <div className="form-group flex flex-col">
              <label htmlFor="email" className="text-white mb-2">Correo electrónico</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                className="input-field py-2 px-2 rounded-md text-black"
              />
              <ErrorMessage name="email" component="span" className="error text-red-500" />
            </div>

            <div className="form-group flex flex-col">
              <label htmlFor="message" className="text-white mb-2">Mensaje</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="input-field h-32 text-black pl-2 py-1 resize-none rounded-md"
              />
              <ErrorMessage name="message" component="span" className="error text-red-500" />
            </div>

            <div className="flex flex-row justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black px-4 py-2 border border-white w-1/3 rounded-md hover:scale-105 duration-500 hover:bg-green-600"
              >
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </article>
  );
};

export default ContactForm;
