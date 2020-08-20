module.exports = {
  async up(db, client) {
    const session = client.startSession();
    try {
      await session.withTransaction(async () => {
        await db.collection('paciente').update({
          "tipoIdentificacion": {}
        }, {
          $set: {
            "tipoIdentificacion": null
          }
        }, {
          multi: true
        });
      });
    } finally {
      await session.endSession();
    }
  },

  async down(db, client) {
    const session = client.startSession();
    try {
      await session.withTransaction(async () => {
        await db.collection('paciente').update({
          "tipoIdentificacion": null
        }, {
          $set: {
            "tipoIdentificacion": {}
          }
        }, {
          multi: true
        });

      });
    } finally {
      await session.endSession();
    }
  },
};