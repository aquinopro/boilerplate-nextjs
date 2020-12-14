module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'A default component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the component name, due?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/component/index.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/stories.tsx',
                templateFile: 'templates/component/stories.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.tsx',
                templateFile: 'templates/component/styles.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.tsx',
                templateFile: 'templates/component/test.tsx.hbs',
            },
        ],
    });
    plop.setGenerator('page', {
        description: 'A default page',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the page name, due?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/pages/{{camelCase name}}.tsx',
                templateFile: 'templates/page/index.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/styles/pages/{{camelCase name}}.ts',
                templateFile: 'templates/page/styles.tsx.hbs',
            },
        ],
    });
};
