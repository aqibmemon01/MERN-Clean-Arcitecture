const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./features/business/routes/index.js', './features/products/routes/index.js']
// const endpointsFiles = ['./routes.js']


const doc = {
  info: {
    version: '1.0.0',      // by default: '1.0.0'
    title: 'E-Commerce Learning Project',        // by default: 'REST API'
    description: 'E-Commerce learning project complete api documentation here. Salman Ahmed & Zain sheikh lets start now',  // by default: ''
  },
  host: 'localhost:4000',      // by default: 'localhost:3000'
  basePath: '/api',  // by default: '/'
  schemes: [],   // by default: ['http']
  consumes: [],  // by default: ['application/json']
  produces: [],  // by default: ['application/json']
  tags: [        // by default: empty Array
    {
      name: '',         // Tag name
      description: '',  // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {},  // by default: empty object
  definitions: {},          // by default: empty object (Swagger 2.0)
  components: {}            // by default: empty object (OpenAPI 3.x)
};


swaggerAutogen(outputFile, endpointsFiles,doc).then(() => {
    require('./index.js')
})