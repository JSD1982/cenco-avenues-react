const isDesa = process.env.NODE_ENV === "development";

export const apiRoute = {
  apiPath: isDesa ? "http://localhost:3005/result" : "http://avenidasestrategicas.cencosud.corp/api/avenues/lists",
};


export const apiFilePath = {
    apiPath: isDesa ? "http://qa-avenidas-estrategicas.cencosud.corp/api" : "http://avenidasestrategicas.cencosud.corp/api",
  };



//route
//http://qa-avenidas-estrategicas.cencosud.corp/api
//http://avenidasestrategicas.cencosud.corp/api
//endpoint
////http://qa-avenidas-estrategicas.cencosud.corp/api/avenues/lists
//http://avenidasestrategicas.cencosud.corp/api/avenues/lists