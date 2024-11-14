module.exports = {
    extends: ['@it-incubator/eslint-config', "next/core-web-vitals", "next"],
    overrides: [
        {
            files: ['**/*.stories.tsx'],
            rules: {
                'no-console': 'off',
                'react-hooks/rules-of-hooks': 'off',
            },
        },
    ],
}