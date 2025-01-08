import { MongoClient } from "mongodb";

const mongoURI = process.env.URI_MONGODB;

const cliente = new MongoClient(mongoURI);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection('usuarios');

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
