export const referenceData = [
  {
    title: 'Prepare Repository',
    summary: 'Start working with a git repository',
    contents: [
      {
        title: 'Initialize Repository',
        summary: 'Create a new empty repository in current directory',
        command: 'git init',
      },
      {
        title: 'Clone Repository',
        summary: 'Clone repository from URL',
        command: 'git clone <url> <dir>',
      },
    ],
  },
  {
    title: 'Configuration',
    summary:
      'Before you start working with a repository, it should be properly configured',
    contents: [
      {
        title: 'Show Configurations',
        summary: 'Show current configurations',
        command: 'git config --list',
      },
      {
        title: 'Set User Name',
        summary: 'Set committer user name',
        command: 'git config user.name <name>',
      },
      {
        title: 'Set User Email',
        summary: 'Set committer email address',
        command: 'git config user.email <email>',
      },
      {
        title: 'Unix/Windows EOL Conversion',
        summary:
          'Automatically convert between Unix and Windows end of the line on commit and checkout',
        command: 'git config core.autocrlf true',
      },
      {
        title: 'EOL Conversion on Save Only',
        summary:
          'Convert CRLF to LF only when committing, use original line ending on checkout',
        command: 'git config core.autocrlf input',
      },
      {
        title: 'Change Editor',
        summary: 'Change text editor for writing commit message',
        command: 'git config core.editor <editor>',
      },
      {
        title: 'Get Configuration',
        summary: 'Get configuration value for a configuration name',
        command: 'git config --get <config-name>',
      },
      {
        title: 'Unset Configuration',
        summary: 'Unset configuration value for given configuration name',
        command: 'git config --unset <config-name>',
      },
      {
        title: 'Configuration Scope',
        summary:
          '--local or none for current repo, --global for user scope, --system for system scope',
        command: 'git config [--global | --system] <name> <value>',
      },
    ],
  },
  {
    title: 'Working with Repository',
    summary: 'Adding files, committing changes',
    contents: [
      {
        title: 'Show Status',
        summary: 'Show working directory status, what files changed',
        command: 'git status',
      },
      {
        title: 'Add File to Index',
        summary: 'Add file or directory to the index for the next commit',
        command: 'git add <file>',
      },
      {
        title: 'Add Modified Files',
        summary:
          'Update modified files to the index, it will not add new files',
        command: 'git add -u',
      },
      {
        title: 'Remove File from Index',
        summary: 'Remove file from index, file on current directory unaffected',
        command: 'git reset -- <file>',
      },
      {
        title: 'Discard Modification',
        summary: 'Discard file modification, restore file from index',
        command: 'git checkout -- <file>',
      },
      {
        title: 'Delete File',
        summary: 'Delete file in the working directory and the index',
        command: 'git rm <file>',
      },
      {
        title: 'Commit Change',
        summary: 'Apply changes in the index with given commit message',
        command: 'git commit -m ["message"]',
      },
      {
        title: 'Revise Commit',
        summary: 'Replace last commit of the current branch with current index',
        command: 'git commit --amend',
      },
      {
        title: 'Reset Author',
        summary: 'Amend commit author and author date to the committer',
        command: 'git commit --amend --reset-author',
      },
      {
        title: 'Change Author',
        summary:
          'Amend commit author with given author name and email, author date unchaged',
        command: 'git commit --amend --author="Author Name <email>"',
      },
      {
        title: 'Change Author Date',
        summary: 'Amend author date, use ISO 8601 format for convenience',
        command: 'git commit --amend --date="1999-12-31T23:59:59"',
      },
      {
        title: 'Show Commit Log',
        summary: 'Show commit logs, limit showing <number> commits',
        command: 'git log [-n <number>]',
      },
      {
        title: 'Show Short Log',
        summary: 'Show shorter commit log',
        command: 'git shortlog',
      },
      {
        title: 'Short Log Summary',
        summary: 'Show even shorter commit count cummary',
        command: 'git shortlog -s',
      },
      {
        title: 'Diff Working Directory',
        summary: 'Show diff between index and working directory',
        command: 'git diff',
      },
      {
        title: 'Diff Working Directory and Branch',
        summary: 'Show diff between branch and working directory',
        command: 'git diff <branch-name>',
      },
      {
        title: 'Show Diff between Branches',
        summary: 'Show diff between two branches',
        command: 'git diff <branch-1> <branch-2>',
      },
      {
        title: 'Dry-run Clean',
        summary: 'See what would be done by git clean command',
        command: 'git clean -n',
      },
      {
        title: 'Remove Untracked Files',
        summary: 'Interactively remove untracked files from repository',
        command: 'git clean -i',
      },
    ],
  },
  {
    title: 'Manage Branch',
    summary: 'Working with git branches',
    contents: [
      {
        title: 'Detach Branch',
        summary: 'Detach head from current branch',
        command: 'git checkout --detach',
      },
      {
        title: 'Create New Branch',
        summary: 'Create new branch starting from current head',
        command: 'git checkout -b <branch-name>',
      },
      {
        title: 'Switch Branch',
        summary: 'Change active branch',
        command: 'git checkout <branch-name>',
      },
      {
        title: 'Checkout to Commit Name',
        summary:
          'Checkout to commit-name. Commit name can be branch name, commit hash or relative HEAD reference',
        command: 'git checkout <commit-name>',
      },
      {
        title: 'Checkout to Previous Commit',
        summary:
          'Detach head and switch to previous commit. Where ~1 is previous commit, ~2 is previous 2 commits, etc.',
        command: 'git checkout <HEAD~1>',
      },
      {
        title: 'Reset Current Head',
        summary:
          'Move current branch head to commit-name. Changes in index AND working directory are discarded. Potentially causing commits after commit-name lose. Use with caution.',
        command: 'git reset --hard <commit-name>',
      },
      {
        title: 'List Branches',
        summary: 'List local branches',
        command: 'git branch [--list]',
      },
      {
        title: 'List Remote Tracking Branches',
        summary: 'List remote tracking bracnhes',
        command: 'git branch -r',
      },
      {
        title: 'List Branches and Commit Message',
        summary: 'List branches, hash, and commit message',
        command: 'git branch -v',
      },
      {
        title: 'Sort Branches By Committer Date',
        summary:
          'List branches, hash, and commit message, sort by committer date',
        command: 'git branch -v --sort=committerdate',
      },
      {
        title: 'Sort Branches By Author Date',
        summary: 'List branches, hash, and commit message, sort by author date',
        command: 'git branch -v --sort=authordate',
      },
      {
        title: 'List All Branches',
        summary: 'List both local and remote-tracking branches',
        command: 'git branch -a',
      },
      {
        title: 'Delete Branch',
        summary: 'Delete already merged branches',
        command: 'git branch -d <branch-name>',
      },
      {
        title: 'Force Delete Branch',
        summary: 'Delete branch, even unmerged. Use with caution.',
        command: 'git branch -D <branch-name>',
      },
      {
        title: 'Merge Branch',
        summary:
          'Merge other branch with current branch, fast-forword if possible',
        command: 'git merge <other-branch>',
      },
      {
        title: 'Merge Using Merge Commit',
        summary: 'Merge other branch, use merge commit',
        command: 'git merge --no-ff <other-branch>',
      },
      {
        title: 'Interactive Branch Rebase',
        summary: 'Rebase current branch with other branch interactively',
        command: 'git rebase -i <other-branch>',
      },
    ],
  },
  {
    title: 'Manage Tags',
    summary: 'Manage local tags',
    contents: [
      {
        title: 'List Tags',
        summary: 'List available tags',
        command: 'git tag',
      },
      {
        title: 'Add Tag',
        summary: 'Create new lightweight tag named <tag-name>',
        command: 'git tag <tag-name>',
      },
      {
        title: 'Delete Tag',
        summary: 'Delete a tag named <tag-name>',
        command: 'git tag -d <tag-name>',
      },
    ],
  },
  {
    title: 'Stash Working Directory',
    summary: 'Save and restore working directory state',
    contents: [
      {
        title: 'Stash Working Directory',
        summary:
          'Save working directory state to new stash and clean up working directory',
        command: 'git stash save',
      },
      {
        title: 'List Stashes',
        summary: 'List stashes, stash@{0} is last stash',
        command: 'git stash list',
      },
      {
        title: 'Restore Stash',
        summary: 'Restore last stash and apply to working directory',
        command: 'git stash pop',
      },
      {
        title: 'Remove Last Stash',
        summary: 'Remove last stash, saved state will be discarded',
        command: 'git stash drop',
      },
      {
        title: 'Clear stashes',
        summary: 'Remove all stashes, saved states will be discarded',
        command: 'git stash clear',
      },
    ],
  },
  {
    title: 'Remote Repository',
    summary: 'Synchronize objects between local and remote repository',
    contents: [
      {
        title: 'Show remote repositories',
        summary: 'Show remote repositories name and url for push/fetch',
        command: 'git remote -v',
      },
      {
        title: 'Add Remote Repository',
        summary: 'Add new remote repository with given remote name',
        command: 'git remote add <remote-name> <url>',
      },
      {
        title: 'Push Branch to Remote',
        summary: 'Push local branch to remote repository',
        command: 'git push <remote-name> <branch-name>',
      },
      {
        title: 'Delete Remote Branch',
        summary: 'Delete a branch from remote repository',
        command: 'git push --delete <remote-name> <branch-name>',
      },
      {
        title: 'Push Tag',
        summary: 'Push single local tag to remote repository',
        command: 'git push <remote-name> <tag-name>',
      },
      {
        title: 'Push All Tags',
        summary: 'Push all local tags to remote repository',
        command: 'git push --tags <remote-name>',
      },
      {
        title: 'Delete Remote Tag',
        summary: 'Delete a tag from remote repository',
        command: 'git push --delete <remote-name> <tag-name>',
      },
      {
        title: 'Fetch from Remote',
        summary:
          'Update remote-tracking branches. Remote-tracking branches are NOT automatically merged with local branches. Use git branch -r to list remote-tracking branches',
        command: 'git fetch <remote-name>',
      },
      {
        title: 'Pull from Remote',
        summary:
          'Retrieve objects from remote branches, and merge with current branch. Use with caution.',
        command: 'git pull <remote-name> <branch-name>',
      },
    ],
  },
  {
    title: 'Repository Maintenance',
    summary: 'Keep git repository clean and optimized',
    contents: [
      {
        title: 'Optimize Repository',
        summary:
          'Remove unnecessary files and references, optimize repository. It is a good idea to run gc periodically',
        command: 'git gc',
      },
      {
        title: 'Optimize Repository if Required',
        summary:
          'Check and run gc only if required, otherwise exit without doing gc',
        command: 'git gc --auto',
      },
      {
        title: 'Check Repository',
        summary: 'Check integrity of objects in the repository',
        command: 'git fsck',
      },
    ],
  },
];
