// Alterar quem será o usuário responsável pela tarefa
db.Tasks.updateOne(
  { _id: ObjectId("id_da_tarefa_1") },
  { $set: { usuario: ObjectId("novo_id_do_usuario") } }
);

// Dilatar o prazo de entrega da tarefa
db.Tasks.updateOne(
  { _id: ObjectId("id_da_tarefa_1") },
  { $set: { data_vencimento: new Date("2023-11-30") } }
);

// Mudar o status de “In Progress” para “Complete”
db.Tasks.updateOne(
  { _id: ObjectId("id_da_tarefa_1") },
  { $set: { status_atual: "Complete" } }
);

// Adicionar uma nova tarefa a um projeto
db.Projects.updateOne(
  { _id: ObjectId("id_do_projeto") },
  { $push: { tarefas: ObjectId("id_da_tarefa_3") } }
);

// Remover uma tarefa de um projeto
db.Projects.updateOne(
  { _id: ObjectId("id_do_projeto") },
  { $pull: { tarefas: ObjectId("id_da_tarefa_2") } }
);
