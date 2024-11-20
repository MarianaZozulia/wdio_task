module.exports = {
    testCases: [
        {
            description: 'I Can Win',
            code: 'Hello from WebDriver',
            syntax: '', 
            expiration: '10 Minutes',
            title: 'helloweb',
        },
        {
            description: 'Bring It On',
            code: `
git config --global user.name "New Sheriff in Town"
git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
git push origin master --force
            `,
            syntax: 'Bash',
            expiration: '10 Minutes',
            title: 'how to gain dominance among developers',
        },
    ],
};
