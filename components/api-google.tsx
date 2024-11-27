import { google } from 'googleapis';

export async function getUsers() {
  // Autenticación con las credenciales
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });

  // Crear cliente de hojas de cálculo
  const sheets = google.sheets({ version: 'v4', auth });

  // Leer datos de la hoja
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Usuarios!A2:E' // Ajusta el rango según tu hoja
  });

  return response.data.values;
}