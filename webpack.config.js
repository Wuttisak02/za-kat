module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // Add other rules for TypeScript, React, etc.
      ],
    },
  };
  