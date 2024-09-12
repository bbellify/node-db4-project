const sharedConfig = {
  client: 'sqlite3',
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  // sqlite3 specific
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) =>
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done) // turn on FK enforcement
    }
}

module.exports =  {
  development: {
    ...sharedConfig,
    connection: { filename: './data/recipes.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/recipes.test.db3'}
  },
  production: {}
}