$(document).ready(function(){
  $('#button').click(function(){
    var title= $('#search').val();
    var result= $('#movieDetails');
    result.empty();
    $.ajax({
      type: 'get',
      url: 'http://www.omdbapi.com',
      data: { t: title},
      dataType: 'json',
      success: function(response){
        if (response.message!=null) {
          alert(response.message);
        }
        else {
          result.append('<p><img src="'+response.Poster+'"> </p>');
          result.append('<p>Title: '+ response.Title +'</p>');
          result.append('<p>Year: '+ response.Year+'</p>');
          result.append('<p>imdbID: '+response.imdbID+'</p>');
          result.append('<p>Type: '+response.Type+'</p>');
          result.append('<p>Rating: '+response.Rated+'</p>');
          result.append('<p>Genre: '+response.Genre+'</p>');
        }
      },
      error: function(error){
        alert(error);
      }
    });
  });
});
