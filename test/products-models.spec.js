//jshint esversion:6
const chai = require('chai');
const expect = chai.expect;


Products = require('../db/products');



describe('Products tests', function () {
  const products = new Products();

  it('should add a new product to the collection', function () {
    let result = products.post('Blade Runner', 'DVD');
    expect(result).to.have('id');
  });

  it('get product by id', function() {
    let foundProduct = products.find(3);
    expect(foundProduct.id).to.equal(3);
  });
});