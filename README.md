Base URL: ` http://localhost:4010`

**Endpoints:**

1. **Authentication:**
   - `/auth/register`: Register a new user.
   - `/auth/login`: Log in an existing user and obtain JWT tokens for authentication.
   - `/auth/refresh-token`: Refresh the access token using the refresh token.
2. **Blog Posts:**

   - `/blogs`: Retrieve notice posts or create a new blog post.

3. **Profile Management:**
   - `/profile/:userId`: Retrieve the profile information of a specific user.
   - `/profile/avatar`: Upload or retrieve the avatar image for the user's profile.
   - `/profile`: Update the profile information of the authenticated user.
