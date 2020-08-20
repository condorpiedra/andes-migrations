# Uso básico de migraciones de mongo

## Instalación
````bash
$ npm install 
````

### Crear un nuevo script
Ejecutar ````npm run create [description]```` command.

Por ejemplo:
````bash
$ npm run create mpi-paciente
Created: src/20200820151404-mpi/paciente.js
````


Se crea un nuevo archivo en el directorio src:
````javascript
module.exports = {
  up(db, client) {
    // TODO write your migration here. Return a Promise (and/or use async & await).

  },

  down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
  }
};
````

Edite el archivo e ingrese las operaciones necesarias para ejecutar las modificaciones.  No olvide utilizar transacciones

### Verifique el estado de los scripts

````bash
$ npm run status
┌─────────────────────────────────────────┬────────────┐
│ Filename                                │ Applied At │
├─────────────────────────────────────────┼────────────┤
│  20200820160254-mpi-paciente.js         │ PENDING    │
└─────────────────────────────────────────┴────────────┘

````


### Migrate up
This command will apply all pending migrations
````bash
$ npm run up
MIGRATED UP:  20200820160254-mpi-paciente.js
````
