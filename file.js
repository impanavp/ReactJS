function fetchUserData(userId, callback) {
    // simulate fetching user data from a database
    setTimeout(() => {
      const userData = { id: userId, name: 'Impana', email: 'impana@gmail.com' };
      callback(userData);
    }, 500);
  }
  
  fetchUserData(10, (userData) => {
    console.log(userData);
  });
  