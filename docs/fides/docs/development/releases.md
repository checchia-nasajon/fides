# Releases

---

## Versioning

Fidesctl uses semantic versioning. Due to the rapid development of the project, some minor versions may also contain minor breaking changes. Best practice is always pinning versions and carefully testing before bumping to a new version. Patch versions will never cause breaking changes, and are only used to hotfix critical bugs.

## Release Schedule

Fidesctl does not follow a set release schedule, but instead ships versions based on the addition of features/functionality. Each release, with the exception of hotfixes, will contain at least one substantial new feature.

## Planning

For each release a corresponding GitHub Project is created. These projects can be found [here](https://github.com/ethyca/fides/projects). Issues are then added to release projects as a way to organize what will be included in each release.

Once a release project is complete and the core team signs off on the readiness of the release, a new version is cut using GitHub releases. You can see all fidesctl releases [here](https://github.com/ethyca/fides/releases). Each new release triggers a GitHub Action that pushes the new version to PyPI as well as pushes a clean version to DockerHub. The release project is then marked as `closed`.

Hotfixes are an exception to this and can be added and pushed as patch versions when needed.

## Branching

Fidesctl uses continuous delivery with a single `main` branch. All code changes get merged into this branch. For releases, a new tag is created and the release process kicks off automatically. In the case of patches, a branch is created from the relevant tag and commits are then cherry-picked into it and a new patch version tag is created.