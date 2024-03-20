const { Schema, model } = require('mongoose');

const businessSchema = new Schema({
    name: String,
    description: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    website: String,
    logo: String,
    business_category: String,
    business_status: String,
    business_type: String,
 });

const Business = model('business', businessSchema);
Business.createCollection();

module.exports = Business;
