// PDK.login
PDK.login({scope : 'read_public, write_public'}, function(session) {
  if (!session) {
    alert('The user chose not to grant permissions or closed the pop-up');
  } else {
    console.log('Thanks for authenticating. Getting your information...');
    PDK.me(function(response) {
      if (!response || response.error) {
        alert('Oops, there was a problem getting your information');
      } else {
        console.log('Welcome,  ' + response.data.first_name + '!');
      }
    });
  }
});
