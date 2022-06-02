class CustomError extends Error {
  constructor(mensagem, status) {
    super(mensagem);
    this.status = status;
  }
}

module.exports = { CustomError };