// components/GoogleSheetsAuth.js
import { useEffect, useState } from 'react';

const CLIENT_ID = '666943166275-4ijgaqkthn5t5635v71ngbn09ip6ucg1.apps.googleusercontent.com';
const API_KEY = 'AIzaSyADNDWq5AoEqy0OZI15QV6uDfUDRui-4Ro';
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

export default function GoogleSheetsAuth() {
  const [gapiLoaded, setGapiLoaded] = useState(false);
  const [gisLoaded, setGisLoaded] = useState(false);
  const [tokenClient, setTokenClient] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [content, setContent] = useState('');

  // Load GAPI and GIS libraries
  useEffect(() => {
    const loadScripts = () => {
      const gapiScript = document.createElement('script');
      gapiScript.src = 'https://apis.google.com/js/api.js';
      gapiScript.onload = () => setGapiLoaded(true);
      document.body.appendChild(gapiScript);

      const gisScript = document.createElement('script');
      gisScript.src = 'https://accounts.google.com/gsi/client';
      gisScript.onload = () => setGisLoaded(true);
      document.body.appendChild(gisScript);
    };

    loadScripts();
  }, []);

  useEffect(() => {
    if (gapiLoaded) {
      window.gapi.load('client', initializeGapiClient);
    }
    if (gisLoaded) {
      setTokenClient(
        window.google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: handleAuthResponse,
        })
      );
    }
  }, [gapiLoaded, gisLoaded]);

  const initializeGapiClient = async () => {
    await window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
  };

  const handleAuthResponse = async (response) => {
    if (response.error) throw response;
    setIsAuthorized(true);
    await listMajors();
  };

  const handleAuthClick = () => {
    if (window.gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      tokenClient.requestAccessToken({ prompt: '' });
    }
  };

  const handleSignoutClick = () => {
    const token = window.gapi.client.getToken();
    if (token) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
      setIsAuthorized(false);
      setContent('');
    }
  };

  const listMajors = async () => {
    try {
      const response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
        range: 'Class Data!A2:E',
      });
      const range = response.result;
      if (!range || !range.values || range.values.length === 0) {
        setContent('No values found.');
      } else {
        const output = range.values.reduce(
          (str, row) => `${str}${row[0]}, ${row[4]}\n`,
          'Name, Major:\n'
        );
        setContent(output);
      }
    } catch (err) {
      setContent(err.message);
    }
  };

  return (
    <div>
      <h2>Contact Form with Google Sheets Authorization</h2>
      <button onClick={handleAuthClick} style={{ display: isAuthorized ? 'none' : 'inline' }}>
        Autorizar
      </button>
      <button onClick={handleSignoutClick} style={{ display: isAuthorized ? 'inline' : 'none' }}>
        Cerrar sesión
      </button>
      <pre>{content}</pre>
    </div>
  );
}
