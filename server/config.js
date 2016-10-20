exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    (process.env.NODE_ENV === 'production' ?
        'mongodb://localhost/veggies/' :
        'mongodb://localhost/veggies/dev');
exports.PORT = 8000 || process.env.PORT;
// const HOST = process.env.HOST
exports.HOST = process.env.HOST
