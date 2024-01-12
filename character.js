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

function loadFromLocalStorage() {
  character = getFromLocalStorage();
  setFormValues();
}

function setFormValues() {
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

function saveToFile() {
  var blob = new Blob([JSON.stringify(character)], { type: 'application/json' });

  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `character_${character.personalData.name}.json`;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function handleImport() {
  var file = document.getElementById('fileImport').files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      character = JSON.parse(e.target.result);
      setFormValues();
      saveToLocalStorage();
    };

    reader.readAsText(file);
  }
}
