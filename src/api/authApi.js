export const signupUser = async (userData) => {
    const response = await fetch('https://whisperoo.in/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
  
    
    return data.token;
  };

  export const signinUser = async (userData) => {
    const response = await fetch('https://whisperoo.in/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
  
    if (!response.ok) {
      console.log(response)
      throw new Error(data.message);
    }
  
    return data.token;
  };
  
