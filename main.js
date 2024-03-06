function Pais(nome) {
  this.nome = nome;
}

function PaisAsia(nome, idioma) {
  this.idioma = idioma;

  this.dizMais = function () {
    console.log(this.nome + " diz somos a maior população:");
  };

  Pais.call(this, nome);
}

function Capital(nome, idioma, populacao) {
  this.populacao = populacao;
  PaisAsia.call(this, nome, idioma);

  this.dizSize = function () {
    console.log(this.populacao);
  };
}

const pais1 = new Pais("Japão");
const paisAsia1 = new PaisAsia("Japão", "Japones");
const capital1 = new Capital("Tóquio", "Japones", "39 milhões");

capital1.dizMais();
capital1.dizSize();

console.log(pais1 instanceof Pais);
console.log(paisAsia1 instanceof PaisAsia);
console.log(capital1 instanceof Capital);

console.log(pais1 instanceof PaisAsia);
console.log(paisAsia1 instanceof Capital);
console.log(capital1 instanceof Pais);
