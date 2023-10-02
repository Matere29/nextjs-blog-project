const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Rorisang',
        mongodb_password: 'lJyPKf9nQOwJU2iZ',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  // If not in the development phase, use production values
  return {
    env: {
      mongodb_username: 'Rorisang',
      mongodb_password: 'lJyPKf9nQOwJU2iZ',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
