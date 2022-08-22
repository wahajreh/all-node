const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const key = 'dd3863ad4906d8cd1038ed28b03078cd';
const iv = '45363582b197d74713f78ce31f251f67bf5f9b3eafdd99448ff81e25b5317672';

//Encrypting text
function encrypt(text) {
    var cipher = crypto.createCipher('aes-256-cbc', 'd6F3Efeq')
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;;
}

// Decrypting text
function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

module.exports = {
    encrypt, decrypt
}