use("taskManager");

// Criação do usuário
db.Users.insertOne({
  nome: "João",
  email: "joao@email.com",
  senha: "senha123",
  tarefas: [] // Um array para armazenar as tarefas
});

// Criação da tarefa
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

// Criação do projeto
db.Projects.insertOne({
  nome: "Projeto 1",
  data_inicio: new Date("2023-10-01"),
  data_fim: new Date("2023-12-01"),
  tarefas: [ObjectId("id_da_tarefa_1"), ObjectId("id_da_tarefa_2")]
});