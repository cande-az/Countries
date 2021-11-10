const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));

    describe('nombre', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({nombre: 13})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ nombre: 'Argentina' });
      });
    });

    describe('id', () => {
      it('should throw an error if id is null', (done) => {
        Country.create({id: '2f5'})
          .then(() => done(new Error('It requires a valid id')))
          .catch(() => done());
      });
      it('should work when its a valid id', () => {
        Country.create({ id: 'ARG' });
      });
    });

    describe('imagen_de_la_bandera', () => {
      it('should throw an error if SVG Flag is null', (done) => {
        Country.create({imagen_de_la_bandera: "hola"})
          .then(() => done(new Error('It requires a valid SVG Flag url')))
          .catch(() => done());
      });
      it('should work when its a valid SVG Flag url', () => {
        Country.create({ imagen_de_la_bandera: "https://flagcdn.com/ar.svg" });
      });
    });

    describe('continente', () => {
      it('should throw an error if Continente is null', (done) => {
        Country.create({continente: null})
          .then(() => done(new Error('It requires a valid continent name')))
          .catch(() => done());
      });
      it('should work when its a valid String', () => {
        Country.create({ continente: "America" });
      });
    });

    describe('capital', () => {
      it('should throw an error if Capital is null', (done) => {
        Country.create({capital: null})
          .then(() => done(new Error('It requires a valid capital name')))
          .catch(() => done());
      });
      it('should work when its a valid SVG Flag url', () => {
        Country.create({ capital: "Buenos Aires" });
      });
    });

    describe('subregion', () => {
      it('should throw an error if subregion is null', (done) => {
        Country.create({subregion: 350})
          .then(() => done(new Error('It requires a valid String')))
          .catch(() => done());
      });
      it('should work when its a valid subregion', () => {
        Country.create({ subregion: 'No Declarada' });
      });
    });

    describe('area', () => {
      it('should throw an error if area number is null', (done) => {
        Country.create({area: "350"})
          .then(() => done(new Error('It requires a valid area number')))
          .catch(() => done());
      });
      it('should work when its empty', () => {
        Country.create({area: undefined});
      });
      it('should work when its a area number', () => {
        Country.create({ area: 2946294});
      });
    });

    describe('poblacion', () => {
      it('should throw an error if poblation number is null', (done) => {
        Country.create({poblacion: null})
          .then(() => done(new Error('It requires a valid poblation number')))
          .catch(() => done());
      });
      it('should work when its a valid poblation number', () => {
        Country.create({ poblacion: 409824 });
      });
    });

    describe('coordenadas', () => {
      it('should throw an error if coordenadas is null', (done) => {
        Country.create({coordenadas: null})
          .then(() => done(new Error('It requires a valid SVG Flag url')))
          .catch(() => done());
      });
      it('should work when valid coordenadas', () => {
        Country.create({ coordenadas: [ -34,
        -64] })
        .catch((e) => done(e));
      });
    });

  });
});
