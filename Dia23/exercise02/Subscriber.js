export class Subscriber {
  constructor(email) {
    this.email = email;
    this.articles = [];
  }
  receive(article) {
    this.articles.push(article);
    console.log(`El suscriptor ${this.email} ha recibido el articulo: ${article.title}`)
  }
}