import db from '../../db.json';

export default function dbHandler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }
  response.setHeader('Access-control-Allow-Credentials', true);
  response.setHeader('Access-control-Allow-Origin', '*');
  response.setHeader('Access-control-Allow-Methods', 'GET,OPTIONS,PATCH,DELET,POST,PUSH');
  response.json(db);
}
