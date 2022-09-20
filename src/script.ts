class SystemError {
  public message: string;
  public type: string;

  constructor (message: string, type: string) {
    this.message = message;
    this.type = type;
  }
}

console.log('Será que vai dar erro?');

try {
  console.log('Antes do erro!');
  throw new SystemError ('Erro que eu mesmo gerei', 'Abstrato');
  console.log('Depois do erro!');
} catch (error) {
  if (error instanceof SystemError) {
    console.log(`${error.type}: ${error.message}`);
  } else {
    console.log(`Error: ${error.message}`);
  }
}

console.log('Acabou!!!');
