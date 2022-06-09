
// stopped at 03:15:14 Let's Build a Field Guide to Aliens! #100Devs
document.querySelector('#getButton').addEventListener('click', apiRequest);

async function apiRequest() {
  const alienName = document.querySelector('input').value.toLowerCase();

  try {
    const response = await fetch(`https://star-trek-api-tim-practice.herokuapp.com/api/${alienName}`);
    const data = await response.json();
  
    document.getElementById('alienName').innerText = data.speciesName;
    document.getElementById('alienWorld').innerText = data.homeworld;
    document.getElementById('alienFeatures').innerText = data.features;
    document.getElementById('alienFacts').innerText = data.interestingFact;
    document.getElementById('alienExamples').innerText = data.notableExamples;
    document.getElementById('alienImage').src = data.image;
  } catch(error) {
      console.log(error);
  }

};
