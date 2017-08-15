$(document).ready(function() {
  // Options
  // $.get(), $.post(), $.ajax(), $getJSON()
  // $(function() {
    // $.load()
    // $('#code').load('js/script.js');
    // load data file and if it doesn't exist, throw out error
    // $('#code').load('js/script.js', function(response, status) {
    //   if(status === 'error') {
    //     alert('Could not find file needed to load data');
    //   }
    // });
  // });

  // $(function() {
  //   // JSON, $.getJSON()
  //   // Objects Example
  //
  //   var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  //
  //   $.getJSON(flickrApiUrl, {
  //     // options...
  //     tags: 'sun, beach',
  //     tagmode: 'any',
  //     format: 'json'
  //   }).done(function(data) {
  //     // success
  //     console.log(data);
  //     $.each(data.items, function(index, value) {
  //       $('<img>').attr('src', value.media.m).appendTo('#flickr');
  //
  //       if (index === 4) {
  //         return false;
  //       }
  //     });
  //   }).fail(function() {
  //     // failure
  //     alert('Ajax call failed.');
  //   });
  //
  // });

  // $(function() {
  //   // JSON, $.getJSON()
  //   var pokeApiUrl = 'http://pokeapi.co/api/v2/generation/1';
  //   var pokemonByName = 'http://pokeapi.co/api/v2/pokemon/';
  //   $.getJSON(pokeApiUrl).done(function(data) {
  //     console.log(data);
  //     $.each(data.pokemon_species, function(index, pokemon) {
  //       var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  //       var link = $('<a>').attr('id', pokemon.name).attr('href', '#').append($('<strong>').text(name));
  //       var para = $('<p>').html('Pokemon species no. ' + (index+1) + ' is ').append(link);
  //
  //       link.click(function(event) {
  //         $.getJSON(pokemonByName + pokemon.name).done(function(details) { // data already used is why 'details' is used
  //           console.log(details);
  //           var pokemonDiv = $('#pokemon-details');
  //           pokemonDiv.empty();
  //           pokemonDiv.append('<h2>' + name + '</h2>');
  //           pokemonDiv.append('<img src="' + details.sprites.front_default +'">');
  //           pokemonDiv.append('<img src="' + details.sprites.back_shiny +'">');
  //           pokemonDiv.append('<img src="' + details.sprites.front_shiny +'">');
  //           pokemonDiv.append('<img src="' + details.sprites.back_default +'">');
  //         });
  //         event.preventDefault();
  //       });
  //       para.appendTo('#pokemon');
  //     })
  //   }).fail(function() {
  //     console.log('Request to Poke-Api failed');
  //   }).always(function() {
  //     console.log('Pokemon is crazy stuff');
  //   });
  //
  // });


  $('#getPageNumber').on('click', function() {

    var pageNumber = $('.pageOption').val();
    var starWarsCharacters = 'https://swapi.co/api/people/?page=';
    var newPage = pageNumber;
    var starApiUrl = starWarsCharacters + newPage;

    $.getJSON(starApiUrl).done(function(data) {
      console.log(data);

      $.each(data.results, function(index, character) {
        var name = character.name;
        var birthDay = character.birth_year;
        var eyeColor = character.eye_color;
        var gender = character.gender;
        var para = $('<p>').html(
          'Star Wars character ' + name +
          '<br /> DOB: ' + birthDay +
          '<br /> Eye Color: ' + eyeColor +
          '<br /> Gender: ' + gender );
        para.appendTo('#starCharacters');
      });

    }).fail(function() {
      console.log('Request to Star Wars FAILED!!');

    }).always(function() {
      console.log('Star Wars huh? ... Nerd');
    });

  });





});
