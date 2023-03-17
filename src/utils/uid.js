module.exports = async () => {
    const { customAlphabet } = require('nanoid');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-';
    const nanoid = customAlphabet(alphabet, 15);
    return nanoid();
  };