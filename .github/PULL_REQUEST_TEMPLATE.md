# Pull Request

## Description
<!-- Provide a clear and concise description of the changes in this PR -->

## Type of Change
<!-- Check all that apply -->
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Refactoring (no functional changes)
- [ ] Performance improvement
- [ ] Dependency update

## Scope
<!-- Check all that apply -->
- [ ] Shared packages (affects all client sites)
- [ ] Specific client site (specify: ________________)
- [ ] CI/CD workflows
- [ ] Documentation only
- [ ] Claude Code agents

## Testing
<!-- Describe the testing you performed -->
- [ ] Unit tests added/updated and passing
- [ ] Manual testing completed
- [ ] Accessibility testing (WCAG 2.1 AA)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness verified
- [ ] SEO validation (schema markup, meta tags)

## Checklist
<!-- Ensure all items are completed before requesting review -->
- [ ] Code follows project code style conventions (CLAUDE.md Section 11)
- [ ] Self-review of code completed
- [ ] Comments added for complex logic
- [ ] Documentation updated (if applicable)
- [ ] No console errors or warnings
- [ ] TypeScript strict mode passes with no type errors
- [ ] All automated tests pass (`nx run-many --target=test --all`)
- [ ] Linting passes (`nx run-many --target=lint --all`)

## Shared Package Changes
<!-- If this PR modifies shared packages, complete this section -->
- [ ] Tested impact on all client sites using `nx affected:build`
- [ ] Updated package version (if breaking change)
- [ ] Updated shared package README with new functionality
- [ ] Created migration guide (if breaking change)

## Screenshots
<!-- If applicable, add screenshots to demonstrate visual changes -->

## Related Issues
<!-- Link to related issues using #issue-number -->
Closes #

## Additional Notes
<!-- Any additional information reviewers should know -->

---

## Reviewer Checklist
<!-- For reviewers only -->
- [ ] Code quality and readability
- [ ] Architecture alignment with CLAUDE.md principles
- [ ] Test coverage adequate (>80% for utilities)
- [ ] Documentation clear and complete
- [ ] No security vulnerabilities introduced
- [ ] Performance impact acceptable
- [ ] Accessibility standards met
