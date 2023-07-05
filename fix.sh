git filter-branch --env-filter '
  GIT_AUTHOR_NAME="Edward Hedenberg";
  GIT_AUTHOR_EMAIL="edward@uniultra.xyz";
  GIT_COMMITTER_NAME="Edward Hedenberg";
  GIT_COMMITTER_EMAIL="edward@uniultra.xyz";
' -- --all

git filter-branch --index-filter 'git rm -rf --cached --ignore-unmatch ./fix.sh' HEAD
git filter-branch --index-filter 'git rm -rf --cached --ignore-unmatch ./.gitlab-ci.yml' HEAD
