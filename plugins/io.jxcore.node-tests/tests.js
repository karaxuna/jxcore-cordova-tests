exports.defineAutoTests = function() {
    describe('Starting jxcore', function () {
        it('jxcore should be defined', function () {
            expect(jxcore).toBeDefined();
        });

        it('should get ready', function (done) {
            jxcore.isReady(function() {
                expect(1).toBe(1);
                done();
            });
        });

        it('should load main file', function (done) {
            jxcore('app.js').loadMainFile(function(result, err) {
                expect(err).toBe(null);
                done();
            });
        });

        it('should call serverFunction', function (done) {
            jxcore('serverFunction').call('foo', function (result, err) {
                expect(err).toBe(null);
                expect(result).toBe('foo bar');
                done();
            });
        });
    });

};
