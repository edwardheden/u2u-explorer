git filter-branch -f --env-filter '
  GIT_AUTHOR_NAME="Edward Hedenberg";
  GIT_AUTHOR_EMAIL="edward@uniultra.xyz";
  GIT_COMMITTER_NAME="Edward Hedenberg";
  GIT_COMMITTER_EMAIL="edward@uniultra.xyz";
' -- --all
