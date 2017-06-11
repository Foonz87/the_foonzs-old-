var aboutCharlie = "We bought Charlie when we did not know about puppy farms and the good of rescuing. Charlie came from a store that sold to pet shops but were the 'rejects' they couldn't sell. She was the only one from her litter because her tail was broken (still broken today). I am not trying to justify what we did, but if we didn't get her she would have ended up in a shelter. She is the reason we have learnt everything we know today about puppy farms and how terrible they are. We love her dearly and are proud to be her furparents!"
var aboutAtticus = "We rescued Atticus at 11 weeks old. I had never had a cat for a pet as my Mum has a fear of them but Mrs Foonz grew up with cats. One day i was at Mrs Foonz parents house. Their cat sat on me and was purring like crazy (that cat never interacted with me). I messaged Mrs Foonz to tell her I want a cat. That day we went to RSPCA and found a heap of kittens. There was an orange kitten Mrs Foonz liked but i fell in love with the Atticus. We held them next to each other and the orange one belted Atticus in the face so I said he is coming home with us!"
var aboutSamara = "Samara was 6 months old when we adopted her. The people who had her believed she was a pomeranian X chihuahua. As she grew they didn't want her because she wasn't what they thought. A good friend of ours Caroline fostered her for only a week. During that week she was microchiped and desexed. Mrs Foonz met Samara (Ruby) at dog training and decided she was ours. She then drove her to my work where on my lunch break I sat out the back in a chair cuddling her while she slept until my break was over. She has been my best friend ever since."
var aboutBrooklyn = " Mrs Foonz found Brooklyn on the streets at 6 months old. We took him to the shelter and 2 weeks later his owners never came to get him. Mrs Foonz worked at the shelter where Brooklyn was terrorising staff and other cats. They asked/told us to adopt him and he is now the biggest sook in the family."
var aboutBellatrix = "We rescued Bellatrix at 12 months old. We don't know her history but pretty sure she was abuse by a man. After 3 months of her bitting and hissing at us, we decided one night our home was too stressful for her and we would rehome her to a single animal family. The very next day she was cuddling Mrs Foonz in the morning and ended up sleeping on my chest that night! Since then she has been amazing and every night she cuddles with me in bed "
var aboutProngs = "This is Prongs."

function imageCharlie()
  {
    document.getElementById('image').src="images/charlie.jpg";
    $('.aboutPets').text(aboutCharlie);
  }

function imageAtticus()
  {
    document.getElementById('image').src="images/atticus.jpg";
    $('.aboutPets').text(aboutAtticus);
  }

function imageSamara()
  {
    document.getElementById('image').src="images/samara.jpg";
    $('.aboutPets').text(aboutSamara);
  }

function imageBrooklyn()
  {
    document.getElementById('image').src="images/brooklyn.jpg";
    $('.aboutPets').text(aboutBrooklyn);
  }

function imageBellatrix()
  {
    document.getElementById('image').src="images/bellatrix.jpg";
    $('.aboutPets').text(aboutBellatrix);
  }

function imageProngs()
  {
    document.getElementById('image').src="images/prongs.jpg";
    $('.aboutPets').text(aboutProngs);
  }

function imageAbout()
  {
    $('.image').click($('.aboutPets').toggle());
  }
