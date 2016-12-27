$(document).ready(function(){
  $('#button').click(function(){
    var title= $('#search').val();
    var result= $('#movieDetails');
    result.empty();
    $.ajax({
      type: 'get',
      url: 'http://www.omdbapi.com',
      data: { s: title},
      dataType: 'json',
      success: function(response){
        if (response.message!=null) {
          alert(response.message);
        }
        else {
          $.each(response.Search, function(i, data){
            result.append('<p id="poster"><a><img src="'+this.Poster+'"></a></p>');
            //result.append('<p>Title: '+ this.Title +'</p>');
            //result.append('<p>Year: '+ this.Year+'</p>');
            //result.append('<p>imdbID: '+this.imdbID+'</p>');
            //result.append('<p>Type: '+this.Type+'</p>');
            //result.append('<p>Rating: '+this.Rated+'</p>');
            //result.append('<p>Genre: '+this.Genre+'</p>');
          });
        }
      },
      error: function(error){
        alert(error);
      }
    });
  });
  $('#poster').click(function(){

  });
});
