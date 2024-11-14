// pages/api/contact.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Autenticación con Google Sheets usando OAuth 2.0
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          refresh_token: process.env.REFRESH_TOKEN,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      
      const spreadsheetId = process.env.SPREADSHEET_ID;
      const range = 'Sheet1!A:C'; // Ajusta el rango según tu hoja

      // Enviar los datos del formulario a Google Sheets
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[name, email, message]],
        },
      });

      res.status(200).json({ message: 'Mensaje enviado con éxito.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el mensaje.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
