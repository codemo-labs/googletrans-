var sourceLangModal = document.getElementById('sourceLangModal');
var targetLangModal = document.getElementById('targetLangModal');
var selectedSourceLangSpan = document.getElementById('selected_source_language');
var selectedTargetLangSpan = document.getElementById('selected_target_language');
var sourceLangInput = document.getElementById('source_lang');
var targetLangInput = document.getElementById('target_lang');
var textInput = document.getElementById('text');
var translatedText = document.getElementById('translated_text');
var speakButton = document.getElementById('speak_button');
var copyElements = document.querySelectorAll('.copy');
var copyButton = document.getElementById('copyButton');
var successButton = document.getElementById('successButton');





function searchLanguages(inputId, modalId) {
        var searchInput = document.getElementById(inputId);
        var searchKeyword = searchInput.value.toLowerCase();
        
        var languageList = document.getElementById(modalId).getElementsByTagName('li');
        
        for (var i = 0; i < languageList.length; i++) {
            var language = languageList[i].textContent.toLowerCase();
            if (language.includes(searchKeyword)) {
                languageList[i].style.display = 'block';
            } else {
                languageList[i].style.display = 'none';
            }
        }
    }



function copy() {
  var copiedValues = [];

  for (var i = 0; i < copyElements.length; i++) {
    var value = copyElements[i].value;
    copiedValues.push(value);
  }

  var copiedString = copiedValues.join('\n');

  // Salin nilai yang disalin ke clipboard hanya jika tersedia izin
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(copiedString)
      .then(function() {
        console.log('Nilai input telah disalin ke clipboard.');
        // Sembunyikan tombol "Copy" dan tampilkan tombol "Success"
        copyButton.style.display = 'none';
        successButton.style.display = 'block';
        // Kembalikan tampilan tombol seperti semula setelah beberapa waktu (misalnya 2 detik)
        setTimeout(function() {
          copyButton.style.display = 'block';
          successButton.style.display = 'none';
        }, 2000);
      })
      .catch(function(error) {
        console.error('Gagal menyalin nilai input:', error);
      });
  } else {
    console.error('Penyalinan ke clipboard tidak didukung pada browser ini.');
  }
}

copyButton.addEventListener('click', copy);


function swapLanguages() {
    var sourceLang = sourceLangInput.value;
    var targetLang = targetLangInput.value;

    // Menukar nilai bahasa sumber dan bahasa target
    sourceLangInput.value = targetLang;
    targetLangInput.value = sourceLang;

    // Menukar teks di dalam textarea
    var sourceText = document.getElementById('text').value;
    var targetText = document.getElementById('translated_text').value;
    document.getElementById('text').value = targetText;
    document.getElementById('translated_text').value = sourceText;

    // Menampilkan nama bahasa di dalam elemen span
    selectedSourceLangSpan.textContent = getLanguageName(targetLang);
    selectedTargetLangSpan.textContent = getLanguageName(sourceLang);
  }


function openLanguageModal(type) {
  if (type === 'source') {
    targetLangModal.style.display = 'none';
    sourceLangModal.style.display = 'block';
  } else if (type === 'target') {
    sourceLangModal.style.display = 'none';
    targetLangModal.style.display = 'block';
  }
}

function selectLanguage(language, type) {
  if (type === 'source') {
    sourceLangInput.value = language;
    selectedSourceLangSpan.textContent = getLanguageName(language);
    sourceLangModal.style.display = 'none';
  } else if (type === 'target') {
    targetLangInput.value = language;
    selectedTargetLangSpan.textContent = getLanguageName(language) || 'English';    
    targetLangModal.style.display = 'none';
  }
}

function getLanguageName(language) {

   switch (language) {
      case 'en':
         return 'English';
      case 'id':
         return 'Indonesia';
      case 'jv':
         return 'Jawa';
      case 'su':
         return 'Sunda';
      case 'ja':
         return 'Jepang';
      case 'is':
         return 'Islan';
      case 'it':
         return 'Italia';
      case 'de':
         return 'Jerman';
      case 'kn':
         return 'Kannada';
      case 'ko':
         return 'Korea';
      case 'co':
         return 'Korsika';
      case 'ht':
         return 'Kreol Haiti';
      case 'kri':
         return 'Krio';
      case 'hr':
         return 'Kroat';
      case 'ku':
         return 'Kurdi (Kurmanji)';
      case 'ckb':
         return 'Kurdi (Sorani)';
      case 'lo':
         return 'Laos';
      case 'la':
         return 'Latin';
      case 'lv':
         return 'Latvia';
      case 'ln':
         return 'Lingala';
      case 'lt':
         return 'Lituania';
      case 'lg':
         return 'Luganda';
      case 'lb':
         return 'Luksemburg';
      case 'hu':
         return 'Magyar';
      case 'mai':
         return 'Maithili';
      case 'mk':
         return 'Makedonia';
      case 'mg':
         return 'Malagasi';
      case 'ml':
         return 'Malayalam';
      case 'mt':
         return 'Malta';
      case 'mi':
         return 'Maori';
      case 'mr':
         return 'Marathi';
      case 'mni':
         return 'Meiteilon (Manipuri)';
      case 'ms':
         return 'Melayu';
      case 'lus':
         return 'Mizo';
      case 'mn':
         return 'Mongol';
      case 'ne':
         return 'Nepal';
      case 'no':
         return 'Norsk';
      case 'or':
         return 'Odia (Oriya)';
      case 'om':
         return 'Oromo';
      case 'ps':
         return 'Pashto';
      case 'pl':
         return 'Polandia';
      case 'pt':
         return 'Portugis';
      case 'fr':
         return 'Prancis';
      case 'pa':
         return 'Punjabi';
      case 'qu':
         return 'Quechua';
      case 'ro':
         return 'Rumania';
      case 'ru':
         return 'Rusia';
      case 'sm':
         return 'Samoa';
      case 'sa':
         return 'Sanskerta';
      case 'nso':
         return 'Sepedi';
      case 'sr':
         return 'Serb';
      case 'st':
         return 'Sesotho';
      case 'sn':
         return 'Shona';
      case 'sd':
         return 'Sindhi';
      case 'si':
         return 'Sinhala';
      case 'sk':
         return 'Slovakia';
      case 'sl':
         return 'Slovenia';
      case 'so':
         return 'Somali';
      case 'es':
         return 'Spanyol';
      case 'sw':
         return 'Swahili';
      case 'sv':
         return 'Swensk';
      case 'tl':
         return 'Tagalog';
      case 'tg':
         return 'Tajik';
      case 'ta':
         return 'Tamil';
      case 'tt':
         return 'Tatar';
      case 'te':
         return 'Telugu';
      case 'th':
         return 'Thai';
      case 'ti':
         return 'Tigrinya';
      case 'ts':
         return 'Tsonga';
      case 'tr':
         return 'Turki';
      case 'tk':
         return 'Turkmen';
      case 'tw':
         return 'Twi';
      case 'uk':
         return 'Ukraina';
      case 'ur':
         return 'Urdu';
      case 'ug':
         return 'Uyghur';
      case 'uz':
         return 'Uzbek';
      case 'vi':
         return 'Vietnam';
      case 'cy':
         return 'Wales';
      case 'xh':
         return 'Xhosa';
      case 'yi':
         return 'Yiddi';
      case 'yo':
         return 'Yoruba';
      case 'el':
         return 'Yunani';
      case 'zu':
         return 'Zulu';
      case 'af':
         return 'Afrikans';
      case 'sq':
         return 'Albania';
      case 'am':
         return 'Amhara';
      case 'ar':
         return 'Arab';
      case 'hy':
         return 'Armenia';
      case 'as':
         return 'Assam';
      case 'ay':
         return 'Aymara';
      case 'az':
         return 'Azerbaijan';
      case 'bm':
         return 'Bambara';
      case 'eu':
         return 'Basque';
      case 'nl':
         return 'Belanda';
      case 'be':
         return 'Belarussia';
      case 'bn':
         return 'Bengali';
      case 'bho':
         return 'Bhojpuri';
      case 'bs':
         return 'Bosnia';
      case 'bg':
         return 'Bulgaria';
      case 'my':
         return 'Burma';
      case 'ceb':
         return 'Cebuano';
      case 'cs':
         return 'Ceko';
      case 'ny':
         return 'Chichewa';
      case 'zh-CN':
         return 'China (Aks. Sederhana)';
      case 'zh-TW':
         return 'China (Aks. Tradisional)';
      case 'da':
         return 'Denmark';
      case 'dv':
         return 'Divehi';
      case 'doi':
         return 'Dogri';
      case 'eo':
         return 'Esperanto';
      case 'et':
         return 'Estonia';
      case 'ee':
         return 'Ewe';
      case 'fa':
         return 'Farsi';
      case 'fi':
         return 'Finlandia';
      case 'fy':
         return 'Frisia';
      case 'gd':
         return 'Gaelig';
      case 'gd':
         return 'Gaelik Skotlandia';
      case 'gl':
         return 'Galisia';
      case 'ka':
         return 'Georgia';
      case 'gn':
         return 'Guarani';
      case 'gu':
         return 'Gujarati';
      case 'ha':
         return 'Hausa';
      case 'haw':
         return 'Hawaii';
      case 'hi':
         return 'Hindi';
      case 'hmn':
         return 'Hmong';
      case 'he':
         return 'Ibrani';
      case 'ig':
         return 'Igbo';
      case 'ilo':
         return 'Ilocano';
      case 'ca':
         return 'Katala';
      case 'kk':
         return 'Kazak';
      case 'km':
         return 'Khmer';
      case 'rw':
         return 'Kinyarwanda';
      case 'ky':
         return 'Kirghiz';
      case 'kok':
         return 'Konkani';


      default:
         return language;
   }
}


function translateText() {
   var text = textInput.value;
   var targetLang = targetLangInput.value;

   var data = {
      text: text,
      target_lang: targetLang
   };


   var xhr = new XMLHttpRequest();
   xhr.open('POST', '/translate', true);
   xhr.setRequestHeader('Content-Type', 'application/json');

   xhr.onload = function () {
      if (xhr.status === 200) {
         var response = JSON.parse(xhr.responseText);
         document.getElementById('translated_text').textContent = response.translated_text;
      } else {
         console.log('Error:', xhr.status);
      }
   };

   xhr.onerror = function () {
      console.log('Request error');
   };

   xhr.send(JSON.stringify(data));
}


// Add event listener to the text input
textInput.addEventListener('textarea', translateText);


var recognition; // Variable to hold the recognition object

function toggleRecognition() {
   if (!recognition) {
      startRecognition();
   } else {
      stopRecognition();
   }
}

function startRecognition() {
   recognition = new webkitSpeechRecognition();
   recognition.continuous = false;
   recognition.interimResults = false;
   recognition.lang = "id-ID";
   recognition.start();

   recognition.onresult = function (event) {
      var speechResult = event.results[0][0].transcript;
      const chatboxInput = document.querySelector('textarea');
      chatboxInput.value = speechResult;
      translateText();
   };

   recognition.onend = function () {
      // Reset the recognition variable and button display
      recognition = null;
      var startRecognitionButton = document.getElementById('startRecognitionButton');
      var stopRecognitionButton = document.getElementById('stopRecognitionButton');
      startRecognitionButton.style.display = "inline-block";
      stopRecognitionButton.style.display = "none";
   };

   // Set button display
   var startRecognitionButton = document.getElementById('startRecognitionButton');
   var stopRecognitionButton = document.getElementById('stopRecognitionButton');
   startRecognitionButton.style.display = "none";
   stopRecognitionButton.style.display = "inline-block";
}

function stopRecognition() {
   recognition.stop();
}


var isSpeaking = false;

function speakText(text) {
   if (!isSpeaking) {
      isSpeaking = true;

      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);

      utterance.lang = 'id-ID';
      utterance.volume = 1;
      utterance.rate = 1;
      utterance.pitch = 1;

      utterance.onend = function (event) {
         isSpeaking = false;
      };

      speechSynthesis.speak(utterance);
   }
}

speakButton.addEventListener('click', function () {
   var translatedText = document.getElementById('translated_text').textContent;
   speakText(translatedText);
});
