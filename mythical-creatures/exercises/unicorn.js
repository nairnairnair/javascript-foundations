class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  //console.log(constructor)
  isWhite() {
    if (this.color === 'white') {
      return true
    } else {
return false
    }

    }
    says(words) {
      return '**;* ' + words + ' *;**'
  }
}

module.exports = Unicorn;
