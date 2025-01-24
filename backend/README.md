# General Data

## Urls Connecting

### Auth Controller

#### POST Login
- Url: /auth/login
- Params: { "email": "", "password": "" }
- Return: { "access_token": "" }

#### GET Profile
- Url: /auth/profile
- Auth: Bearer Token
- Return: { user without password and iat, exp }

#### Post SignUp
- Url: /auth/signup
- Body: { user data }
- Return: { user without password }

### User Controller

#### GET User List for testing (Public response without token)
- Url: /users/
- Return: [{ user }]

#### DELETE User
- Url: /users/:id
- Auth: Bearer Token
- Return: { user }

#### PATCH User
- Url: /users/:id
- Auth: Bearer Token
- Body: { user }
- Return: { user }