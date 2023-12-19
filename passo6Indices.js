// Criação de índices para campos frequentemente usados
db.Tasks.createIndex({ status_atual: 1 });
db.Tasks.createIndex({ data_inicio: 1 });

db.Projects.createIndex({ status_atual: 1 });
db.Projects.createIndex({ data_inicio: 1 });

// Depois da indexação, você pode usar o comando `db.collection.stats()` novamente para ver a diferença
db.Tasks.stats();