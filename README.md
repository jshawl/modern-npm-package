# Modern NPM Package

## Configuration

- package.json author
- LICENSE.txt author and year
- CHANGELOG.md github urls and tags

## Testing

```
npm test
```

## Releasing

- Update the changelog.
- Update the package.json version.
- `git commit -am v0.0.N"
- `git tag -as v0.0.N`
- `git push --tags`
- `npm publish`

