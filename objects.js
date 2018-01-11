var playlist = {'taylor swift':"love story", 'john cena': "you cant see me"};

function updatePlaylist( playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
  
}