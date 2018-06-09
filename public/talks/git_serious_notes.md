## On the Origin of `origin`

- `HEAD` is a reference to the last commit in the currently checked out branch
- `index` is the staging area (the phase before committing changes)
- `origin` is a reference to a remote copy of the repository but could be named anything else other than `origin`

## Committing

- `git add -p or --patch` (for tracked files) adds parts of the file for smaller concise commits
- `git commit --amend -C HEAD` adds staged files to the latest commit
- `git config --global core.editor "atom --wait"`
- https://github.com/akonwi/git-plus
- https://github.com/kemayo/sublime-text-git
- https://chris.beams.io/posts/git-commit/

## Merging

- `git pull` does a git fetch + git merge
- `git fetch` updates remote tracking branches without moving the HEAD
- `git merge --ff` (default): keeps a linear log (loses any info about branching)
  vs.
  `git rebase --no-ff`: creates a merge commit
- `git pull --rebase` does a git fetch + git rebase
- `git rebase` or `git pull --rebase`
  * NEVER rebase into a shared branch
- `git branch --merged` and `git branch --no-merged`
- `git checkout --ours FILE_NAME` and `git checkout --theirs FILE_NAME`
- `git cherry-pick COMMIT_HASH` merges a certain commit from another branch to the currently checked out branch

## Logging

- `git log --decorate --pretty=oneline --abbrev-commit` for oneliner log
- `git log -S QUERY_STRING` searches for QUERY_STRING in commits
- `git log FILE_NAME` shows commit history of that file
- `git log -p` (or `--patch`) shows the contents of each commit
- `git shortlog --summary --numbered` groups number of commits per author
- `git blame FILE_NAME` shows who wrote a certain line

## Undoing things

- `git stash`
- `git revert COMMIT_HASH`
- `git checkout SOME_REF`
- `git reset COMMIT_HASH` with these options:
  * `--hard`: moves HEAD, index, and modifies working directory (DANGEROUS)
  * `--soft`: moves HEAD only
  * `--mixed` (default): moves HEAD and index i.e., leaves commit files untracked
- `git rebase -i COMMIT_HASH` to change the history
- `git reflog` is your savior
