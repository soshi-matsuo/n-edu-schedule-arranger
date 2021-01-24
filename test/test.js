const request = require('supertest');
const app = require('../app');
const passportStub = require('passport-stub');

describe('/login', () => {
    before(() => {
        passportStub.install(app);
        passportStub.login({ username: 'testuser' });
    });

    after(() => {
        passportStub.logout();
        passportStub.uninstall(app);
    });

    it('ログイン用のリンクが含まれる', done => {
        request(app)
            .get('/login')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(/<a href="\/auth\/github"/)
            .expect(200, done);
    });

    it('ログイン時はユーザ名が表示される', done => {
        request(app)
            .get('/login')
            .expect(/testuser/)
            .expect(200, done);
    });
});

describe('/logout', () => {
    it('ログアウト時に/へリダイレクトされる', done => {
        request(app)
            .get('/logout')
            .expect('Location', '/')
            .expect(302, done);
    });
});