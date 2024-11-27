import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function addToSheet(email: string, password: string) {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ email, password, timestamp: new Date().toISOString() });
    return true;
  } catch (error) {
    console.error('Error adding to sheet:', error);
    return false;
  }
}