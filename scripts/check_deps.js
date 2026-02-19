
const modules = [
    'next',
    'react',
    'react-dom',
    'lucide-react', // This was the suspect
    'clsx',
    'tailwind-merge',
    'framer-motion',
    '@radix-ui/react-slot',
    'class-variance-authority'
];

console.log("Checking modules...");
let failed = false;

modules.forEach(mod => {
    try {
        require.resolve(mod);
        console.log(`✅ ${mod} found.`);
    } catch (e) {
        console.error(`❌ ${mod} MISSING!`);
        failed = true;
    }
});

if (failed) {
    console.log("Environment is BROKEN.");
    process.exit(1);
} else {
    console.log("Environment looks HEALTHY.");
}
