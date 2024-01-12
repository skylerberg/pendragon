let character = {
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
  Object.assign(character.personalData, data);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('character', JSON.stringify(character));
}

function getFromLocalStorage() {
  // TODO update the input elements so that page starts with the right values
  return JSON.parse(localStorage.getItem('character'));
}

function loadCharacter() {
  character = getFromLocalStorage();
  document.getElementById('name').value = character.personalData.name;
  document.getElementById('age').value = character.personalData.age;
  //document.getElementById('sonNumber').value = character.personalData.sonNumber;
  document.getElementById('homeland').value = character.personalData.homeland;
  document.getElementById('culture_dropdown').value = character.personalData.culture;
  //document.getElementById('religion').value = character.personalData.religion;
  //document.getElementById('lord').value = character.personalData.lord;
  //document.getElementById('currentClass').value = character.personalData.currentClass;
  //document.getElementById('currentHome').value = character.personalData.currentHome;
}



// data structure
// save to file
// load from file
// setters
// save to local storage
