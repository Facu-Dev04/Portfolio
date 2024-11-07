
export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
      }
  
      try {
        
        console.log('Nuevo mensaje de contacto recibido:');
        console.log(`Nombre: ${name}`);
        console.log(`Correo: ${email}`);
        console.log(`Mensaje: ${message}`);
  
        return res.status(200).json({ message: 'Gracias por ponerte en contacto, nos comunicaremos pronto.' });
      } catch (error) {
        console.error('Error al procesar el contacto:', error);
        return res.status(500).json({ message: 'Hubo un error al procesar tu solicitud.' });
      }
    } else {
      // Si la solicitud no es un POST, respondemos con un error 405
      return res.status(405).json({ message: 'Método no permitido' });
    }
  }
  