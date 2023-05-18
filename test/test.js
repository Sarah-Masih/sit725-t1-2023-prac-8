let expect  = require('chai').expect;
var request = require('request');
let url = "http://localhost:3000/api/cats";
let cat = {
    title: 'title-test',
    link: 'title-test',
    path:'title-test',
    description:'title-test'
}


describe('test get all cat', function(){

    it('return status code of 200', function(done){
        request(url, function(error, response, body){

            console.log('error: ', error);
            console.log('statusCode: ', response && response.statusCode);
            console.log('body: ', body);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return successful message', function(done){
        request(url, function(error, response, body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Success');
            done();
        });
    });

    it('return an array', function(done){
        request(url, function(error, response, body){
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });

});

describe('test to post cat', function(){
    it("insert a cat to database", function(done){
        request.post({uri:url, form:cat}, function(error, response, body){
            body = JSON.parse(body);
            expect(body.message).to.contain('added');
            done();            
        });
    });
});

describe('test to delete a cat', function(){
    it("delete a cat from database", function(done){
        request.delete({uri:url, form:cat}, function(error, response, body){
            body = JSON.parse(body);
            expect(body.message).to.contain('removed');
            done();            
        });
    });
});

