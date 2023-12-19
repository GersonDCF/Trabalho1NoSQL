// Inserção de documentos na coleção de Usuários
db.Users.insertOne({
  nome: "João",
  email: "joao@email.com",
  senha: "senha123",
  tarefas: [] // Um array para armazenar as tarefas
});

db.Users.insertOne({
  nome: "Maria",
  email: "maria@email.com",
  senha: "senha456",
  tarefas: []
});

db.Users.insertOne({
  nome: "Carlos",
  email: "carlos@email.com",
  senha: "senha789",
  tarefas: []
});

// Inserção de documentos na coleção de Tarefas
db.Tasks.insertOne({
  titulo: "Tarefa 1",
  descricao: "Descrição da Tarefa 1",
  data_inicio: new Date("2023-10-10"),
  data_vencimento: new Date("2023-10-20"),
  prioridade: "Alta",
  status_atual: "To-do",
  usuario: ObjectId("id_do_usuario"),
  tarefa_relacionada: ObjectId("id_da_tarefa_relacionada")
});

db.Tasks.insertOne({
  titulo: "Tarefa 2",
  descricao: "Descrição da Tarefa 2",
  data_inicio: new Date("2023-10-11"),
  data_vencimento: new Date("2023-10-21"),
  prioridade: "Média",
  status_atual: "In-Progress",
  usuario: ObjectId("id_do_usuario"),
  tarefa_relacionada: ObjectId("id_da_tarefa_1")
});

db.Tasks.insertOne({
  titulo: "Tarefa 3",
  descricao: "Descrição da Tarefa 3",
  data_inicio: new Date("2023-10-12"),
  data_vencimento: new Date("2023-10-22"),
  prioridade: "Baixa",
  status_atual: "Complete",
  usuario: ObjectId("id_do_usuario"),
  tarefa_relacionada: ObjectId("id_da_tarefa_2")
});

// Inserção de documentos na coleção de Projetos
db.Projects.insertOne({
  nome: "Projeto 1",
  data_inicio: new Date("2023-10-01"),
  data_fim: new Date("2023-12-01"),
  tarefas: [ObjectId("id_da_tarefa_1"), ObjectId("id_da_tarefa_2")]
});

db.Projects.insertOne({
  nome: "Projeto 2",
  data_inicio: new Date("2023-10-02"),
  data_fim: new Date("2023-12-02"),
  tarefas: [ObjectId("id_da_tarefa_2"), ObjectId("id_da_tarefa_3")]
});

db.Projects.insertOne({
  nome: "Projeto 3",
  data_inicio: new Date("2023-10-03"),
  data_fim: new Date("2023-12-03"),
  tarefas: [ObjectId("id_da_tarefa_3"), ObjectId("id_da_tarefa_1")]
});

// Consulta de todas as tarefas
db.Tasks.find({});

// Consulta de tarefas com o status "To-do"
db.Tasks.find({ status_atual: "To-do" });

// Consulta de tarefas de um usuário com o status "To-do"
db.Tasks.find({ usuario: ObjectId("id_do_usuario"), status_atual: "To-do" });

// Consulta de tarefas com o prazo de entrega vencido
db.Tasks.find({ data_vencimento: { $lt: new Date() } });

// Consulta de todos os usuários
db.Users.find({});

// Consulta de todos os projetos
db.Projects.find({});

// Consulta de tarefas de um projeto específico
db.Tasks.find({ projeto: ObjectId("id_do_projeto") });

// Consulta de tarefas de um projeto específico com o status "To-do"
db.Tasks.find({ projeto: ObjectId("id_do_projeto"), status_atual: "To-do" });

// Consulta de tarefas de um usuário específico
db.Tasks.find({ usuario: ObjectId("id_do_usuario") });

// Consulta de tarefas de um usuário específico com o status "To-do"
db.Tasks.find({ usuario: ObjectId("id_do_usuario"), status_atual: "To-do" });

// Consulta de tarefas de um usuário específico com o prazo de entrega vencido
db.Tasks.find({ usuario: ObjectId("id_do_usuario"), data_vencimento: { $lt: new Date() } });