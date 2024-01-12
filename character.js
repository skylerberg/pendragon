let character = getFromLocalStorage() || {
  personalData: {
    name: '',
    age: null,
    sonNumber: null,
    homeland: '',
    culture: '',
    religion: '',
    lord: '',
    currentClass: '',
    currentHome: '',
  },

  personality: {
  },

  passions: {
  },

  skills: {
    awareness: {
      value: null,
    }
  },

  equipmentCarried: {
  },

  attributes: {
    siz: null,
    dex: null,
    str: null,
    con: null,
    app: null,
  }
};

function setPersonalData(data) {
  object.assign(character.personalData, data)
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('character', JSON.stringify(character));
}

function getFromLocalStorage() {
  // TODO update the input elements so that page starts with the right values
  return JSON.parse(localStorage.getItem('character'));
}



// data structure
// save to file
// load from file
// setters
// save to local storage
