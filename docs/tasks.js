// Aquí se documentan los endpoints de tareas 

module.exports = {
    paths: {
        "/tasks": {
            get: {
                summary: "Obtener todas las tareas",
                responses: {
                    200: { description: "Lista de tareas" }
                }
            }
        }
    }
};
