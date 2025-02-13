// Aquí se definen las estructuras reutilizables en Swagger

module.exports = {
    components: {
        schemas: {
            Task: {
                type: "object",
                properties: {
                    _id: { type: "string", description: "ID de la tarea" },
                    title: { type: "string", description: "Título de la tarea" },
                    completed: { type: "boolean", description: "Estado de la tarea" },
                }
            }
        }
    }
};
