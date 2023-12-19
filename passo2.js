// Validação de Dados para a Coleção de Usuários
db.createCollection("Users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome", "email", "senha"],
      properties: {
        nome: {
          bsonType: "string",
          description: "nome é obrigatório e deve ser uma string"
        },
        email: {
          bsonType: "string",
          description: "email é obrigatório e deve ser uma string"
        },
        senha: {
          bsonType: "string",
          description: "senha é obrigatório e deve ser uma string"
        },
        tarefas: {
          bsonType: "array",
          description: "tarefas deve ser um array"
        }
      }
    }
  }
});

// Validação de Dados para a Coleção de Tarefas
db.createCollection("Tasks", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["titulo", "descricao", "data_inicio", "data_vencimento", "prioridade", "status_atual", "usuario"],
      properties: {
        titulo: {
          bsonType: "string",
          description: "titulo é obrigatório e deve ser uma string"
        },
        descricao: {
          bsonType: "string",
          description: "descricao é obrigatório e deve ser uma string"
        },
        data_inicio: {
          bsonType: "date",
          description: "data_inicio é obrigatório e deve ser uma data"
        },
        data_vencimento: {
          bsonType: "date",
          description: "data_vencimento é obrigatório e deve ser uma data"
        },
        prioridade: {
          bsonType: "string",
          description: "prioridade é obrigatório e deve ser uma string"
        },
        status_atual: {
          bsonType: "string",
          description: "status_atual é obrigatório e deve ser uma string"
        },
        usuario: {
          bsonType: "objectId",
          description: "usuario é obrigatório e deve ser um objectId"
        },
        tarefa_relacionada: {
          bsonType: "objectId",
          description: "tarefa_relacionada deve ser um objectId"
        }
      }
    }
  }
});

// Validação de Dados para a Coleção de Projetos
db.createCollection("Projects", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome", "data_inicio", "data_fim", "tarefas"],
      properties: {
        nome: {
          bsonType: "string",
          description: "nome é obrigatório e deve ser uma string"
        },
        data_inicio: {
          bsonType: "date",
          description: "data_inicio é obrigatório e deve ser uma data"
        },
        data_fim: {
          bsonType: "date",
          description: "data_fim é obrigatório e deve ser uma data"
        },
        tarefas: {
          bsonType: "array",
          description: "tarefas é obrigatório e deve ser um array"
        }
      }
    }
  }
});