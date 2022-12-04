const prompt = require("prompt-sync")();
const Diretor = require("./models/diretor");
const Gerente = require("./models/gerente");
const Presidente = require("./models/presidente");
const Supervisor = require("./models/supervisor");

const gestor = prompt("Qual seu cargo?");
var valorCompra = prompt("Valor da compra?");

switch (gestor) {
  case "gerente":
    const gerente = new Gerente(1000, "gerente", "Diretor");
    console.log(processaCompra(gerente.limite, valorCompra));
    break;
  case "supervisor":
    const supervisor = new Supervisor(1200, "supervisor", "gerente");
    console.log(processaCompra(supervisor.limite, valorCompra));
    break;

  case "diretor":
    const diretor = new Diretor(1500, "diretor", "presidente");
    console.log(processaCompra(diretor.limite, valorCompra));
  case "presidente":
    const presidente = new Presidente(2000, "presidente", "presidente");
    console.log(processaCompra(presidente.limite, valorCompra));
  default:
}

function processaCompra(limite, valorCompra , gestor) {
    console.log(gestor)
  if (valorCompra > limite) {
    return "Ultrapassou o limite";
    //chamar instancia do superior verificar com o luquinhas
  } else {
    return `Compra aprovada resta um limite de ${limite - valorCompra}`;
  }
}
