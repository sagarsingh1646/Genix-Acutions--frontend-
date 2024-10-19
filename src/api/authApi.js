export const signupUser = async (userData) => {
    const response = await fetch('http://localhost:3002/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error('Signup failed');
    }
  
    const data = await response.json();
    return data.token;
  };

  export const signinUser = async (userData) => {
    const response = await fetch('http://localhost:3002/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error('Signin failed');
    }
  
    const data = await response.json();
    return data.token;
  };
  