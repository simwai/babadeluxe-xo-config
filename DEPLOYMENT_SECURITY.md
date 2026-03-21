# Deployment Security & Registry Protection

Protecting your private registry and authentication tokens is critical for maintaining the integrity of your code and preventing unauthorized access. This guide outlines the recommended practices for using `@babadeluxe/xo-config` with a private registry like `npflared` without exposing sensitive credentials.

## 1. The Scoped Read-Only Token Approach

The most secure way to handle authentication in a CI/CD environment or on shared servers is to use **Granular Access Tokens** with **read-only** permissions.

### Why this is safer:
- **Limited Scope**: You can restrict the token to specific packages or scopes (e.g., only `@babadeluxe/*`).
- **Read-Only**: Even if the token is stolen, the attacker cannot publish new (potentially malicious) versions of your packages or modify your registry.
- **CIDR Restriction**: (Optional) You can restrict the token to be usable only from specific IP ranges (e.g., your office or your CI runner's IP block).

### How to create one:
Using the npm CLI:
```bash
npm token create --name "CI-Read-Only" --scopes "@babadeluxe" --packages-and-scopes-permission "read-only" --bypass-2fa
```
*Note: Legacy "automation" tokens are being phased out in favor of these granular tokens.*

## 2. Secure Token Management (No GitHub Actions)

If you wish to avoid GitHub Actions but still need to deploy safely, consider these alternatives:

### Environment Variable Injection
Instead of committing a `.npmrc` file with a hardcoded token, use a template `.npmrc` and inject the token via environment variables on your deployment target.

**Template `.npmrc`:**
```text
@babadeluxe:registry=https://npflared.simonwaiblinger.workers.dev
//npflared.simonwaiblinger.workers.dev/:_authToken=${NPM_TOKEN}
```

Then, on your server or build environment, set the `NPM_TOKEN` variable in your shell profile (e.g., `.bashrc`, `.zshrc`) or via your hosting provider's dashboard (Vercel, Netlify, Railway, etc.):
```bash
export NPM_TOKEN=your_read_only_token_here
```

### `.npmrc` in Home Directory
Keep the `.npmrc` file in the home directory of the user running the deployment (`~/.npmrc`) rather than in the project root. npm will automatically look there. This prevents the token from ever being checked into version control.

## 3. GitHub Actions (The "Safety First" Choice)

While you expressed a preference for avoiding it, GitHub Actions is often the easiest way to manage secrets securely for many developers.

1. Add your read-only token to **GitHub Secrets** (Settings > Secrets and variables > Actions).
2. Use the `setup-node` action which handles the `.npmrc` creation for you:

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
    with:
      node-version: '20'
      registry-url: 'https://npflared.simonwaiblinger.workers.dev'
      scope: '@babadeluxe'
  - run: npm install
    env:
      NODE_AUTH_TOKEN: ${{ secrets.NPFLARED_TOKEN }}
```

## Summary Recommendation

To minimize risk without using GitHub Actions:
1. **Generate a Granular Read-Only Token** scoped specifically to `@babadeluxe`.
2. **Never commit the token** to your repository.
3. **Use the `${NPM_TOKEN}` syntax** in your `.npmrc` and set the variable in your deployment environment's secure storage.
